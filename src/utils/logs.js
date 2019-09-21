import config from '@/config.js'
import { uploadLogs } from '@/api/basic'

const logger = wx.getLogManager({level: 1})
/**
 * 封装微信的异步请求 改为 promise
 * @param {funciton} fn 传入的微信请求方法
 */
export const pagelogs = (isleave) => {
  // eslint-disable-next-line no-undef
  let pages = getCurrentPages() // 获取加载的页面

  let currentPage = pages[pages.length - 1] // 获取当前页面的对象
  let url = currentPage.route // 当前页面url
  let options = currentPage.options // 当前页面options
  let logdata = {
    url: url,
    options,
    time: Date.now()
  }

  // 从本地缓存中获取数据
  let logs = wx.getStorageSync('logs') || []
  let uploadlogs = wx.getStorageSync('uploadlogs') || []
  logger.info('logs', logdata)
  if (isleave) { // 刷新离开时间
    if (logs[0]) {
      logs[0].leavetime = Date.now()
      uploadlogs[0] = logs[0]
    }
  } else { // 记录访问
    logs.unshift(logdata)
    uploadlogs.unshift(logdata)
  }
  if (logs.length > config.logL) {
    logs.splice(-1, 1)
  }
  if (uploadlogs.length > config.logL) {
    uploadlogs.splice(-1, 1)
  }
  wx.setStorageSync('logs', logs)
  wx.setStorageSync('uploadlogs', uploadlogs)
  if (uploadlogs.length > config.logUpL) {
    uploadLogs(uploadlogs).then(res => {
      console.log('uploadLogsres', res)
      if (res.code === 200) {
        wx.setStorageSync('uploadlogs', [])
      }
    })
  }
  return logdata
}
// 处理请求记录
export const ajaxlogs = ({
  url,
  method,
  options,
  header,
  params,
  msg
}) => {
  let time = Date.now()
  let data = {
    url,
    method,
    options,
    header,
    params,
    msg,
    time
  }
  console.info('ajaxlog', data)
  logger.info('ajaxlog', data)
  let ajaxlogs = wx.getStorageSync('ajaxlogs') || []
  if (ajaxlogs.length > config.logL) {
    ajaxlogs.splice(-1, 1)
  }
  ajaxlogs.unshift(data)
  wx.setStorageSync('ajaxlogs', ajaxlogs)
}
// 处理错误记录
export const errlogs = ({
  url,
  method,
  params,
  header,
  msg
}) => {
  let time = Date.now()
  let errdata = {
    url,
    method,
    params,
    header,
    msg,
    time
  }
  console.error('errlog:', errdata)
  logger.warn(errdata)
  let errlogs = wx.getStorageSync('errlogs') || []
  let uploaderrlogs = wx.getStorageSync('uploaderrlogs') || []

  errlogs.unshift(errdata)
  uploaderrlogs.unshift(errdata)
  if (errlogs.length > config.logL) {
    errlogs.splice(-1, 1)
  }
  if (uploaderrlogs.length > config.logL) {
    uploaderrlogs.splice(-1, 1)
  }
  wx.setStorageSync('errlogs', errlogs)
  wx.setStorageSync('uploaderrlogs', uploaderrlogs)
}
module.export = {
  pagelogs,
  errlogs
}
