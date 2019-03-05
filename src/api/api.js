/* jshint esversion: 6 */
// 统一处理 页面请求 
import {
  ajaxAll
} from "@/utils/Wxrequest";
import basicInfo from "../store/basicInfo.js";
import {
  decrypt
} from "@/utils/cloudfunc/crypt";
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
  let url = `${config.static_url_basic}${config.static_url_file}/home_data.json`;
  // decryptheader();
  return ajaxAll(url, "GET", {}, commonheader).then(res => {
    let resdata = res;
    return resdata;
  })
}

/**
 * 获取文章列表
 * @param {Object} data data.id 列表分类id data.page 页码 data.size 单页大小
 * @param {Number} requestType 请求方式 0-(默认值) 请求静态数据地址 1-请求服务器接口
 * @param {Number} retryTimes 重试次数
 * @return {Promise} 返回结果
 */
export const getArticleList = async (data, requestType, retryTimes) => {
  retryTimes = retryTimes | 0;
  let commonheader = await getcommonheader();
  // 请求地址
  let urlCos = `${config.static_url_basic}${config.static_url_file}/articlelist/${data.id}/${data.page}.json`;
  let urlSer = `${config.host}/content/article/list`;
  
  if (requestType == 1) {
    return ajaxAll(urlSer, "POST", data, commonheader).then(res => {
      let resdata = {};
      if (res) {
        resdata = res.result;
        return resdata;
      } else {
        console.error("getArticleList no data")
      }
    }).catch(async (err) => {
      console.error("getArticleList error type:1", err);
      wx.showToast({
        title: '网络异常！',
        icon: 'none'
      });

    })
  } else {
    return new Promise((resolve, reject) => {
      ajaxAll(urlCos, "GET", {}, commonheader).then(res => {
        if (res) {
          resolve(res)
        } else {
          reject("err nodata")
        }
      }).catch(err => {
        reject("err", err)
      })
    }).catch(err => {
      console.error("getArticleList error type:0", err);
      if (!requestType) {
        getArticleList(data, 1, 1)
      }
    });
  }
}

/**
 * 获取文章详情
 * @param {Object} data data.id 文章id 
 * @param {Number} requestType 请求方式 0-(默认值) 请求静态数据地址 1-请求服务器接口
 * @param {Number} retryTimes 重试次数
 * @return {Promise} 返回结果
 */
export const getArticleDetail = async (data, requestType, retryTimes) => {
  retryTimes = retryTimes | 0;
  let commonheader = await getcommonheader();
  let urlCos = `${config.static_url_basic}${config.static_url_file}/articledetail/${data.id}.json`;
  let urlSer = `${config.host}/content/article/${data.id}`;
  if (requestType == 1) {
    return ajaxAll(urlSer, "GET", {}, commonheader).then(res => {
      let resdata = {};
      if (res) {
        resdata = res.result;
        return resdata;
      } else {
        console.error("getArticleDetail no data")
      }
    }).catch(async (err) => {
      console.error("getArticleDetail error type:1", err);
      wx.showToast({
        title: '网络异常！',
        icon: 'none'
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      ajaxAll(urlCos, "GET", {}, commonheader).then(res => {
        if (res) {
          resolve(res)
        } else {
          reject("err nodata")
        }
      }).catch(err => {
        reject("err", err)
      })
    }).catch(err => {
      console.error("getArticleDetail error type:0", err);
      if (!requestType) {
        getArticleDetail(data, 1, 1)
      }
    });
  }
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
    console.log("getOpenid", res);
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
  return commonheader
}

// 解密请求头内的appid 和 openid
const decryptheader = async () => {
  let token = await decrypt(basicInfo.state.token);
  let decrypt_data = {
    token
  }
  console.log("解密结果", decrypt_data);
}

const Api = {};
Api.getcommonheader = getcommonheader;
Api.getUserInfoSer = getUserInfoSer;
Api.saveEditUser = saveEditUser;
Api.getArticleList = getArticleList;
Api.getArticleDetail = getArticleDetail;
Api.getHomeInfo = getHomeInfo;
Api.ajax = ajax;
export default Api;

module.export = {
  getcommonheader,
  getUserInfoSer,
  getArticleList,
  getArticleDetail,
  saveEditUser,
  getHomeInfo,
  ajax
}
