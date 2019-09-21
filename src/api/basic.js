/* jshint esversion: 6 */
// 统一处理 页面请求
import { ajaxAll } from '@/utils/Wxrequest'
import basicInfo from '@/store/basicInfo.js'
import cloudConfig from '@/store/cloudConfig.js'
import cache from '@/store/cache.js'
import { getOpenid, getUserInfo } from '@/utils/cloudfunc/getUserInfo'
import config from '@/config.js'

// 页面接口

/**
 * 获取首页信息
 * @param {Number} requestType 请求方式 0-(默认值) 请求cos静态数据地址 1-请求服务器接口
 * @return {Promise} 返回结果
 */
export const getHomeInfo = async (requestType = config.isGetDataFormCos) => {
  console.log('getHomeInfoisRetry', requestType)
  console.log('cloudConfigcloudConfig', cloudConfig.state)
  if (requestType === 1 || requestType === '1') {
    let url = `${cloudConfig.state.host}/marketing_service/pubs/home_data`
    return ajax({ url })
  } else {
    return new Promise((resolve, reject) => {
      getOpenid().then(res => {
        let urlCos = `${cloudConfig.state.cos.static_url_basic}${cloudConfig.state.cos.static_url_file}${cloudConfig.state.mpid}/home_data.json`
        ajax({ url: urlCos }).then(res => {
          if (res) {
            if (typeof res === 'string') {
              res = JSON.parse(res)
            }
            resolve(res)
          } else {
            reject(new Error('err nodata'))
          }
        }).catch(err => {
          reject(err)
        })
      })
    }).catch(err => {
      console.error('getHomeInfo on Cos', err, cloudConfig.state.mpid)
      return getHomeInfo(1)
    })
  }
}

/**
 * 获取配置的自定义首页
 * @return {Promise} 返回结果
 */
export const getAdHomeInfo = async ({ requestType = 0, id }) => {
  if (requestType === 1 || requestType === '1') {
    let url = `${cloudConfig.state.host}/common_service/pubs/adHome/${id}`
    return ajax({ url })
  } else {
    return new Promise((resolve, reject) => {
      getOpenid().then(res => {
        let urlCos = `${cloudConfig.state.cos.static_url_basic}${cloudConfig.state.cos.static_url_file}${cloudConfig.state.mpid}/adHome/${id}.json`
        ajax({ url: urlCos }).then(res => {
          if (res) {
            if (typeof res === 'string') {
              res = JSON.parse(res)
            }
            resolve(res)
          } else {
            reject(new Error('err nodata'))
          }
        }).catch(err => {
          reject(err)
        })
      })
    }).catch(err => {
      console.error('getAdHomeInfo on Cos', err, cloudConfig.state.mpid)
      return getAdHomeInfo({ requestType: 1, id })
    })
  }
}

/**
 * 获取学车首页信息
 * @return {Promise} 返回结果
 */
export const getLearnHomeInfo = async () => {
  let url = `${cloudConfig.state.host}/dirving_service/pubs/home`
  return ajax({ url })
}

/**
 * 获取个人中心首页信息
 * @return {Promise} 返回结果
 */
export const getUserCenterHomeInfo = async () => {
  let url = `${cloudConfig.state.host}/user_service/pubs/home`
  return ajax({ url })
}

/**
 * 获取学车首页卡片信息(新)
 * @return {Promise} 返回结果
 */
export const getLearnHomeCard = async () => {
  let url = `${cloudConfig.state.host}/learn_driving_service/pubs/home/card`
  return ajax({url})
}

/**
 * 从cos中获去学车首页菜单信息
 * @return {Promise} 返回结果
 */
export const getLearnHomeMenu = async () => {
  let urlCos
  if (cloudConfig.state.mpid) {
    urlCos = await `${cloudConfig.state.cos.static_url_basic}${cloudConfig.state.cos.static_url_file}${cloudConfig.state.mpid}/learningCarHome.json`
  } else {
    urlCos = await getOpenid().then(res => {
      return `${cloudConfig.state.cos.static_url_basic}${cloudConfig.state.cos.static_url_file}${res.fileName}/learningCarHome.json`
    })
  }
  return ajax({url: urlCos})
}

/**
 * 检查是否可以弹窗
 * @param {Array} data 用户错误记录
 * @return {Promise} 返回结果
 */
export const checkIsShowPopup = async () => {
  let url = `${cloudConfig.state.host}/user_service/pubs/hasPopupPermission`
  return ajax({ url })
}
/**
 * 上传用户访问记录
 * @param {Array} params 用户访问记录
 * @return {Promise} 返回结果
 */
export const uploadLogs = async (params) => {
  let url = `${cloudConfig.state.host}/common_service/pubs/addUserViewInfo`
  return ajax({ url, method: 'PUT', params, isShowCode: true })
}
/**
 * 上传用户错误记录
 * @param {Array} params 用户错误记录
 * @return {Promise} 返回结果
 */
export const uploadErrlogs = async (params) => {
  let url = `${cloudConfig.state.host}/common_service/pubs/addErrorLog`
  return ajax({ url, method: 'PUT', params, isShowCode: true })
}
/**
 * 上传formid
 * @param {Array} params form表单的params
 * @return {Promise} 返回结果
 */
export const uploadFormId = async (params) => {
  let url = `${cloudConfig.state.host}/wx_base_service/pubs/formid`
  if (params.mp) {
    params = params.mp.detail
  }
  return ajax({ url, method: 'POST', params, isShowCode: true })
}
/**
 * 上传分享参数
 * @param {Array} params 用户访问记录
 * @return {Promise} 返回结果
 */
export const uploadShareData = async (params) => {
  let url = `${cloudConfig.state.host}/common_service/pubs/reward/saveRewardRecord`
  return ajax({ url, method: 'POST', params, isShowCode: true })
}
/**
 * 获取排行榜数据
 * @param {Object} data data.id 排行榜id data.startTime 开始时间 data.endTime 结束时间 data.page 页码 data.size 分页大小
 * @return {Promise} 返回结果
 */
export const getRankingList = async (params) => {
  // let url = `${cloudConfig.state.host}/marketing_service/pubs/ranking`
  let url = `${cloudConfig.state.host}/common_service/pubs/rank/getActivityRewardRanking`
  return ajax({ url, method: 'POST', params })
}
/**
 * 获取scene对应data
 * @param {Object} data data.id 排行榜id data.startTime 开始时间 data.endTime 结束时间 data.page 页码 data.size 分页大小
 * @return {Promise} 返回结果
 */
export const getScenedata = async ({ id }) => {
  let url = `${cloudConfig.state.host}/wx_base_service/pubs/scene/detail/${id}`
  return ajax({ url, isShowErr: false })
}

/**
 * 检测弹窗是否需要获取地址
 * @return {Promise} 返回结果
 */
export const checkPopupisGetSituation = async (params) => {
  let url = `${cloudConfig.state.host}/user_service/pubs/isGetSituation`
  return ajax({ url, method: 'POST', params, isShowErr: false })
}
/**
 * 获取弹窗信息
 * @return {Promise} 返回结果
 */
export const getPopupInfo = async (params) => {
  let url = `${cloudConfig.state.host}/user_service/pubs/getPopupInfo`
  return ajax({ url, method: 'POST', params, isShowErr: false })
}

// 用户接口
/**
 * 从服务器获取用户基本信息
 * @param {Number} retryTimes 当前登录重试次数
 * @param {Number} isReGet 是否重新获取信息 true 时重新获取
 * @return {Promise} 返回结果
 */
export const getUserInfoSer = async (retryTimes) => {
  retryTimes = retryTimes | 0
  let url = `${cloudConfig.state.host}/user_service/pubs/getUserBaseInfo`
  return getOpenid().then(async (res) => {
    if (res.isgetinfo) {
      return res
    } else {
      if (res.token) {
        let commonheader = {
          token: res.token,
          shareUserNo: basicInfo.state.shareUserNo
        }
        if (basicInfo.state.isLogin) {
          console.log('登录中................................')
        } else {
          // 锁定判断 防止重复请求
          basicInfo.commit('updataByKey', { isLogin: true })
          return ajaxAll({ url, method: 'GET', header: commonheader }).then(res => {
            let resdata = res.result
            resdata.isgetinfo = true
            basicInfo.commit('updataByKey', resdata)
            basicInfo.commit('updataByKey', { isLogin: false })
            wx.setStorageSync('openid', basicInfo.state)
            return resdata
          }).catch(err => {
            console.error('从服务器获取用户信息失败！', err)
            getUserInfo().then(res => {
              console.log('从云服务获取用户信息备份:', res)
              basicInfo.commit('updataByKey', {
                isLogin: false,
                isgetinfo: true
              })
              wx.setStorageSync('openid', basicInfo.state)
            }).catch(err => {
              console.error('从云服务获取用户信息失败:', err)
            })
          })
        }
      } else if (retryTimes < config.loginRetryTimes - 1) { // 登录重试
        retryTimes++
        await setTimeout(function () {
          return getUserInfoSer(retryTimes)
        }, config.loginRetryDelay)
      } else { // 重试超时
        wx.showToast({
          title: '网络异常，请尝试重启小程序',
          icon: 'none'
        })
      }
    }
  })
}

// 通用方法
/**
 * 发送ajax 请求 带 请求头
 * @param {String} url 请求地址
 * @param {String} method 请求方式
 * @param {Object} params 请求参数
 * @param {Boolean} isShowCode 是否返回完整结果
 * @param {Object} header 请求的header
 * @param {Boolean} isShowToast 是否显示Toast提示
 * @param {Boolean} isShowErr 是否显示错误提示
 * @param {Boolean} isNeedPath 是否传递路径
 * @return {Promise} 返回结果
 */
export const ajax = async ({
  url,
  method = 'GET',
  params,
  isShowCode = false,
  header,
  isShowToast = false,
  isHideToast = false,
  isShowErr = true,
  isNeedPath = true,
  isJumpLoading = true
}) => {
  if (isShowToast) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask: true
    })
  }
  let commonheader = await getcommonheader()
  // 获取path
  if (isNeedPath) {
    let path = ''
    try {
      // eslint-disable-next-line no-undef
      let page = getCurrentPages()
      if (page.length) {
        page = page[page.length - 1]
        path = page.route || ''
      }
    } catch (error) {
      console.log(error)
    }
    if (path) {
      commonheader.path = path
    }
  }
  if (cache.state.location) {
    commonheader.latitude = cache.state.location.latitude
    commonheader.longitude = cache.state.location.longitude
  }

  let _header = Object.assign({}, commonheader, header)
  return ajaxAll({ url, method, params, header: _header, isShowErr }).then(res => {
    if (isHideToast) {
      wx.hideToast()
    }
    let resdata
    if (isShowCode) {
      resdata = res
    } else {
      resdata = res.result
    }
    // 设置页面title
    if (resdata && resdata.title) {
      wx.setNavigationBarTitle({
        title: `${resdata.title}`
      })
    }

    // 执行隐藏分享按钮
    if (resdata && resdata.isHideShare) {
      // 执行隐藏分享按钮操作
      wx.hideShareMenu({
        success: function (res) {
          console.info('分享按钮已隐藏！', res)
        },
        fail: function (err) {
          console.info('分享按钮隐藏失败！', err)
        }
      })
    }

    // 执行是否跳转 默认是true
    if (isJumpLoading) {
      if (res.code === 320) {
        wx.navigateTo({
          url: '/pages/common/loadingPage/main'
        })
      }
    }
    return resdata
  })
}

/**
 * 获取通用请求头
 * @return {JSON} 返回当前请求头
 */
export const getcommonheader = async () => {
  let commonheader = {}
  let shareUserNo = cache.state.shareUserNo
  let isFromCode = basicInfo.state.isFromCode
  if (basicInfo.state.token) {
    commonheader = {
      token: basicInfo.state.token,
      shareUserNo,
      isFromCode
    }
  } else {
    // 如果本地state中没有token 则重新获取
    let logindata = await getOpenid().then(async (res) => {
      return res
    })
    commonheader = {
      token: logindata.token,
      shareUserNo,
      isFromCode
    }
  }
  // 如果没有载入个人信息则尝试重新获取
  // if (!basicInfo.state.userInfo.avatarUrl) {
  //   await getUserInfoSer()
  // }
  // 标记版本头
  commonheader.Build = `mp_${process.env.NODE_ENV}_${process.env.DATE}`
  return commonheader
}

module.export = {
  getcommonheader,
  getLearnHomeInfo,
  getUserInfoSer,
  getHomeInfo,
  getAdHomeInfo,
  uploadLogs,
  uploadErrlogs,
  uploadShareData,
  getUserCenterHomeInfo,
  getLearnHomeCard,
  getLearnHomeMenu,
  ajax,
  checkIsShowPopup,
  uploadFormId,
  getRankingList,
  checkPopupisGetSituation,
  getPopupInfo
}
