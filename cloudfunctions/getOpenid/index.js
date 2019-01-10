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
  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）
  const wxContext = await cloud.getWXContext()

  // 写入错误记录
  if (!wxContext.OPENID) {
    let _nTime = new Date().getTime();
    await db.collection('error_log').add({
      data: {
        function_name: "getOpenId",
        event: event,
        context: context,
        time: _nTime,
      }
    }).then(res => {
      let _sErrID = res._id;
      console.log("success", res, "saved_ErrorID:", _sErrID, ";saved_Time:", _nTime);
    }).catch(err => {
      console.log("save_fail", err);
    })
  }
  return {
    openid: wxContext.OPENID,
    unionid: wxContext.UNIONID,
    appid: wxContext.APPID
  }
}
