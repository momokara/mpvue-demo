/* jshint esversion: 6 */

import config from '@/config.js';
import {
  toPromise
} from './basic';

/**
 * 发送ajax 请求
 * @param {String} url    请求的地址
 * @param {String} method 请求方式 POST || GET
 * @param {Object} params 请求的参数 如果为get 则会拼接在url 后
 */
const ajax = (url, method, params) => {
  let _Request = toPromise(wx.request);
  let _hearder = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
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
    header: _hearder
  });
}

/**
 * 发送ajax 如果失败则用 云函数转发 请求
 * @param {String} url    请求的地址
 * @param {String} method 请求方式 POST || GET
 * @param {Object} params 请求的参数 如果为get 则会拼接在url 后
 * @param {Object} header 自定义请求头 使用云函数转发时有效
 */
const ajaxAll = (url, method, params, header) => {
  try {
    return ajax(url, method, params).catch(err => {
      console.log("getHomecatch", err);
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
        let resdata = res.result;
        resdata.type = "cloudfunc"
        return resdata;
      })
    });
  } catch (error) {

  }
}



const WxPromis = {};
WxPromis.ajax = ajax;
WxPromis.ajaxAll = ajaxAll;


export default WxPromis;
