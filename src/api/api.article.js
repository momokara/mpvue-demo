/* jshint esversion: 6 */
// 统一处理 页面请求
import {
  ajaxAll
} from '@/utils/Wxrequest'
import {
  getcommonheader
} from '@/api/api'

import config from '@/config.js'

// 页面接口

/**
 * 获取文章列表
 * @param {Object} data data.id 列表分类id data.page 页码 data.size 单页大小
 * @param {Number} requestType 请求方式 0-(默认值) 请求静态数据地址 1-请求服务器接口
 * @param {Number} retryTimes 重试次数
 * @return {Promise} 返回结果
 */
export const getArticleList = async (data, requestType, retryTimes) => {
  retryTimes = retryTimes | 0
  let commonheader = await getcommonheader()
  // 请求地址
  let urlCos = `${config.static_url_basic}${config.static_url_file}/articlelist/${data.id}/${data.page}.json`
  let urlSer = `${config.host}/marking_service/article/list/${data.id}`

  // eslint-disable-next-line eqeqeq
  if (requestType == 1) {
    return ajaxAll(urlSer, 'POST', data, commonheader).then(res => {
      let resdata = {}
      if (res) {
        resdata = res.result
        return resdata
      } else {
        console.error('getArticleList no data')
      }
    }).catch(async (err) => {
      console.error('getArticleList error type:1', err)
      wx.showToast({
        title: '网络异常！',
        icon: 'none'
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      ajaxAll(urlCos, 'GET', {}, commonheader).then(res => {
        if (res) {
          resolve(res)
        } else {
          reject(new Error('err nodata'))
        }
      }).catch(err => {
        reject(err)
      })
    }).catch(err => {
      console.error('getArticleList error type:0', err)
      if (!requestType) {
        getArticleList(data, 1, 1)
      }
    })
  }
}

/**
 * 获取文章详情
 * @param {Object} data data.id 文章id
 * @param {Number} requestType 请求方式 0-(默认值) 请求静态数据地址 1-请求服务器接口
 * @param {Number} retryTimes 重试次数
 * @return {Promise} 返回结果
 */
export const getArticleDetail = async (data, requestType, retryTimes) => {
  retryTimes = retryTimes | 0
  let commonheader = await getcommonheader()
  let urlCos = `${config.static_url_basic}${config.static_url_file}/articledetail/${data.id}.json`
  let urlSer = `${config.host}/marking_service/article/detail/${data.id}`
  // eslint-disable-next-line eqeqeq
  if (requestType == 1) {
    return ajaxAll(urlSer, 'GET', {}, commonheader).then(res => {
      let resdata = {}
      if (res) {
        resdata = res.result
        return resdata
      } else {
        console.error('getArticleDetail no data')
      }
    }).catch(async (err) => {
      console.error('getArticleDetail error type:1', err)
      wx.showToast({
        title: '网络异常！',
        icon: 'none'
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      ajaxAll(urlCos, 'GET', {}, commonheader).then(res => {
        if (res) {
          resolve(res)
        } else {
          reject(new Error('err nodata'))
        }
      }).catch(err => {
        reject(err)
      })
    }).catch(err => {
      console.error('getArticleDetail error type:0', err)
      if (!requestType) {
        getArticleDetail(data, 1, 1)
      }
    })
  }
}

module.export = {
  getArticleList,
  getArticleDetail
}
