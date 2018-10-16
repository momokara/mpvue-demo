import {
  request,
  request_h,
  uploadImg
} from "@/utils/request";
import {
  autoLogin
} from "@/utils/user";
// appOnLaunch的请求
let url = '';
export const onLaunchrequest = (postdata, callback) => {
  request_h(
    "project_name_deal3",
    "deal",
    "list/getAppPhone",
    postdata,
    false,
    callback,
    false);
}

// 获取首页信息
export const getHomeInfo = (postdata, callback) => {
  request(
    "project_name_deal3",
    "deal",
    "page/11000_index_jx",
    postdata,
    false,
    callback
  );
}

export const userAutoLogin = (postdata, callback) => {
  postdata['userInfo'] = {
    'nickName': '用户信息获取失败',
    'gender': 1,
    'language': 'zh_CN',
    'city': 'Guangzhou',
    'province': 'Guangdong',
    'country': 'China',
    'avatarUrl': 'http://hh-common-test.oss-cn-shenzhen.aliyuncs.com/wap/images/tou.png'
  }
  autoLogin("project_name_login", "user", "dologinFromXCX", postdata, true, callback);
}

export const uploadImage = (path, callback) => {
  uploadImg(path, callback);
}

// 用户自动登录

export default {
  onLaunchrequest,
  getHomeInfo,
  userAutoLogin,
  uploadImage
}
