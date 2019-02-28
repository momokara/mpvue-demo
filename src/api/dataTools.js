// 清除缓存并重新登录
import basicInfo from "@/store/basicInfo.js";
import { getUserInfoSer } from "@/api/api";

export const reLogin = () => {
  wx.clearStorageSync();
  basicInfo.commit("clean", true);
  return getUserInfoSer()
}

const tools = {};
tools.reLogin = reLogin;

export default tools;

module.export = {
  reLogin,
}
