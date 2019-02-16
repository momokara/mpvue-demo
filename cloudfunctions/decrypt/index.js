// 云函数入口文件
// 解密
const cloud = require('wx-server-sdk')
const rp = require('request-promise')
const WXBizDataCrypt = require('./WXBizDataCrypt')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const appId = "wx7e28d99c40baf7a8"
  const appSecret = "e36e25b3ce8bb99cb0f11334514a7109"
  const jscode = event.code
  const encryptedData = await event.encryptedData.toString()
  const iv = event.iv.toString()
  const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${jscode}&grant_type=authorization_code`
  const resultValue = await rp(url).then(res => {
    res = JSON.parse(res)
    let sessionKey = res.session_key
    const pc = new WXBizDataCrypt(appId, sessionKey)
    let resdata = pc.decryptData(encryptedData, iv)
    return resdata
  })

  return resultValue
}
