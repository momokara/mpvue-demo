// dataCrypt.js
const crypto = require('crypto');

// 加密方法
exports.encrypt = (data, key) => {
  // 注意，第二个参数是Buffer类型
  key = {
    key,
    padding: crypto.constants.RSA_PKCS1_PADDING
  }
  return crypto.publicEncrypt(key, Buffer.from(data));
};
