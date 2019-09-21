
const dataCrypt = require('./key/dataCrypt')
const key = require('./key/key')
/**
 * 获取token头
 * @param {string} a 文件名
 */
const getToken = async ({a, o, u, t}) => {
  let data = JSON.stringify({a, o, u, t})
  let token = dataCrypt.encrypt(data, key.pubKey)
  token = token.toString('base64')
  return token
}

module.exports = {
  getToken
}
