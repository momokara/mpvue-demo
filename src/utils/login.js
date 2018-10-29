/* jshint esversion: 6 */
import config from '@/config.js'

import {
  login,
  setLoginUrl
} from "@/utils/lib/login";
import {
  checkUserInfo,
  toPromise
} from './basic';
/**
 * 自动登录默认统一使用 POST 方式
 * @param {string} urlObj.folder_name 在数据库m_config里面配置的项目名
 * @param {string} urlObj.module 模块
 * @param {string} urlObj.action 动作
 * @param {json}   params        post的json
 * @return {Promise} 
 */
export const autoLogin = (urlObj, params) => {
  let timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  let token_create_time = wx.getStorageSync("session_expire_time");
  let past_time = -1;
  if (token_create_time) {
    past_time = timestamp - token_create_time;
  }
  if (past_time == -1 || past_time > 100 * 60) { //当过去的时间大于100分钟时调用后台自动登录接口
    wx.removeStorageSync('weapp_session_F2C224D4-2BCE-4C64-AF9F-A6D872000D1A');
    _wxLogin(urlObj,params).then(res => {
      console.log('_wxLogin',res);
    })
  } else {
    console.log(wx.getStorageSync('user_info'));
  }
}
/**
 * 使用微信登录方式登录
 * @param {string} urlObj.folder_name 在数据库m_config里面配置的项目名
 * @param {string} urlObj.module 模块
 * @param {string} urlObj.action 动作
 * @param {json}   params        post的json
 * @return {Promise} 
 */
const _wxLogin = (urlObj, params) => {
  let _login = toPromise(login);
  let _url = `${config.domain_url}/${config.json.json_config[urlObj.folder_name]}${config.extra_folder_name}/${urlObj.module}/${urlObj.action}${config.json.request_suffix}?${config.json.common_param}&small_key_suffix=${config.small_key_suffix}`;
  setLoginUrl(_url);
  return _login({
    method: "POST",
    data: params,
  });
}
