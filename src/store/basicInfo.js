// 用户基本信息
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const basicInfo = new Vuex.Store({
  state: {
    userInfo: {},
    basicInfo: {},
    // 是否登录
    islogin: false,
    // 是否登录中
    isLogin: false,
    // 接受的分享者id
    shareUserNo: '',
    // 是否从二维码启动
    isFromCode: ''
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
    /**
     * 更新指定字段的内容
     */
    updataBasicInfo: (state, data) => {
      const obj = state
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key]
          // console.log("updataByKey",key,element)
          if (typeof obj.basicInfo[key] === 'object' && typeof element === 'object') {
            obj.basicInfo[key] = Object.assign({}, obj[key], element)
          } else {
            obj.basicInfo[key] = element
          }
        }
      }
      if (obj.token) {
        obj.islogin = true
      }
    },
    // 清除数据
    clean: (state, isreset) => {
      const obj = state
      if (isreset) {
        obj.userInfo = {}
        obj.basicInfo = {}
        obj.islogin = false
        obj.isLogin = false
        obj.isgetinfo = false
      }
    }
  }
})

export default basicInfo
