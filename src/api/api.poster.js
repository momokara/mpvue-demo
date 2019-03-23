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
export const getPosterHomeInfo = async () => {
  let commonheader = await getcommonheader();
  let url = `${config.host}/marking_service/poster/home/${config.mpid}`;
  console.log("url:", url);
  return ajaxAll(url, "GET", {}, commonheader).then(res => {
    let resdata = res.result;
    return resdata;
  })
}
/**
 * 获取学车首页信息
 * @return {Promise} 返回结果
 */
export const getPosterList = async (data) => {
  let commonheader = await getcommonheader();
  if (!data.id) {
    data.id = null
  }
  let url = `${config.host}/marking_service/poster/list/${data.id}`;
  console.log("url:", url);
  return ajaxAll(url, "POST", data, commonheader).then(res => {
    let resdata = res.result;
    return resdata;
  })
}

module.export = {
  getPosterHomeInfo,
  getPosterList
}
