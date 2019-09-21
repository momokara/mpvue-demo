// 项目全局配置
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const cloudConfig = new Vuex.Store({
  state: {
    host: '',
    mpid: '',
    cos: {},
    defaultData: {}
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
          if (typeof obj[key] === 'object' && typeof element === 'object') {
            obj[key] = Object.assign({}, obj[key], element)
          } else {
            obj[key] = element
          }
        }
      }
    },
    loadData: (state) => {
      const obj = state
      let data = wx.getStorageSync('cloudConfig')
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key]
          if (typeof obj[key] === 'object' && typeof element === 'object') {
            obj[key] = Object.assign({}, obj[key], element)
          } else {
            obj[key] = element
          }
        }
      }
    }
  }
})

export default cloudConfig
