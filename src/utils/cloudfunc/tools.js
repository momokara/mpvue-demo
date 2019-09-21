// 通过云函数获取openid 如果有 unionid 则获取 unionid
// 用code解密
export const deCrypt = ({ encryptedData, iv, code }) => {
  return new Promise((resolve, reject) => {
    if (wx.cloud) {
      console.log({
        encryptedData,
        iv
      })
      wx.cloud.callFunction({
        // 云函数名称
        name: 'tools',
        data: {
          action: 'deCrypt',
          encryptedData,
          iv,
          code
        }
      }).then(res => {
        resolve(res.result)
      }).catch(error => {
        console.error('获取配置错误:', error)
        reject(error)
      })
    } else {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      let err = '请使用 2.2.3 或以上的基础库以使用云能力'
      reject(err)
    }
  })
}
// 解密信息 直接用 sessionKey
export const deCryptKey = ({ encryptedData, iv, sessionKey }) => {
  return new Promise((resolve, reject) => {
    if (wx.cloud) {
      console.log({
        encryptedData,
        iv,
        sessionKey
      })
      wx.cloud.callFunction({
        // 云函数名称
        name: 'tools',
        data: {
          action: 'deCryptKey',
          encryptedData,
          iv,
          sessionKey
        }
      }).then(res => {
        resolve(res.result)
      }).catch(error => {
        console.error('获取配置错误:', error)
        reject(error)
      })
    } else {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      let err = '请使用 2.2.3 或以上的基础库以使用云能力'
      reject(err)
    }
  })
}
// 保存 appSecret
export const saveAS = ({ appSecret }) => {
  return new Promise((resolve, reject) => {
    if (wx.cloud) {
      wx.cloud.callFunction({
        // 云函数名称
        name: 'tools',
        data: {
          action: 'saveAppSecret',
          appSecret
        }
      }).then(res => {
        resolve(res.result)
      }).catch(error => {
        console.error('获取配置错误:', error)
        reject(error)
      })
    } else {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      let err = '请使用 2.2.3 或以上的基础库以使用云能力'
      reject(err)
    }
  })
}

// 获取 sessionKey
export const getSessionKey = () => {
  return new Promise((resolve, reject) => {
    if (wx.cloud) {
      wx.login({
        success: function (res) {
          let code = res.code
          wx.cloud.callFunction({
            // 云函数名称
            name: 'tools',
            data: {
              action: 'getSessionKey',
              code
            }
          }).then(res => {
            resolve(res.result)
          }).catch(error => {
            console.error('获取配置错误:', error)
            reject(error)
          })
        }
      })
    } else {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      let err = '请使用 2.2.3 或以上的基础库以使用云能力'
      reject(err)
    }
  })
}

// 使用CloudID解密
export const deCloudID = (CloudID) => {
  return new Promise((resolve, reject) => {
    if (wx.cloud) {
      wx.cloud.callFunction({
        // 云函数名称
        name: 'tools',
        data: {
          action: 'deCloudID',
          serData: wx.cloud.CloudID(CloudID)
        }
      }).then(res => {
        let _result = res.result || {}
        if (_result.deCryptData) {
          _result = _result.deCryptData
          resolve(_result)
        } else {
          reject(_result)
        }
      }).catch(error => {
        console.error('获取配置错误:', error)
        reject(error)
      })
    } else {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      let err = '请使用 2.2.3 或以上的基础库以使用云能力'
      reject(err)
    }
  })
}
// 获取无限制二维码
export const getUnlimited = ({ scene = 'nodata', page = 'pages/home/main', fileName, isHyaline, autoColor, lineColor }) => {
  return new Promise((resolve, reject) => {
    if (wx.cloud) {
      wx.cloud.callFunction({
        // 云函数名称
        name: 'tools',
        data: {
          action: 'getUnlimited',
          scene,
          page,
          fileName,
          is_hyaline: isHyaline,
          auto_color: autoColor,
          line_color: lineColor
        }
      }).then(res => {
        resolve(res.result)
      }).catch(error => {
        console.error('获取配置错误:', error)
        reject(error)
      })
    } else {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      let err = '请使用 2.2.3 或以上的基础库以使用云能力'
      reject(err)
    }
  })
}

module.export = {
  deCrypt,
  deCryptKey,
  saveAS,
  getSessionKey,
  deCloudID,
  getUnlimited
}
