// 云函数入口文件
const cloud = require('wx-server-sdk')
const dataCrypt = require('./dataCrypt')
const key = require('./key');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let data = event.data;
  let res;
  let stype = event.stype ? event.stype : "base64";
  if (event.type == 1) {
    res = dataCrypt.encrypt(data, key.pubKey); // 加密
    res = res.toString(stype)
  } else if (event.type == 2) {
    data = Buffer.from(data, stype)
    res = dataCrypt.decrypt(data, key.privKey); // 解密
    res = res.toString()
  }

  return {
    event,
    res,
    stype
  }
}
