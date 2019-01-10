// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')
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

  let _sSaveID = null;
  let _nTime = new Date().getTime();

  let user_name_default = `游客`;
  let user_num = `${parseInt(_nTime/1000)}`;
  let _userInfo = "";

  if (wxContext.OPENID) {
    let dbUser = db.collection('user');
    await dbUser.where({
      openid: wxContext.OPENID
    }).get().then(async (res) => {
      if (res.data.length > 0) {
        _sSaveID = res.data[0]._id;
        user_num = res.data[0].user_num;
        user_name = res.data[0].user_name;
        _userInfo = res.data[0].user_info
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
        user_name = event.userinfo ? event.userinfo.nickName : user_name_default;
        await dbUser.add({
          // data 字段表示需新增的 JSON 数据
          data: {
            add_time: _nTime,
            appid: wxContext.APPID,
            openid: wxContext.OPENID,
            user_name: user_name,
            user_num: user_num
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

  return {
    openid: wxContext.OPENID,
    unionid: wxContext.UNIONID,
    appid: wxContext.APPID,
    user_name: user_name,
    user_num: user_num,
    userInfo: _userInfo
  }
}
