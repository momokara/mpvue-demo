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
  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）
  const wxContext = await cloud.getWXContext()
  let openid = wxContext.OPENID;
  let unionid = wxContext.UNIONID;
  let appid = wxContext.APPID;
  let _nTime = new Date().getTime();
  let trywork;
  // 写入错误记录
  try {
    trywork = true;
    if (!wxContext.OPENID) {
     
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
  } catch (error) {
    console.error(error)
  }

  if (event.isEncode) {
    // 加密appid
    appid = dataCrypt.encrypt(appid, key.pubKey);
    appid = appid.toString("base64");
    // 加密openid
    openid = dataCrypt.encrypt(openid, key.pubKey);
    openid = openid.toString("base64");
    if (unionid) {
      unionid = dataCrypt.encrypt(unionid, key.pubKey);
      unionid = unionid.toString("base64");
    }
  }

  return {
    openid,
    unionid,
    appid,
    trywork,
    time: _nTime
  }
}
