/* jshint esversion: 6 */
import autoLogin from "@/utils/login";
import WxPromis from "@/utils/Wxrequest";
import dialog from "@/../static/components/dialog/dialog";
const Api = {};
// 处理自动登录
Api.autoLogin = () => {
  const _requestUrl = {
    folder_name: "project_name_login",
    module: "user",
    action: "dologinFromXCX"
  };
  let postdata = {};
  postdata["userInfo"] = {
    nickName: "用户信息获取失败",
    gender: 1,
    language: "zh_CN",
    city: "Guangzhou",
    province: "Guangdong",
    country: "China",
    avatarUrl: "http://hh-common-test.oss-cn-shenzhen.aliyuncs.com/wap/images/tou.png"
  };
  return autoLogin(_requestUrl, postdata).then(res => {
    let _pageHis = getCurrentPages();
    console.log(_pageHis);
    return res;
  }).catch(res => {
    // 登录错误处理
    console.error('autoLogin err:', res);
    dialog.alert({
      title: "请先登录",
      message: "弹窗内容XXX",
      confirmButtonOpenType: "getUserInfo"
    }).then(() => {
      // on close
    }).catch(res => {
      console.info(res);
      if (res == 'nodialog') {
        wx.navigateTo({
          url: '/pages/loginpage/main',
          fail: function (res) {
            wx.switchTab({
              url: '/pages/loginpage/main',
              fail: function (res) {
                console.log(res);
              }
            });
          },
        });
      }
    });

    return res;
  });
}
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
