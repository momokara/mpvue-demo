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
  // console.log("context",event)
  // console.log("wxContext",context)
  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看
  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）
  let wxContext = {};
  if (event.userInfo) {
    wxContext = {
      OPENID: event.userInfo.openId,
      APPID: event.userInfo.appId
    }
  } else {
    wxContext = await cloud.getWXContext();
  }

  let _sSaveID = null;
  let _nTime = new Date().getTime();

  let user_name_default = `游客`;
  // 接收的微信公开信息
  let _userInfo = event.userinfo ? event.userinfo : {};
  // 接收的用户基本信息
  let _basic_info = event.basicinfo ? event.basicinfo : {};
  let user_num = '';
  let user_name = '';
  let user_info = '';
  let basic_info = '';

  if (wxContext.OPENID) {

    let dbUser = db.collection('user');
    await dbUser.where({
      openid: wxContext.OPENID
    }).get().then(async (res) => {
      if (res.data.length > 0) {
        _sSaveID = res.data[0]._id;
        user_num = res.data[0].user_num;

        // 已经存储的信息
        let saveduser_name = res.data[0].user_name;
        let saved_user_info = res.data[0].userInfo ? res.data[0].userInfo : {};
        let saved_basic_info = res.data[0].userInfo ? res.data[0].userInfo : {};
        user_info = _userInfo.nickName ? _userInfo : saved_user_info;
        basic_info = _basic_info ? _basic_info : saved_basic_info;

        await dbUser.where({
          openid: wxContext.OPENID
        }).update({
          data: {
            updatetime: _nTime,
            user_info: user_info,
            basic_info: basic_info
          },
        }).then(res => {
          console.log("success", res)
        })
      } else {
        // 用时间戳生成一个id
        user_num = `${parseInt(_nTime/1000)}`;
        user_info = _userInfo;
        basic_info = _basic_info;
        await dbUser.add({
          // data 字段表示需新增的 JSON 数据
          data: {
            add_time: _nTime,
            appid: wxContext.APPID,
            openid: wxContext.OPENID,
            user_num: user_num,
            user_info: user_info,
            basic_info: basic_info
          }
        }).then(res => {
          console.log("success", res);
          _sSaveID = res._id;
        }).catch(res => {
          console.log("catch", res)
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
      console.log("success", res);
      let _sErrID = res._id;
      console.log("saved_ErrorID:", _sErrID, ";saved_Time:", _nTime);
    })
  }

  return {
    openid: wxContext.OPENID,
    unionid: wxContext.UNIONID,
    appid: wxContext.APPID,

    user_num: user_num,
    // 用户信息
    userInfo: user_info,
    // 用户基本信息
    basicInfo: basic_info
  }
}
