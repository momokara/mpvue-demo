<template>
  <div class="container">

  </div>
</template>
<script>
import { getExamHis } from "@/api/api.exam";

// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {
      pageconfig: {},
      data: {}
    };
  },
  // 使用的 vue 组件
  components: {},

  computed: {},
  // 页面中的方法
  methods: {
    getPageData: function() {
      let _this = this;
      getExamHis().then(res => {
        console.log("getExamHis", res);
      });
    }
  },

  // 监听页面显示
  onShow() {
    pagelogs();
    this.getPageData();
  },

  // 监听页面隐藏
  onHide() {
    pagelogs(true);
  },

  onPullDownRefresh() {}
};
</script>


<style lang="scss">
</style>
