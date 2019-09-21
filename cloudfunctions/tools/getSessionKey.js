
const rp = require('request-promise')
const { add, orderBy } = require('./db.js')

const getAppSecret = async () => {
  let res
  res = await orderBy({ collect: 'appSecret' })
  // 获取最新的一条appSecret
  res = res.data[0] ? res.data[0].appSecret : ''
  return res
}
const saveAppSecret = async ({ appSecret, _OPENID }) => {
  let res
  if (appSecret) {
    res = await add({
      collect: 'appSecret',
      data: {
        appSecret: appSecret,
        _OPENID: _OPENID
      }
    })
  } else {
    res = { err: '无效的appSecret' }
  }
  return res
}
// 获取SessionKey
const getSessionKey = async ({ appID, appSecret, code }) => {
  const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appID}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
  const sessionKey = await rp(url).then(res => {
    res = JSON.parse(res)
    return res
  })
  return sessionKey
}

module.exports = {
  getSessionKey,
  getAppSecret,
  saveAppSecret
}
