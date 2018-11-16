import {
  VantComponent
} from '../common/component';
VantComponent({
  /**
   * 组件的属性列表
   */
  props: {
    score: {
      type: Number,
      value: 0
    },
    fontsize: {
      type: String,
      value: '24px'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},
  computed: {
    scorelist() {
      const {
        data
      } = this;
      let reslist = []
      for (var i = data.score; i > 0; i--) {
        if (i < 1) {
          if (parseInt(i) == parseFloat(i)) {} else {
            reslist.push(0.5)
          }
        } else {
          reslist.push(1)
        }
      }
      if (reslist.length < 5) {
        const fildArray = new Array(5 - reslist.length)
        reslist = reslist.concat(fildArray)
      }
      return reslist;
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tapstart(event) {
      this.$emit('click', event.currentTarget.dataset.index);
    }
  }
})