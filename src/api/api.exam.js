/* jshint esversion: 6 */
// 统一处理 页面请求 
import {
  ajaxAll
} from "@/utils/Wxrequest";
import {
  getcommonheader
} from "@/api/api.js";
import basicInfo from "@/store/basicInfo.js";

import config from '@/config.js'

// 页面接口 

/**
 * 获取学车首页信息
 * @return {Promise} 返回结果
 */
export const getLearnHomeInfo = async () => {
  let commonheader = await getcommonheader();
  let url = `${config.host}/exam/home`;
  // decryptheader();
  return ajaxAll(url, "GET", {}, commonheader).then(res => {
    let resdata = res.result;
    return resdata;
  })
}

module.export = {
  getLearnHomeInfo
}
