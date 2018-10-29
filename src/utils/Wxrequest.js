/* jshint esversion: 6 */

import config from '@/config.js';
import {
  checkUserInfo,
  toPromise
} from './basic';
var Cookie = require('./lib/cookie');

/**
 * 发送ajax请求，默认统一使用 POST 方式
 * @param {string} urlObj.folder_name 在数据库m_config里面配置的项目名
 * @param {string} urlObj.module 模块
 * @param {string} urlObj.action 动作
 * @param {json}   params        post的json
 * @return {Promise} 
 */
export const request = (urlObj, params) => {
  let _Request = toPromise(wx.request);
  const _isLogin = checkUserInfo();
  let _hearder = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  if (_isLogin) {
    var headCookie = Cookie.getHeadCookie();
    var session_data = _isLogin;
    params.session_token = session_data.session_token;
    params.cookie_data = headCookie;
    _hearder = {
      "content-type": "application/json"
    }
  } else {
    params.session_token = '';
    params.cookie_data = '';
  }
  let _url = `${config.domain_url}/${config.json.json_config[urlObj.folder_name]}${config.extra_folder_name}/${urlObj.module}/${urlObj.action}${config.json.request_suffix}?${config.json.common_param}&small_key_suffix=${config.small_key_suffix}&supplier_id=${+config.supplier_id}`;

  return _Request({
    url: _url,
    method: 'POST',
    data: params,
    header: _hearder
  });
}

/**
 * 文件上传 单个文件
 * @param {string} path 文件路径
 * @return {Promise} 
 */
export const uploadImg = (path, isUrl = true) => {
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
export const uploadImgs = async (FilePaths) => {
  let resUrlList = [];
  for (let obj in FilePaths) {
    try {
      let _path = FilePaths[obj];
      resUrlList.push(await uploadImg(_path, false));
    } catch (err) {
      return err;
    }
  }
  console.log('resUrlList', resUrlList);
  return resUrlList;
}


module.export = {
  request: request,
  uploadImg: uploadImg,
  uploadImgs: uploadImgs
};
