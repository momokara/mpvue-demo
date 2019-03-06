// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import {
  defaultData
} from '@/config'

Vue.use(Vuex)

const basicInfo = new Vuex.Store({
  state: {
    type: defaultData.questionType,
    subject: defaultData.qusetionSubject,
    qusetions: []
  },
  mutations: {
    /**
     * 更新指定字段的内容
     */
    updataByKey: (state, data) => {
      const obj = state;
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key];
          obj[key] = element;
        }
      }
    },
    // 重置
    clean: (state, isreset) => {
      const obj = state;
      if (isreset) {
        obj.type = defaultData.questionType;
        obj.subject = defaultData.qusetionSubject;
        obj.qusetions = [];
      }
    }
  }
})

export default basicInfo
