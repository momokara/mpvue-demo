/* jshint esversion: 6 */
// 统一处理 页面请求 
import WxPromis from "@/utils/Wxrequest";
import dialog from "@/../static/components/dialog-mo/dialog";
import config from '@/config.js'
const Api = {};

Api.getHomeInfo = () => {
  let url = "https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/pagedata/home_data.json";
  try {
    return WxPromis.ajaxAll(url, "GET").then(res => {
      let resdata = res;
      resdata.type = "cloudfunc"
      return resdata;
    })
  } catch (error) {

  }

}

export default Api;
