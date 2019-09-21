// 解密 处理微信系统信息解密

const rp = require('request-promise')
const WXBizDataCrypt = require('./WXBizDataCrypt')

const deCryptCode = async ({appID, appSecret, code, encryptedData, iv}) => {
  const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appID}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
  const resultValue = await rp(url).then(res => {
    res = JSON.parse(res)
    let sessionKey = res.session_key
    const pc = new WXBizDataCrypt(appID, sessionKey)
    let resdata = pc.decryptData(encryptedData, iv)
    return resdata
  })
  return resultValue
}

const deCryptsessionKey = async ({appID, sessionKey, encryptedData, iv}) => {
  const pc = new WXBizDataCrypt(appID, sessionKey)
  let resdata = pc.decryptData(encryptedData, iv)
  return resdata
}

module.exports = {
  deCryptCode,
  deCryptsessionKey
}
