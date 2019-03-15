/* jshint esversion: 6 */
// 统一处理 页面请求 
import {
  ajaxAll
} from "@/utils/Wxrequest";
import basicInfo from "@/store/basicInfo.js";
import {
  getOpenid
} from "@/utils/cloudfunc/getUserInfo";

import dialog from "@/../static/components/dialog-mo/dialog";
import config from '@/config.js'

// 页面接口 

/**
 * 获取首页信息
 * @return {Promise} 返回结果
 */
export const getHomeInfo = async () => {
  let commonheader = await getcommonheader();
  // let url = `${config.static_url_basic}${config.static_url_file}/${config.mpid}/home_data.json`;
  let url = `${config.host}/home_data/${config.mpid}`;
  return ajaxAll(url, "GET", {}, commonheader).then(res => {
    let resdata = res;
    return resdata;
  })
}

/**
 * 获取学车首页信息
 * @return {Promise} 返回结果
 */
export const getLearnHomeInfo = async () => {
  let commonheader = await getcommonheader();
  let url = `${config.host}/lean/home`;
  return ajaxAll(url, "GET", {}, commonheader).then(res => {
    let resdata = res.result;
    return resdata;
  })
}


// 用户接口

/**
 * 从服务器获取用户基本信息
 * @param {Number} retryTimes 当前登录重试次数
 * @param {Number} isReGet 是否重新获取信息 true 时重新获取
 * @return {Promise} 返回结果
 */
export const getUserInfoSer = async (retryTimes) => {
  retryTimes = retryTimes | 0;
  let url = `${config.host}/userInfo`;
  return getOpenid().then(async (res) => {
    if (res.isgetinfo) {
      return res;
    } else {
      if (res.token) {
        let commonheader = {
          token: res.token
        }
        return ajaxAll(url, "GET", {}, commonheader).then(res => {
          let resdata = res.result;
          resdata.isgetinfo = true;
          basicInfo.commit('updataByKey', resdata);
          wx.setStorageSync('openid', basicInfo.state);
          return resdata;
        })
      } else if (retryTimes < config.loginRetryTimes - 1) { // 登录重试
        retryTimes++
        await setTimeout(function () {
          return getUserInfoSer(retryTimes);
        }, config.loginRetryDelay)
      } else { // 重试超时
        wx.showToast({
          title: '网络异常，请尝试重启小程序',
          icon: 'none'
        });
      }
    }
  });
}

/**
 * 提交修改信息
 * @param {Object} data 修改后的用户信息
 * @return {Promise} 返回结果
 */
export const saveEditUser = async (data) => {
  let commonheader = await getcommonheader();
  let url = `${config.host}/editUser`;
  return ajaxAll(url, "POST", data, commonheader).then(res => {
    let resdata = res;
    return resdata;
  })
}

/**
 * 发送ajax 请求 带 请求头
 * @param {*} url 请求地址
 * @param {*} method 请求方式
 * @param {*} params 请求参数
 * @return {Promise} 返回结果
 */
export const ajax = async (url, method, params) => {
  let commonheader = await getcommonheader();
  return ajaxAll(url, method, params, commonheader).then(res => {
    let resdata = res;
    return resdata;
  })
}

/**
 * 获取通用请求头
 * @return {JSON} 返回当前请求头
 */
export const getcommonheader = async () => {
  let commonheader = {};
  if (basicInfo.state.token) {
    commonheader = {
      token: basicInfo.state.token
    }
  } else {
    // 如果本地state中没有token 则重新获取
    let logindata = await getOpenid().then(res => {
      return res;
    });
    commonheader = {
      token: logindata.token
    }
  }
  // 如果没有载入个人信息则尝试重新获取
  if (!basicInfo.state.userInfo.avatarUrl) {
    getUserInfoSer();
  }
  return commonheader
}

module.export = {
  getcommonheader,
  getLearnHomeInfo,
  getUserInfoSer,
  saveEditUser,
  getHomeInfo,
  ajax
}
