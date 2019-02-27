// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')
const dataCrypt = require('./dataCrypt')
const key = require('./key');
// 初始化 cloud
cloud.init()
const db = cloud.database({
  env: 'zhijia-75abfd'
})
/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
exports.main = async (event, context) => {

  // console.log(event)
  // console.log(context)
  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看
  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）
  let wxContext = await cloud.getWXContext();
  console.log(wxContext);

  let _sSaveID = null;
  let _nTime = new Date().getTime();

  let user_name_default = `游客`;
  let _user_num = `${parseInt(_nTime/1000)}`;
  let _userInfo = {};
  let _basicInfo = {};

  if (wxContext.OPENID) {
    let dbUser = db.collection('user');
    await dbUser.where({
      openid: wxContext.OPENID
    }).get().then(async (res) => {
      if (res.data.length > 0) {
        _sSaveID = res.data[0]._id;
        _user_num = res.data[0].user_num;
        _userInfo = res.data[0].user_info;
        _basicInfo = res.data[0].basic_info;
        await dbUser.where({
          openid: wxContext.OPENID
        }).update({
          data: {
            updatetime: _nTime,
          },
        }).then(res => {
          console.log("update Success", res)
        }).catch(err => {
          console.log("update Error", err)
        })
      } else {
        _userInfo = {
          nickName: user_name_default
        };
        await dbUser.add({
          // data 字段表示需新增的 JSON 数据
          data: {
            add_time: _nTime,
            appid: wxContext.APPID,
            openid: wxContext.OPENID,
            user_num: _user_num,
            user_info: _userInfo
          }
        }).then(res => {
          console.log("add Success", res);
          _sSaveID = res._id;
        }).catch(err => {
          console.log("add Error", err)
        })
      }
    });
    console.log("saved_ID:", _sSaveID, ";saved_Time:", _nTime);
  } else {
    // 记录错误日志
    await db.collection('error_log').add({
      data: {
        function_name: "login",
        event: event,
        context: context,
        time: _nTime,
      }
    }).then(res => {
      let _sErrID = res._id;
      console.log("saved_ErrorID:", _sErrID, ";saved_Time:", _nTime, "success", res);
    })
  }
  // 加密appid
  let appid = dataCrypt.encrypt(wxContext.APPID, key.pubKey);
  appid = appid.toString("base64");
  // 加密openid
  let openid = dataCrypt.encrypt(wxContext.OPENID, key.pubKey);
  openid = openid.toString("base64");

  return {
    appid,
    openid,
    unionid: wxContext.UNIONID,
    basicInfo: _basicInfo,
    userNo: _user_num,
    userInfo: _userInfo,
    time: _nTime
  }
}
