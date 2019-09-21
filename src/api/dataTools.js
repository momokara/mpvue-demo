// 存放一些通用数据处理方法
import basicInfo from '@/store/basicInfo.js'
import cache from '@/store/cache.js'
import cloudConfig from '@/store/cloudConfig.js'
import { getUserInfoSer, ajax } from '@/api/basic'
import { getOpenid } from '@/utils/cloudfunc/getUserInfo'
import { deCloudID } from '@/utils/cloudfunc/tools'
import config from '@/config.js'
import { getSessionKeyCloud } from '@/api/cloudTools'
// 清除缓存并重新登录 重新登录
export const reLogin = () => {
  wx.clearStorageSync()
  basicInfo.commit('clean', true)
  getConfig()
  return getUserInfoSer()
}

// 检测小程序是否被禁用
export const checkIsForbidden = () => {
  let url = `${cloudConfig.state.host}/user_service/pubs/public/isforbidden`
  ajax({ url, isShowCode: true }).then(res => {
    if (res.isForbidden) {
      console.error('是否被禁用 ', res, res.isForbidden)
      wx.redirectTo({
        'url': '/pages/user/forbidden/main',
        fail: (err) => {
          console.error('wx.redirectTo err!!!!!!!!', err)
        }
      })
    }
  })
}

/**
 * 获分享信息
 * @param {String} path 分享路径
 * @param {String} title 标题
 * @param {String} imageUrl 分享图片
 * @return {Object} 返回结果
 */
export const getShareData = (path, title, imageUrl, { params } = {}) => {
  let _params = ''
  let options = {}

  let soureOptions = {}
  let sourePath
  // eslint-disable-next-line no-undef
  sourePath = getCurrentPages()
  sourePath = sourePath[sourePath.length - 1]
  soureOptions = sourePath.options
  sourePath = sourePath.route

  if (!path) {
    path = sourePath
    options = soureOptions
  }
  options.shareUserNo = basicInfo.state.userNo || ''
  // 处理特殊字符
  if (options.shareUserNo === 'undefined' || options.shareUserNo === 'null') {
    options.shareUserNo = ''
  }
  if (params) {
    options = Object.assign({}, options, params)
  }
  for (const key in options) {
    _params = `${_params}&${key}=${options[key]}`
  }
  path = `${path}?${_params}`

  try {
    const wxlogger = wx.getRealtimeLogManager()
    wxlogger.info({
      pageData: {
        sourePath,
        soureOptions
      },
      sharedata: {
        path,
        title,
        imageUrl
      }
    })
  } catch (error) {
    console.error(error)
  }

  return {
    path,
    title,
    imageUrl
  }
}

/**
 * 获取系统配置
 * @return {Promise} 返回结果
 */
export const getConfig = async () => {
  // cloudConfig.commit('loadData')
  if (!cloudConfig.state.host) {
    cloudConfig.commit('updataByKey', config)
  }
  return new Promise((resolve, reject) => {
    try {
      getOpenid().then(res => {
        if (!cloudConfig.state.mpid) {
          cloudConfig.commit('updataByKey', { mpid: res.fileName })
        }
        let urlCos = `${cloudConfig.state.cos.static_url_basic}${cloudConfig.state.cos.static_url_file}${cloudConfig.state.mpid || res.fileName}/defaultData.json`
        ajax({ url: urlCos, isShowCode: true }).then(res => {
          // 处理默认配置信息
          if (res.defaultData) {
            cloudConfig.commit('updataByKey', res)
            // wx.setStorageSync('cloudConfig', cloudConfig.state)
            resolve(res)
          }
        })
      })
    } catch (error) {
      reject(error)
    }
  })
}

/**
 * 解密用户信息
 * @param {Object} data 解密需要的信息
 * data.code
 * data.encryptedData 接口获取的加密信息，
 * data.iv 接口解密向量
 * data.cloudID 云函数解密用 cloudID
 * @return {Object} 解密后的结果
 */
export const deCrypt = async (params, isShowErr = true) => {
  wx.showToast({
    title: '获取中...',
    icon: 'loading',
    mask: true
  })
  if (params.cloudID) {
    return deCloudID(params.cloudID).then(res => {
      wx.hideToast()
      return res
    }).catch(err => {
      console.error(err)
      let _params = params
      _params.cloudID = null
      return deCrypt(_params)
    })
  } else {
    return new Promise((resolve, reject) => {
      checkSessionKey().then(res => {
        console.log('checkSessionKey res', res)
        params.sessionKey = res.cache || res.sessionKey || res
        let url = `${cloudConfig.state.host}/user_service/pubs/public/getPhoneNum`
        ajax({ url, method: 'POST', params, isShowErr }).then(res => {
          wx.hideToast()
          console.log(res)
          resolve({ phoneNumber: res })
        })
      })
    })
  }
}

// 获取 sessionKey
export const getSessionKey = async () => {
  let url = `${cloudConfig.state.host}/user_service/pubs/public/getSessionKey`
  return new Promise((resolve, reject) => {
    getSessionKeyCloud().then(res => {
      console.log('getSessionKeyCloud', res)
      cache.commit('saveSessionKey', res)
      resolve(res.sessionKey || res)
    }).catch(err => {
      console.error(err)
      wx.login({
        success: res => {
          ajax({ url, method: 'POST', params: { code: res.code }, isShowErr: true }).then(res => {
            console.log('get Ser sessionKey', res)
            if (res) {
              cache.commit('saveSessionKey', res)
              resolve(res)
            } else {
              reject(res)
            }
          })
        }
      })
    })
  })
}
// 检测 sessionKey
export const checkSessionKey = async () => {
  // let _sessionKey = await wx.getStorageSync('sessionKey')
  // console.log('load-sessionKey', _sessionKey)
  return new Promise((resolve, reject) => {
    // 检测缓存时候存在sessionkey
    if (cache.state.sessionKey) {
      // 检测是否过期
      wx.checkSession({
        success: res => {
          console.log('checkSession success:', res)
          resolve(cache.state.sessionKey)
        },
        fail: err => {
          console.log('checkSession fail:', err)
          getSessionKey().then(res => {
            resolve(res)
          })
        }
      })
    } else {
      console.log('no-sessionKey')
      getSessionKey().then(res => {
        resolve(res)
      })
    }
  })
}
/**
 * 设置tabBar样式
 * @param {Object} barStyle 解密需要的信息
 * @param {Object} list 解密需要的信息
 */
export const setbarStyle = async ({ barStyle, list }) => {
  console.log('设置tabBar', { barStyle, list })
  wx.setTabBarStyle(barStyle)
  list.forEach((element, index) => {
    element.index = index
    wx.setTabBarItem(element)
  })
}

/**
 * 获取地理位置
 * @param {Object} type 编码格式
 * @return {Promise} 地址信息
 */
export const getwxLocation = async ({ type = 'wgs84' }) => {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: type,
      success (res) {
        cache.commit('saveLocation', res)
        resolve(res)
      },
      fail (err) {
        reject(err)
      }
    })
  })
}
module.export = {
  reLogin,
  checkIsForbidden,
  getShareData,
  getConfig,
  deCrypt,
  getSessionKey,
  checkSessionKey,
  setbarStyle,
  getwxLocation
}
