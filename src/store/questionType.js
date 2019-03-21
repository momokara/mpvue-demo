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
    id: "1",
    // 显示的标签
    tag: defaultData.questionTag,
    // 显示的证件类型中文名
    cName: defaultData.questionClassName,
    // 所属的科目
    subject: defaultData.qusetionSubject,
    info:"未选择驾照类型",
    // 是否加载
    isLoad: false
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
