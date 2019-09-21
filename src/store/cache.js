// 系统临时变量
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const cache = new Vuex.Store({
  state: {
    sessionKey: '',
    shareUserNo: '',
    location: null,
    isNeedLocation: null
  },
  mutations: {
    /**
     * 更新指定字段的内容
     */
    updataByKey: (state, data) => {
      const obj = state
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key]
          // console.log("updataByKey",key,element)
          if (typeof obj[key] === 'object' && typeof element === 'object') {
            obj[key] = Object.assign({}, obj[key], element)
          } else {
            obj[key] = element
          }
        }
      }
      if (obj.token) {
        obj.islogin = true
      }
    },
    // 更新sessionKey
    saveSessionKey: (state, data) => {
      const obj = state
      obj.sessionKey = data
    },
    // 更新shareUserNo
    saveShareUserNo: (state, data) => {
      const obj = state
      obj.shareUserNo = data
    },
    // 更新shareUserNo
    saveLocation: (state, data) => {
      const obj = state
      obj.location = data
      console.info('地址更新成功：', obj.location)
    }
  }
})

export default cache
