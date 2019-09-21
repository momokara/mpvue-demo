// 云函数调用封装
import cache from '@/store/cache.js'
import { getSessionKey } from '@/utils/cloudfunc/tools'

export const getSessionKeyCloud = async () => {
  return new Promise((resolve, reject) => {
    if (cache.state.sessionKey) {
      wx.checkSession({
        success: res => {
          console.log('success:', res)
          resolve({ sessionKey: cache.state.sessionKey })
        },
        fail: err => {
          console.log(err)
          getSessionKey().then(res => {
            cache.commit('saveSessionKey', res.session_key)
            resolve({ sessionKey: cache.state.sessionKey })
          })
        }
      })
    } else {
      getSessionKey().then(res => {
        cache.commit('saveSessionKey', res.session_key)
        resolve({ cache: res.session_key })
      })
    }
  })
}
