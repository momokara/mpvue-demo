/* jshint esversion: 6 */
// 统一处理 页面请求 
import WxPromis from "@/utils/Wxrequest";
import basicInfo from "../store/basicInfo.js";
import dialog from "@/../static/components/dialog-mo/dialog";
import config from '@/config.js'
const Api = {};

// 获取首页信息
Api.getHomeInfo = () => {
  console.log("getHomeInfo||basicInfo", basicInfo.state.islogin, basicInfo.state);
  let commonheader = getcommonheader();
  let url = "https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/pagedata/home_data.json";
  try {
    return WxPromis.ajaxAll(url, "GET", {}, commonheader).then(res => {
      let resdata = res;
      resdata.type = "cloudfunc"
      return resdata;
    })
  } catch (error) {

  }

}

// 获取通用请求头
const getcommonheader = () => {
  let commonheader = {};
  if (basicInfo.state.islogin) {
    commonheader = {
      appid: basicInfo.state.userInfo.appid,
      openid: basicInfo.state.userInfo.openid
    }
  }
  return commonheader
}
export default Api;
