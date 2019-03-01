<template>
  <div class="container">
    <div id="search_bar">
      <van-search
        :value="value"
        placeholder="请输入搜索关键词"
        use-action-slot
        @change="onChange"
        @search="onSearch"
      >
        <view
          slot="action"
          @tap="onSearch"
        >搜索</view>
      </van-search>
    </div>
    <div class="menu-box">

    </div>

  </div>
</template>
<script>
import demoBlock from "@/components/demoBlock";

// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {
      keyWord: ""
    };
  },
  // 使用的 vue 组件
  components: {
    demoBlock
  },
  watch: {},
  computed: {},
  // 页面中的方法
  methods: {
    // 搜索框改变事件
    onChange(e) {
      this.keyWord = e.mp.detail;
    },
    // 搜索方法
    onSearch(event) {
      if (this.keyWord) {
        wx.showToast({
          title: "搜索：" + this.keyWord,
          icon: "none"
        });
      }
    }
  },

  // 原生钩子
  // 监听页面加载
  onLoad() {
    console.log("demopage-onLoad", this.msg);
  },
  // 监听页面显示
  onShow() {
    console.log("demopage-onShow", this.msg);
    pagelogs();
  },
  // 监听用户下拉动作
  onPullDownRefresh() {
    console.log("demopage-onPullDownRefresh", this.msg);
  },
  // 页面上拉触底事件的处理函数
  onReachBottom() {
    console.log("demopage-onReachBottom", this.msg);
  }
};
</script>


<style lang="scss">
</style>
