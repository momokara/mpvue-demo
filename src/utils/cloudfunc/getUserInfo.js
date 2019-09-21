// 通过云函数获取openid 如果有 unionid 则获取 unionid
import basicInfo from '@/store/basicInfo.js'
import cloudConfig from '@/store/cloudConfig.js'
import config from '@/config.js'
import { consoleGroup } from '@/utils/tools'
/**
 * 获取openid
 */
export const getOpenid = () => {
  return new Promise((resolve, reject) => {
    if (wx.cloud) {
      let openid = isReLogin()
      if (!openid) {
        // 获取的权限
        wx.getSetting({
          success: res => {
            consoleGroup('获取用户当前权限(getSetting):', [res])
          }
        })
        wx.cloud.callFunction({
          // 云函数名称
          name: 'getOpenid',
          // 传给云函数的参数
          data: {
            // 是否加密传输
            isEncode: true
          }
        }).then(res => {
          if (process.env.NODE_ENV !== 'production') {
            consoleGroup('云函数登录成功!(loginres)', [res])
          } else {
            console.info('云函数登录成功!(loginres)')
          }

          let _data = res.result
          basicInfo.commit('updataByKey', _data)
          if (_data.fileName) {
            cloudConfig.commit('updataByKey', { mpid: _data.fileName })
          }
          wx.setStorageSync('openid', basicInfo.state)
          resolve(_data)
        }).catch(error => {
          console.error('微信登录错误:', error)
          reject(error)
        })
      } else {
        if (process.env.NODE_ENV !== 'production') {
          consoleGroup('加载本地缓存(load Storage):', [openid])
        } else {
          console.info('加载本地缓存(load Storage)')
        }
        basicInfo.commit('updataByKey', openid)
        basicInfo.commit('updataByKey', { isLogin: false })
        resolve(openid)
      }
    } else {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      let err = '请使用 2.2.3 或以上的基础库以使用云能力'
      reject(err)
    }
  })
}

/**
 * 获取云函数中的用户信息
 * @return {Object} 所有存储的用户信息
 */
export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    if (wx.cloud) {
      wx.cloud.callFunction({
        // 云函数名称
        name: 'tools',
        // 传给云函数的参数
        data: {
          action: 'getUserInfo'
        }
      }).then(res => {
        let _data = res.result
        basicInfo.commit('updataByKey', _data)
        wx.setStorageSync('openid', basicInfo.state)
        resolve(_data)
      }).catch(error => {
        console.error('获取用户信息错误', error)
        reject(error)
      })
    } else {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    }
  })
}
/**
 * 写入用户信息
 * @param {Object} data  需要存储的信息 data.userInfo 微信公开信息， data.basicInfo 用户t填写基本信息
 * @return {Object} 更新后的用户信息
 */
export const saveUserInfo = (savedata) => {
  return new Promise((resolve, reject) => {
    if (wx.cloud) {
      wx.cloud.callFunction({
        // 云函数名称
        name: 'tools',
        // 传给云函数的参数
        data: {
          action: 'saveUserInfo',
          data: savedata
        },
        success (res) {
          let _data = res.result
          // consoleGroup('用户信息保存成功:', [_data])
          wx.setStorageSync('openid', _data)
          basicInfo.commit('updataByKey', _data)
          resolve(_data)
        },
        fail (error) {
          // consoleGroup('用户信息保存失败:', error, 'error')
          reject(error)
        }
      })
    } else {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    }
  })
}

/**
 * 解密用户信息
 * @param {Object} data 解密需要的信息
 * data.code
 * data.encryptedData 接口获取的加密信息，
 * data.iv 接口解密向量
 * @return {Object} 解密后的结果
 */
export const deCrypt = (data) => {
  console.log('deCrypt data', data)
  return new Promise((resolve, reject) => {
    wx.login({
      success: function (res) {
        data.code = res.code
        if (wx.cloud) {
          wx.cloud.callFunction({
            // 云函数名称
            name: 'decrypt',
            // 传给云函数的参数
            data: data,
            success (res) {
              let _data = res.result
              resolve(_data)
            },
            fail (error) {
              console.error('解密失败:', error)
              reject(error)
            }
          })
        } else {
          console.error('请使用 2.2.3 或以上的基础库以使用云能力')
        }
      }
    })
  })
}
/**
 * 根据本地 Storage.openid.time 检测登录过期
 * @return {Object/Boolean} 没有过期则返回storage中的用户信息，过期则返回false
 */
export const isReLogin = () => {
  let openid = wx.getStorageSync('openid')
  let nowTime = new Date().getTime()
  let pastTime
  if (openid) {
    pastTime = parseInt((nowTime - openid.time) / 1000)
  } else {
    pastTime = 0
  }
  console.info('登录状态:', config.loginKeepTime >= pastTime ? '未过期' : '登录过期')

  if (config.loginKeepTime >= pastTime) {
    return openid
  } else {
    // 移除登录信息
    wx.removeStorageSync('openid')
    basicInfo.commit('clean', true)
    return false
  }
}

module.export = {
  getOpenid,
  getUserInfo,
  saveUserInfo,
  deCrypt
}
