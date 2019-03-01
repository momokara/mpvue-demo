<template>
  <div class="container">
    <div id="msg">这里放页面内容</div>
    <input
      type="text"
      v-model="msg"
    >
    <div>
      组件:
    </div>
    <demoBlock :title="msg">
      <div>
        插槽内容
      </div>
    </demoBlock>

    <input type="text">
  </div>
</template>
<script>
import demoBlock from "@/components/demoBlock";

// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {
      msg: "这里是消息-demoBlock"
    };
  },
  // 使用的 vue 组件
  components: {
    demoBlock
  },
  watch: {
    msg(val, old_val) {
      console.log("watchmsg", val, old_val);
    }
  },
  computed: {},
  // 页面中的方法
  methods: {},
 
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

  // 监听页面卸载
  onUnload() {
    console.log("demopage-onUnload", this.msg);
  },
  // 监听用户下拉动作
  onPullDownRefresh() {
    console.log("demopage-onPullDownRefresh", this.msg);
  },
  // 页面上拉触底事件的处理函数
  onReachBottom() {
    console.log("demopage-onReachBottom", this.msg);
  },
  // 用户点击右上角分享
  onShareAppMessage() {
    console.log("demopage-onShareAppMessage", this.msg);
  }
};
</script>


<style lang="scss">
</style>
