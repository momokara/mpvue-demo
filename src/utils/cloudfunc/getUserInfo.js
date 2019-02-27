// 通过云函数获取openid 如果有 unionid 则获取 unionid
import basicInfo from '../../store/basicInfo.js'
import config from '@/config.js'
/**
 * 获取openid
 */
export const getOpenid = () => {
  return new Promise((resolve, reject) => {
    if (wx.cloud) {
      wx.cloud.init({
        traceUser: true
      });
      let openid = isReLogin();
      if (!openid) {
        // 获取的权限
        wx.getSetting({
          success: res => {
            console.log("getSetting", res)
          }
        })
        wx.cloud.callFunction({
          // 云函数名称
          name: 'getOpenid',
          // 传给云函数的参数
          data: {
            //是否加密传输
            isEncode: true
          },
        }).then(res => {
          let _data = res.result;
          wx.setStorageSync('openid', _data);
          basicInfo.commit('updataByKey', _data);
          resolve(_data);
        }).catch(error => {
          console.error(error);
          reject(error)
        })
      } else {
        basicInfo.commit('updataByKey', openid);
        resolve(openid);
      }
    } else {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
      reject("请使用 2.2.3 或以上的基础库以使用云能力")
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
      wx.cloud.init({
        traceUser: true
      });
      let openid = isReLogin();
      if (!openid) {
        // 当前获取的权限
        wx.getSetting({
          success: res => {
            console.log("getSetting", res)
          }
        })
        wx.cloud.callFunction({
          // 云函数名称
          name: 'login',
          // 传给云函数的参数
          data: {},
        }).then(res => {
          let _data = res.result;
          wx.setStorageSync('openid', _data);
          basicInfo.commit('updataByKey', _data);
          resolve(_data);
        }).catch(error => {
          console.error(error);
          reject(error)
        })
      } else {
        basicInfo.commit('updataByKey', openid);
        resolve(openid);
      }
    } else {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    }
  })

}
/**
 * 写入用户信息
 * @param {Object} data  需要存储的信息 data.userInfo 微信公开信息， data.basicInfo 用户t填写基本信息
 * @return {Object} 更新后的用户信息
 */
export const saveUserInfo = (data) => {
  let _data = {
    userinfo: data.userInfo,
  };
  if (data.basicInfo) {
    _data.basicinfo = data.basicInfo
  }

  return new Promise((resolve, reject) => {
    if (wx.cloud) {
      wx.cloud.callFunction({
        // 云函数名称
        name: "saveUserInfo",
        // 传给云函数的参数
        data: _data,
        success(res) {
          let _data = res.result;
          console.log(_data)
          wx.setStorageSync('openid', _data);
          basicInfo.commit('updataByKey', _data);
          resolve(_data);
        },
        fail(error) {
          console.error("saveUserInfo fail:", error);
          reject(error)
        }
      });
    } else {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    }
  })
}

/**
 * 解密用户信息
 * @param {Object} data 解密需要的信息 
 * data.encryptedData 接口获取的加密信息，
 * data.iv 接口解密向量
 * @return {Object} 解密后的结果
 */
export const deCrypt = (data) => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: function (res) {
        data.code = res.code;
        if (wx.cloud) {
          wx.cloud.callFunction({
            // 云函数名称
            name: "decrypt",
            // 传给云函数的参数
            data: data,
            success(res) {
              let _data = res.result;
              resolve(_data);
            },
            fail(error) {
              console.error("decrypt fail:", error);
              reject(error)
            }
          });
        } else {
          console.error("请使用 2.2.3 或以上的基础库以使用云能力");
        }
      }
    });

  })
}
/**
 * 根据本地 Storage.openid.time 检测登录过期
 * @return {Object/Boolean} 没有过期则返回storage中的用户信息，过期则返回false
 */
export const isReLogin = () => {
  let openid = wx.getStorageSync('openid');
  let nowTime = new Date().getTime();
  let pastTime = parseInt((nowTime - openid.time) / 1000);
  console.log("config", config.loginKeepTime >= pastTime);
  if (config.loginKeepTime >= pastTime) {
    return openid;
  } else {
    return false
  }
}

const clouduser = {};
clouduser.getOpenid = getOpenid;
clouduser.getUserInfo = getUserInfo;
clouduser.saveUserInfo = saveUserInfo;
clouduser.deCrypt = deCrypt;
export default clouduser;

module.export = {
  getOpenid,
  getUserInfo,
  saveUserInfo,
  deCrypt
};
