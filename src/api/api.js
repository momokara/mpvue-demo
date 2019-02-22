/* jshint esversion: 6 */
// 统一处理 页面请求 
import {
  ajaxAll
} from "@/utils/Wxrequest";
import basicInfo from "../store/basicInfo.js";
import {
  decrypt
} from "@/utils/cloudfunc/crypt";

import dialog from "@/../static/components/dialog-mo/dialog";
import config from '@/config.js'


// 获取首页信息
export const getHomeInfo = async () => {

  let commonheader = await getcommonheader();
  let url = `${config.static_url_basic}${config.static_url_file}/home_data.json`;

  return ajaxAll(url, "GET", {}, commonheader).then(res => {
    let resdata = res;
    console.log("getHomeInfo", res)
    return resdata;
  })
}

// 发送ajax 请求 带 请求头
export const ajax = async (url, method, params) => {
  let commonheader = await getcommonheader();
  return ajaxAll(url, method, params, commonheader).then(res => {
    let resdata = res;
    console.log("getHomeInfo", res)
    return resdata;
  })
}

// 获取通用请求头
export const getcommonheader = async () => {
  let commonheader = {};
  if (basicInfo.state.islogin) {
    commonheader = {
      appid: basicInfo.state.userInfo.appid,
      openid: basicInfo.state.userInfo.openid
    }
    // let _aid = await decrypt(basicInfo.state.userInfo.appid);
    // let _oid = await decrypt(basicInfo.state.userInfo.openid);
    // let decrypt_data = {
    //   appid: _aid,
    //   openid: _oid
    // }
    // console.log("解密结果", decrypt_data);
  }
  return commonheader
}

const Api = {};
Api.getcommonheader = getcommonheader;
Api.getHomeInfo = getHomeInfo;
Api.ajax = ajax;
export default Api;

module.export = {
  getcommonheader,
  getHomeInfo,
  ajax
}
