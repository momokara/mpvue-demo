<template>
  <div class="container">

  </div>
</template>
<script>
export default {
  data() {
    return {
      pageconfig: {
        // 当前显示位置
        nActive: 0
      },

      data: {
        arrQid: [],
        arrQData: [],
        arrAnswer: [],
        arrCollect: []
      }
    };
  },
  // 使用的 vue 组件
  components: {},
  // 页面中的方法
  methods: {
    checkIsInArray(array, index) {
      let isIn = -1;
      let i = 0;
      for (const key in array) {
        if (array.hasOwnProperty(key)) {
          const e = array[key];
          if (index >= e[0] && index <= e[e.length - 1]) {
            // console.log(e);
            isIn = i;
            break;
          }
          i++;
        }
      }
      return isIn;
    },
    getBefore(array, index) {
      index = parseInt(index);
      console.log("getBefore", index);
      let before;
      if (this.checkIsInArray(array, index - 1) >= 0) {
        before = index - 1;
        return before;
      }
      if (this.checkIsInArray(array, index) >= 1) {
        let resRange = array[this.checkIsInArray(testarr, index) - 1];
        before = resRange[resRange.length - 1];
        return before;
      }
      console.log("no data");
    },
    getAfter(array, index) {
      index = parseInt(index);
      console.log("getAfter", index);
      let after;
      if (this.checkIsInArray(array, index + 1) >= 0) {
        after = index + 1;
        return after;
      }
      if (this.checkIsInArray(array, index) < array.length - 1) {
        let resRange = array[this.checkIsInArray(testarr, index) + 1];
        after = resRange[0];
        return after;
      }
      console.log("no data");
    },
    goCheck() {
      let res = this.checkIsInArray(testarr, this.index);

      console.log(testarr[res]);
      console.log("getBefore", this.getBefore(testarr, this.index));
      console.log("getAfter", this.getAfter(testarr, this.index));
    },
    getPageData: function() {}
  },

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {
    console.log("demopage-created", this.msg);
    for (let index = 0; index <= 1330; index++) {
      this.data.arrQid.push(index);
    }
  },

  // 监听页面显示
  onShow() {
    console.log("demopage-onShow", this.msg);
  }
};
</script>


<style lang="scss">
.scroll-box {
  white-space: nowrap;
  .item {
    display: inline-block;
    width: 100%;
    border: 1px solid #ddd;
  }
}
</style>
