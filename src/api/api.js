/* jshint esversion: 6 */
import WxPromis from "@/utils/Wxrequest";
import dialog from "@/../static/components/dialog-mo/dialog";
import config from '@/config.js'
const Api = {};
const rowdata_Demo = {
  id: "XXX1",
  url: "#",
  img_url: "https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/default/test_img.jpg"
};
Api.getHomeInfo = () => {
  let url = "https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/pagedata/home_data.json";
  try {
    return WxPromis.ajax(url, "GET").catch(err => {
      console.log("getHomecatch", err);
      return wx.cloud.callFunction({
        name: 'request',
        data: {
          url: url
        }
      }).then(res => {
        let resdata = res.result;
        resdata.type = "cloudfunc"
        return resdata;
      })
    });
  } catch (error) {

  }

}

export default Api;
