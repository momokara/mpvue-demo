/* jshint esversion: 6 */

import config from '@/config.js';
import {
  toPromise
} from './basic';
var Cookie = require('./lib/cookie');
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

/**
 * 文件上传 单个文件
 * @param {string} path 文件路径
 * @return {Promise} 
 */
const uploadImg = (path, isUrl = true) => {
  const _requestUrl = {
    folder_name: "project_name_oss",
    module: "oss",
    action: "jsapiTicket"
  };
  let _config = '';
  let _uploadFile = toPromise(wx.uploadFile);
  return request(_requestUrl, {}).then(res => {
    if (res.err_code == -1) {
      _config = JSON.parse(res.config);
      return _uploadFile({
        url: _config.visit_end_point,
        filePath: path,
        name: 'file',
        formData: {
          'Filename': _config.path + '/${filename}',
          'key': _config.path + '/${filename}',
          'policy': _config.policy,
          'OSSAccessKeyId': _config.accessid,
          'success_action_status': '200', //让服务端返回200,不然，默认会返回204
          'signature': _config.signature
        }
      }).then(res => {
        if (res.statusCode == 200) {
          let _resJson = {};
          let fileArr = path.split("/");
          const _imgUrl = _config.visit_end_point + "/" + _config.path + "/" + fileArr[fileArr.length - 1];
          if (isUrl) {
            _resJson.url = _imgUrl;
          } else {
            _resJson = _imgUrl;
          }
          return _resJson;
        }
      }).catch(err => {
        console.error("wxUploaderr", err);
      });
    } else {
      console.error(res);
      wx.showToast({
        title: '获取上传凭证失败',
        icon: 'none'
      });
    }
  });
}

/**
 * 批量上传图片 有报错 请无视
 * @param {array[string]} FilePaths 
 */
const uploadImgs = async (FilePaths) => {
  let resUrlList = [];
  let i = 0;
  for (let obj in FilePaths) {
    try {
      let _path = FilePaths[obj];
      console.log(`上传第${i}张`);
      resUrlList.push(await uploadImg(_path, false));
      i++;
    } catch (err) {
      return err;
    }
  }
  return resUrlList;
}
const WxPromis = {};
WxPromis.ajax = ajax;
WxPromis.ajaxAll = ajaxAll;
// 上传单张图片
WxPromis.uploadImg = uploadImg;
// 上传多张图片
WxPromis.uploadImgs = uploadImgs;

export default WxPromis;
