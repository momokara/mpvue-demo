// 存放一些通用数据处理方法

// 清除缓存并重新登录
import basicInfo from "@/store/basicInfo.js";
import {
  getUserInfoSer,
  ajax
} from "@/api/api";
import config from '@/config.js'

export const reLogin = () => {
  wx.clearStorageSync();
  basicInfo.commit("clean", true);
  return getUserInfoSer()
}

// 检测小程序是否被禁用
export const checkIsForbidden = () => {
  let url = `${config.static_url_basic}${config.static_url_file}/isForbidden.json`

  ajax(url, "GET", {}).then(res => {
    try {
      if (res.isForbidden) {
        console.table([res]);
        wx.redirectTo({
          "url": "/pages/user/forbidden/main"
        })
      }
    } catch (error) {

    }
  }).catch(err => {
    console.log(err)
  })


}

const tools = {};
tools.reLogin = reLogin;
tools.checkIsForbidden = checkIsForbidden;

export default tools;

module.export = {
  reLogin,
  checkIsForbidden
}
