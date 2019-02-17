// 云函数入口文件
const cloud = require('wx-server-sdk')
const dataCrypt = require('./dataCrypt')
const key = require('./key');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {


  let data = event.data;
  let res;
  if (event.type = "encrypt") {
    res = dataCrypt.encrypt(data, key.pubKey); // 加密
    res = JSON.stringify(res);
  } else if (event.type = "decrypt") {
    data = JSON.parse(data);
    res = dataCrypt.decrypt(data, key.privKey); // 解密
    res = res.toString()
  }

  return {
    event,
    res,
    deCrypt
  }
}
