import config from '@/config.js'
import qcloud from 'wafer2-client-sdk'
import {
  login,
  setLoginUrl
} from "@/utils/lib/login";

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
export function getUserInfo(callback) {
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
      res.userInfo.nickName = res.userInfo.nickName.replace("?", "-");
      that.request("project_name_login", "user", "updateUserXCX", res.userInfo, false, function (res2) {
        if (res2.err_code == '-1') {
          wx.setStorageSync("is_getUserInfo", 1);
        } else {
          wx.showModal({
            title: '提示',
            content: '更新用户信息失败',
            showCancel: false
          })
        }
        callback(res.userInfo);
      }, false, 5);
    },
    fail: function (res) {
      is_getUserInfo = 0;

      callback(res);
      var pages = getCurrentPages();
      console.log('gotologin');
      // 弹窗
      dialog.alert({
        title: "请先登录",
        message: "",
        confirmButtonOpenType: "getUserInfo"
      }).then(() => {
        // on close
        wx.showToast({
          title: "登录成功请下拉刷新",
          icon: "none"
        })
      }).catch(res => {
        console.info(res);
        if (res == 'nodialog') {
          pages = pages.filter(e => {
            if (e.route = "login/login/login/login/login") {
              return true;
            }
          });

          that.globalData.isShowLogin = true;
          wx.navigateTo({
            url: '../../../../login/login/login/login/login',
          });

        }
      });

    }
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
 * 检查用户数据是否缓存
 * @returns {boolean}
 */
export function checkUserInfo() {
  try {
    var session_data = qcloud.Session.get();
    return session_data;
  } catch (err) {
    return false;
  }
}

export default {
  doLogin,
  autoLogin,
  callAutoLogin,
  checkUserInfo,
  getUserInfo
}
