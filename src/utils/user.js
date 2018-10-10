import config from '@/config.js'
import qcloud from 'wafer2-client-sdk'
import {
  login,
  setLoginUrl
} from "@/utils/lib/login";
import {
  request,
  request_h,
} from "@/utils/request";
var is_getUserInfo = wx.getStorageSync("is_getUserInfo");

/**
 * 普通登录
 * @param folder_name   project_name_login
 * @param module    user
 * @param action    dologinFromXCX
 * @param data  {用户名,密码}
 * @param is_show_toast
 * @param callback
 */
export function doLogin(folder_name, module, action, data, is_show_toast, callback) {
  wx.request({
    url: config.domain_url + "/" + config.json.json_config[folder_name] + config.extra_folder_name + "/" + module + "/" + action + config.json.request_suffix + "?" + config.json.common_param + "&small_key_suffix=" + config.small_key_suffix,
    method: "POST",
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    success: function (result) {
      var res = result.data;
      if (res) {
        if (-1 == res.err_code) {
          //登录成功
          qcloud.cookie.saveCookie(result.header['Set-Cookie']);
          callback(res);
        } else {
          //登录失败
          wx.showToast({
            title: res.err_msg
          });
        }
      } else {
        //登录失败
        wx.showToast({
          title: '用户登录失败',
          icon: "none"
        });
      }
    },
    fail: function (res) {
      wx.showToast({
        title: "接口调用失败"
      });
      console.log(res);
    }
  });
}
/**
 *
 * 自动登录
 * @param folder_name   project_name_login
 * @param module    user
 * @param action    dologinFromXCX
 * @param data  {}
 * @param is_show_toast false
 * @param callback
 */
export function autoLogin(folder_name, module, action, data, is_show_toast, callback) {
  callAutoLogin(folder_name, module, action, data, is_show_toast, function (userInfo) {
    getUserInfo(callback);
  });
}


/**
 * 调用自动登录接口
 * @param folder_name
 * @param module
 * @param action
 * @param data
 * @param is_show_toast
 * @param callback
 */
export function callAutoLogin(folder_name, module, action, data, is_show_toast, callback) {
  let timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  //自动登录设置的创建时间，因为不是从后台取的，导致可能会有误差，后台设置120分钟，前端为了保险设置为100分钟
  let token_create_time = wx.getStorageSync("session_expire_time");
  let past_time = -1;
  if (token_create_time) {
    past_time = timestamp - token_create_time;
  }
  if (past_time == -1 || past_time > 100 * 60) { //当过去的时间大于100分钟时调用后台自动登录接口
    wx.removeStorageSync('weapp_session_F2C224D4-2BCE-4C64-AF9F-A6D872000D1A');
    var url = config.domain_url + "/" + config.json.json_config[folder_name] + config.extra_folder_name + "/" + module + "/" + action + config.json.request_suffix + "?" + config.json.common_param + "&small_key_suffix=" + config.small_key_suffix;
    setLoginUrl(url);
    login({
      method: "POST",
      data: data,
      success: function (userInfo) {
        callback(userInfo);
      },
      fail: function (err) {
        console.log('loginerr', err);
      }
    });
  } else {
    callback(wx.getStorageSync('user_info'));
  }
}

/**
 * 获取用户信息，并更新
 */
export function getUserInfo(callback) {
  if (is_getUserInfo != 1) {
    request_h("project_name_deal3", "deal", "list/user_weixin_xcx", {}, false, function (res1) {
      console.log('getuserinfo', res1)
      if (res1.err_code == -1) {
        if (res1.user_info.nickName == '用户信息获取失败') {
          wx.getUserInfo({
            success: function (res) {
              var ranges = [
                '\ud83c[\udf00-\udfff]',
                '\ud83d[\udc00-\ude4f]',
                '\ud83d[\ude80-\udeff]'
              ];
              res.userInfo.nickName = res.userInfo.nickName.replace(new RegExp(ranges.join('|'), 'g'), '');
              res.userInfo.nickName = res.userInfo.nickName.replace("'", "-");
              res.userInfo.province = res.userInfo.province.replace("'", "-");
              res.userInfo.city = res.userInfo.city.replace("'", "-");
              request("project_name_deal3", "deal", "function/update_user_xcx", res.userInfo, false, function (res) {
                if (res.err_msg == '1') {
                  callback(res.userInfo);
                } else {
                  wx.showModal({
                    title: '提示',
                    content: '更新用户信息失败',
                    showCancel: false
                  })
                }
              });
            },
            fail: function (res) {
              wx.navigateTo({
                url: '../../../../login/login/login/login/login',
              })
            }
          });
        } else {
          wx.setStorageSync("is_getUserInfo", 1);
          wx.setStorageSync("user_info", res1.user_info);
          is_getUserInfo = 1;
          user_info = res1.user_info;
          callback(res1.user_info);
        }
      } else {
        wx.showToast({
          title: '用户信息获取失败',
          icon: 'none'
        })
      }
    }, false);
  } else {
    callback(wx.getStorageSync('user_info'));
  }
}

export default {
  doLogin,
  autoLogin,
  callAutoLogin,
  getUserInfo
}
