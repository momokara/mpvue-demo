/* jshint esversion: 6 */
var Cookie = require('../lib/cookie');

/**
 * 封装微信的异步请求 改为 promise
 * @param {funciton} fn 传入的微信请求方法
 */
export const toPromise = (fn) => {
  return (obj = {}) => {
    return new Promise((resolve, reject) => {
      obj.success = (res) => {
        if (res) {
          // console.log('toPromise', res);

          // 用session代替cookie
          if (res.header) {
            let _set_cookie = res.header['Set-Cookie'] ? res.header['Set-Cookie'] : '';
            if (_set_cookie) {
              Cookie.saveCookie(_set_cookie);
            }
          }
          
        }
        res = res.data ? res.data : res;
        resolve(res);
      };
      obj.fail = (res) => {
        reject(res);
      };
      fn(obj);
    });
  };
}

module.export = {
  toPromise: toPromise
};
