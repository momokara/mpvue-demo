/* jshint esversion: 6 */
import autoLogin from "@/utils/login";
import WxPromis from "@/utils/Wxrequest";
import dialog from "@/../static/components/dialog-mo/dialog";
const Api = {};

// 上传图片
Api.upLoadimgs = (tempFilePaths) => {
  return WxPromis.uploadImgs(tempFilePaths);
};
// 获取首页信息
Api.gethomeInfo = () => {
  const _requestUrl = {
    folder_name: "project_name_deal3",
    module: "deal",
    action: "page/11000_index_jx"
  };
  return WxPromis.request(_requestUrl, {});

}

export default Api;
