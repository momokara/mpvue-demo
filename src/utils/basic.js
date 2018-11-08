/* jshint esversion: 6 */
import qcloud from 'wafer2-client-sdk';
/**
 * 检查用户数据是否缓存
 * @returns {boolean}
 */
export const checkUserInfo = () => {
  try {
    var session_data = qcloud.Session.get();
    return session_data;
  } catch (err) {
    return false;
  }
}

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
  checkUserInfo: checkUserInfo,
  toPromise: toPromise
};
