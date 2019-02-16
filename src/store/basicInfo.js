// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const basicInfo = new Vuex.Store({
  state: {
    userInfo: {},
    islogin: false
  },
  mutations: {
    // 变更方法
    updataUserInfo: (state, userInfo) => {
      console.log("updataUserInfo", userInfo);
      const obj = state;
      obj.userInfo = userInfo;
      if (userInfo.openid) {
        obj.islogin = true
      }
    }
  }
})

export default basicInfo
