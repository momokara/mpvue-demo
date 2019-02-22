// 清除缓存并重新登录
import basicInfo from "@/store/basicInfo.js";
import { getUserInfo } from "@/utils/cloudfunc/getUserInfo";

export const reLogin = () => {
  wx.clearStorageSync();
  basicInfo.commit("clean", true);
  return getUserInfo()
}

const tools = {};
tools.reLogin = reLogin;

export default tools;

module.export = {
  reLogin,
}
