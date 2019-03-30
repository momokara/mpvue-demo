// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const basicInfo = new Vuex.Store({
  state: {
    userInfo: {},
    basicInfo: {},
    islogin: false
  },
  mutations: {
    // 变更方法
    updataUserInfo: (state, userInfo) => {
      console.log('updataUserInfo', userInfo)
      const obj = state
      obj.userInfo = userInfo
      if (userInfo.openid) {
        obj.islogin = true
      }
    },
    /**
     * 更新指定字段的内容
     */
    updataByKey: (state, data) => {
      const obj = state
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key]
          // console.log("updataByKey",key,element)
          obj[key] = element
        }
      }
      if (obj.token) {
        obj.islogin = true
      }
    },
    clean: (state, isreset) => {
      const obj = state
      if (isreset) {
        obj.userInfo = {}
        obj.basicInfo = {}
        obj.islogin = false
        obj.isgetinfo = false
      }
    }
  }
})

export default basicInfo
