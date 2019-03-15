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
const qtypedata = () => {
  return {
    id: questionData.state.id,
    tag: questionData.state.tag,
    subject: questionData.state.subject
  }
}

/**
 * 获取学车首页信息
 * @return {Promise} 返回结果
 */
export const getHomeInfo = async () => {
  let commonheader = await getcommonheader();
  let url = `${config.host}/exam/home`;
  return ajaxAll(url, "POST", qtypedata(), commonheader).then(res => {
    let resdata = res.result;
    return resdata;
  })
}

/**
 * 获取题库列表
 * @return {Promise} 返回结果
 */
export const getClassList = async () => {
  let commonheader = await getcommonheader();
  let url = `${config.host}/exam/getClasses`;
  return ajaxAll(url, "GET", null, commonheader).then(res => {
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
  return ajaxAll(url, "POST", qtypedata(), commonheader).then(res => {
    let resdata = res.result;
    return resdata;
  })
}

// 加载本地题目信息
export const loadqType = () => {
  if (!questionData.state.isLoad) {
    wx.getStorage({
      key: "qType",
      success: function (res) {
        try {
          console.log(res);
          res.data.isLoad = true
          questionData.commit("updataByKey", res.data);
        } catch (error) {}
      }
    });
  }
}

module.export = {
  getHomeInfo,
  getClassList,
  getExamHis,
  loadqType
}
