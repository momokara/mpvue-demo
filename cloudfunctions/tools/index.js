// 云函数入口文件

const cloud = require('wx-server-sdk')
// 解密
const { deCryptCode, deCryptsessionKey } = require('./crypt.js')
// 获取sessionkey
const { getSessionKey, getAppSecret, saveAppSecret } = require('./getSessionKey.js')
// 获取二维码
const { getUnlimited } = require('./getQrcode.js')
// 获取文件名
const { getFileName } = require('./common.js')
// 数据操作
const { update, find } = require('./db.js')
const { getToken } = require('./getToken.js')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let res = {}
  const wxContext = await cloud.getWXContext()
  const appID = wxContext.APPID
  const _OPENID = wxContext.OPENID
  // 获取appSecret
  let appSecret = await getAppSecret()
  // 用code换取sessionKey解密
  if (event.action === 'deCrypt') {
    const code = event.code
    const encryptedData = event.encryptedData
    const iv = event.iv
    res = await deCryptCode({ appID, appSecret, code, encryptedData, iv })
    // eslint-disable-next-line brace-style
  }
  // 保存appSecret
  else if (event.action === 'saveAppSecret') {
    const appSecret = event.appSecret
    res = await saveAppSecret({ appSecret, _OPENID })
    // eslint-disable-next-line brace-style
  }
  // 用sessionKey解密
  else if (event.action === 'deCryptKey') {
    const sessionKey = event.sessionKey
    const encryptedData = event.encryptedData
    const iv = event.iv
    res = await deCryptsessionKey({ appID, sessionKey, encryptedData, iv })
    // eslint-disable-next-line brace-style
  }
  // 获取sessionKey
  else if (event.action === 'getSessionKey') {
    const code = event.code
    res = await getSessionKey({ appID, appSecret, code })
    res.openid = ''
    res.unionid = ''
    // eslint-disable-next-line brace-style
  }
  // 解密CloudID
  else if (event.action === 'deCloudID') {
    res = { deCryptData: event.serData.data }
    // eslint-disable-next-line brace-style
  }
  // 获取无限制二维码
  else if (event.action === 'getUnlimited') {
    let data = event
    data.fileName = event.fileName || await getFileName({ OPENID: wxContext.OPENID })
    res = await getUnlimited(data)
    // eslint-disable-next-line brace-style
  }
  // 保存用户信息
  else if (event.action === 'saveUserInfo') {
    const { basicInfo, userInfo, userNo } = event.data || {}
    let data = {
      basicInfo,
      userInfo,
      userNo,
      _OPENID
    }
    res = await update({
      collect: 'userInfo',
      filter: {
        _OPENID
      },
      data
    })
    // eslint-disable-next-line brace-style
  }
  // 获取用户信息
  else if (event.action === 'getUserInfo') {
    res = await find({
      collect: 'userInfo',
      filter: {
        _OPENID
      },
      field: {
        basicInfo: true,
        userInfo: true,
        userNo: true,
        _id: false
      }
    })
    res = res.data[0]
  } else if (event.action === 'getToken') {
    let openid = wxContext.OPENID
    let unionid = wxContext.UNIONID
    let appid = wxContext.APPID
    let _nTime = new Date().getTime()
    res = getToken({
      a: appid,
      o: openid,
      u: unionid,
      t: _nTime
    })
  } else {
    res = { event }
  }

  return res
}
