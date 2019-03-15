/* jshint esversion: 6 */
// 统一处理 页面请求 
import {
  ajaxAll
} from "@/utils/Wxrequest";
import {
  getcommonheader
} from "@/api/api.js";
import questionData from "@/store/questionData.js";
import config from '@/config.js'

// 页面接口 

/**
 * 获取学车首页信息
 * @return {Promise} 返回结果
 */
export const getHomeInfo = async () => {
  let commonheader = await getcommonheader();
  let url = `${config.host}/exam/home`;
  let data = {
    type: questionData.state.type,
    subject: questionData.state.subject
  }
  // decryptheader();
  return ajaxAll(url, "POST", data, commonheader).then(res => {
    let resdata = res.result;
    return resdata;
  })
}

/**
 * 获取考试成绩列表
 * @return {Promise} 返回结果
 */
export const getExamHis = async () => {
  let commonheader = await getcommonheader();
  let url = `${config.host}/exam/getResultList`;
  let data = {
    type: questionData.state.type,
    subject: questionData.state.subject
  }
  // decryptheader();
  return ajaxAll(url, "POST", data, commonheader).then(res => {
    let resdata = res.result;
    return resdata;
  })
}


module.export = {
  getHomeInfo,
  getExamHis
}
