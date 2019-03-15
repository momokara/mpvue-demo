<template>
  <div class="container">

  </div>
</template>
<script>
// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {};
  },
  // 使用的 vue 组件
  components: {},

  computed: {},
  // 页面中的方法
  methods: {
    getPageData: function() {
      let _this = this;
    }
  },

  // 监听页面加载
  onLoad() {},
  // 监听页面显示
  onShow() {
    pagelogs();
  },

  // 监听页面隐藏
  onHide() {
    pagelogs(true);
  }
};
</script>


<style lang="scss">
</style>
