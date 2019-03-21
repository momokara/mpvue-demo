/* jshint esversion: 6 */
// 统一处理 页面请求 
import {
  ajaxAll
} from "@/utils/Wxrequest";
import {
  getcommonheader
} from "@/api/api.js";
import questionType from "@/store/questionType.js";
import config from '@/config.js'

/**
 * 获取学车首页信息
 * @return {Promise} 返回结果
 */
export const getMallHomeInfo = async () => {
  let commonheader = await getcommonheader();
  let url = `${config.host}/shop_service/home/${config.mpid}`;
  console.log("url:", url);
  return ajaxAll(url, "GET", {}, commonheader).then(res => {
    let resdata = res.result;
    return resdata;
  })
}

module.export = {
  getMallHomeInfo
}
