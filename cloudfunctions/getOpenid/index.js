// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')
const dataCrypt = require('./dataCrypt')
const key = require('./key')
// 初始化 cloud
cloud.init()

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 *
 * event 参数包含小程序端调用传入的 data
 *
 */
exports.main = async (event, context) => {
  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）
  const wxContext = await cloud.getWXContext()
  console.log('wxContext', wxContext)
  console.log('event', event)
  let openid = wxContext.OPENID
  let unionid = wxContext.UNIONID
  let appid = wxContext.APPID
  let _nTime = new Date().getTime()
  let token
  // eslint-disable-next-line no-throw-literal

  try {
    if (!wxContext.OPENID) {
      let errData = {
        function_name: 'getOpenId',
        event: event,
        context: context,
        time: _nTime
      }
      console.error(errData)
    }
  } catch (error) {
    console.error(error)
  }

  let data = {
    a: appid,
    o: openid,
    u: unionid,
    t: _nTime
  }

  data = JSON.stringify(data)
  console.log(data, data.length)
  token = dataCrypt.encrypt(data, key.pubKey)
  token = token.toString('base64')
  // token = data;

  // 加密openid
  // openid = undefined

  let loginReqid = context.request_id
  return {
    token,
    // openid,
    loginReqid,
    time: _nTime,
    fileName: appid
  }
}
