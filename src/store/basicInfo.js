// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const basicInfo = new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    updatauserInfo: (state, userInfo) => {
      console.log("updatauserInfo", state, userInfo);
      const obj = state
      obj.userInfo = userInfo
    }
  }
})

export default basicInfo
