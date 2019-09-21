/* jshint esversion: 6 */
// import {
//   isJsonString
// } from './tools'
import {
  errlogs,
  ajaxlogs
} from './logs'
/**
 * 发送ajax 请求
 * @param {String} url    请求的地址
 * @param {String} method 请求方式 POST || GET
 * @param {Object} params 请求的参数 如果为get 则会拼接在url 后
 * @param {Object} header 定义的请求头
 * @return {Promise} 请求返回的结果
 */
export const ajax = (url, method, params, header) => {
  // let _Request = toPromise(wx.request)
  let _headerDefault = {
    'Content-Type': 'application/json'
  }
  let _header = Object.assign({}, _headerDefault, header)
  method = method || 'GET'
  if (method === 'GET' || method === 'get') {
    let _params = ''
    if (params) {
      for (const key in params) {
        _params = `${_params}${key}=${params[key]}&`
      }
      url = `${url}?${_params}`
    }
  }
  return new Promise((resolve, reject) => {
    let requestTask = wx.request({
      url,
      data: params,
      method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: _header, // 设置请求的 header
      success: function (result) {
        let res = result.data || result
        resolve({ res, requestTask })
      },
      fail: function (err) {
        reject(err)
      },
      complete: function () {
        // complete
      }
    })
  })
}

/**
 * 发送ajax 如果失败则用 云函数转发 请求
 * @param {String} url    请求的地址
 * @param {String} method 请求方式 默认 GET  OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
 * @param {Object} params 请求的参数 如果为get 则会拼接在url 后
 * @param {Object} header 自定义请求头 使用云函数转发时有效
 * @param {Boolean} isShowErr 是否显示提示
 * @return {Promise} 请求返回的结果
 */
export const ajaxAll = ({ url, method = 'GET', params, header, isShowErr = true }) => {
  // 默认请求头
  let _headerDefault = {
    'Content-Type': 'application/json'
  }
  let _header = Object.assign({}, _headerDefault, header)
  // 默认请求方式
  method = method || 'GET'
  if (method === 'GET' || method === 'get') {
    let _params = ''
    if (params) {
      for (const key in params) {
        _params = `${_params}${key}=${params[key]}&`
      }
      url = `${url}?${_params}`
    }
  }
  return new Promise((resolve, reject) => {
    try {
      wx.request({
        url,
        data: params,
        method,
        header: _header,
        success: function (result) {
          let res = result.data || result
          console.log(result)
          let isCos = /\.json$/.test(url)
          // 处理错误信息 状态code 错误 或者 服务器错误
          if ((result.statusCode !== 200) || (!isCos && res.code !== 200)) {
            if (isShowErr) {
              if (res.errMsg) {
                wx.showToast({
                  title: res.errMsg,
                  icon: 'none'
                })
              }
            }
            console.error('server fail:', url)
            errlogs({
              url,
              method,
              params,
              header,
              msg: res
            })

            let errdata = {
              type: 'server fail',
              error: res
            }
            reject(errdata)
          } else {
            resolve(res)
          }
        },
        fail: function (err) {
          console.error('request fail:', url)
          // 处理请求失败
          if (isShowErr) {
            wx.showToast({
              title: err.errMsg,
              icon: 'none'
            })
          }
          errlogs({
            url,
            method,
            params,
            header,
            msg: err
          })
          let errdata = {
            type: 'request fail',
            error: err
          }
          reject(errdata)
        },
        complete: function (result) {
          let res = result.data || result
          ajaxlogs({
            url,
            method,
            params,
            header,
            msg: res
          })
        }
      })
    } catch (error) {
      if (isShowErr) {
        wx.showToast({
          title: error.toString(),
          icon: 'none'
        })
      }
      console.error('try fail:', url)
      let errdata = {
        type: 'try fail',
        error
      }
      reject(errdata)
    }
  })
}

module.export = {
  ajax,
  ajaxAll
}
