/* jshint esversion: 6 */

import {
  toPromise,
  isJsonString
} from './tools';
import {
  errlogs
} from './logs';
/**
 * 发送ajax 请求
 * @param {String} url    请求的地址
 * @param {String} method 请求方式 POST || GET
 * @param {Object} params 请求的参数 如果为get 则会拼接在url 后
 * @param {Object} header 定义的请求头
 * @return {Promise} 请求返回的结果
 */
export const ajax = (url, method, params, header) => {
  let _Request = toPromise(wx.request);
  let _header_default = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  let _header = Object.assign({}, _header_default, header)
  method = method ? method : 'GET';
  if (method == 'GET' || method == 'get') {
    let _params = ''
    if (params) {
      for (const key in params) {
        _params = `${_params}${key}=${params[key]}&`
      }
      url = `${url}?${_params}`
    }

  }
  return _Request({
    url: url,
    method: method,
    data: params,
    header: _header
  });
}

/**
 * 发送ajax 如果失败则用 云函数转发 请求
 * @param {String} url    请求的地址
 * @param {String} method 请求方式 POST || GET
 * @param {Object} params 请求的参数 如果为get 则会拼接在url 后
 * @param {Object} header 自定义请求头 使用云函数转发时有效
 * @return {Promise} 请求返回的结果
 */
export const ajaxAll = (url, method, params, header) => {

  try {
    return ajax(url, method, params, header)
      .then(res => {
        let _testdata = typeof (res) == "object" ? JSON.stringify(res) : res;
        // 只返回json 数据
        if (isJsonString(_testdata)) {
          return res;
        } else {
          return null;
        }
      })
      // 错误则调取云函数
      .catch(err => {
        console.log({
          msg: "ajaxAll request error",
          err,
          url
        });
        errlogs(url, method, params, header, err);
        if (method == 'GET' || method == 'get') {
          let _params = ''
          if (params) {
            for (const key in params) {
              _params = `${_params}${key}=${params[key]}&`
            }
            url = `${url}?${_params}`
          }
        }
        return wx.cloud.callFunction({
          name: 'request',
          data: {
            url: url,
            method: method,
            form: params,
            header: header
          }
        }).then(res => {
          let resdata = {};
          if (res) {
            resdata = res.result;
          }
          resdata.type = "cloudfunc"
          return resdata;
        })
      });
  } catch (error) {
    console.log("ajaxAllerror", error)
  }
}

const WxPromis = {};
WxPromis.ajax = ajax;
WxPromis.ajaxAll = ajaxAll;
export default WxPromis;

module.export = {
  ajax,
  ajaxAll,
};
