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
  console.log("getHomeInfo||basicInfo", basicInfo.state.islogin, basicInfo.state);
  let commonheader = await getcommonheader();
  let url = "https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/pagedata/home_data.json";

  return ajaxAll(url, "GET", {}, commonheader).then(res => {
    let resdata = res;
    resdata.type = "cloudfunc"
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
    let _aid = await decrypt(basicInfo.state.userInfo.appid).then(res => {
      return res.result.res
    });
    let _oid = await decrypt(basicInfo.state.userInfo.openid).then(res => {
      return res.result.res
    });
    let decrypt_data = {
      appid: _aid,
      openid: _oid
    }
    console.log("解密结果", decrypt_data);
  }
  return commonheader
}

const Api = {};
Api.getcommonheader = getcommonheader;
Api.getHomeInfo = getHomeInfo;
export default Api;

module.export = {
  getcommonheader,
  getHomeInfo
}
