// 存放一些通用数据处理方法

// 清除缓存并重新登录
import basicInfo from "@/store/basicInfo.js";
import {
  getUserInfoSer,
  ajax
} from "@/api/api";
import {
  decrypt
} from "@/utils/cloudfunc/crypt";
import config from '@/config.js'

// 重新登录
export const reLogin = () => {
  wx.clearStorageSync();
  basicInfo.commit("clean", true);
  return getUserInfoSer()
}

// 检测小程序是否被禁用
export const checkIsForbidden = () => {
  let url = `${config.static_url_basic}${config.static_url_file}${config.mpid}/isForbidden.json`

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
    console.err("checkIsForbidden err", err)
  })
}

// 解密请求头内的token
export const decryptToken = async () => {
  let token = await decrypt(basicInfo.state.token);
  let decrypt_data = {
    token: JSON.parse(token)
  }
  console.group("解密结果");
  console.table(decrypt_data);
  console.groupEnd();
}

module.export = {
  reLogin,
  checkIsForbidden,
  decryptToken
}
