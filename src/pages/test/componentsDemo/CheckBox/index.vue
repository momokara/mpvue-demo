<template>
  <div class="container">
    <div id="msg">这里放页面内容</div>
    <van-checkbox
      :value="checked"
      :icon-name="'cross'"
      @change="onChange"
      :checked-color="'red'"
    >复选框</van-checkbox>
    <van-checkbox
      :value="checked"
      @change="onChange"
      :checked-color="'green'"
    >复选框</van-checkbox>
    <van-checkbox
      use-icon-slot
      :value="checked"
      @change="onChange"
    >
      自定义图标
      <div slot="icon">
        <div class="section-name">A</div>
      </div>
    </van-checkbox>
  </div>
</template>
<script>
import card from "@/components/card";
export default {
  data() {
    return {
      msg: "这里是消息",
      checked: true
    };
  },
  // 使用的 vue 组件
  components: {},
  // 页面中的方法
  methods: {},

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {
    console.log("demopage-created", this.msg);
  },

  // 页面节点挂载
  mounted() {
    console.log("demopage-mounted", this.msg);
  },

  // 页面数据更新之后  数据变更处理
  updated() {
    console.log("demopage-updated", this.msg);
  },
  // 原生钩子
  // 监听页面加载
  onLoad() {
    console.log("demopage-onLoad", this.msg);
  },
  // 监听页面显示
  onShow() {
    console.log("demopage-onShow", this.msg);
  },
  // 监听页面初次渲染完成
  onReady() {
    console.log("demopage-onReady", this.msg);
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
.section-name {
  height: 20px; /*px*/
  line-height: 18px; /*px*/
  width: 20px; /*px*/
  border-radius: 50%;
  border: 1px solid #ddd;
  text-align: center;
  font-style: 14px;
  box-sizing: border-box;
}
</style>
