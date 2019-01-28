<template>
  <div class="container">
    <div id="msg">这里放页面内容</div>
    <input
      type="text"
      v-model="msg"
    >
    <card :text="msg"></card>
  </div>
</template>
<script>
import card from "@/components/card";
import { getCosList } from "@/utils/cos/cosfunc";
export default {
  data() {
    return {};
  },
  // 使用的 vue 组件
  components: {
    card
  },
  // 页面中的方法
  methods: {},

  // 监听页面加载
  onLoad() {
    console.log("demopage-onLoad", this.msg);
    getCosList()
  },
  // 监听页面显示
  onShow() {
    console.log("demopage-onShow", this.msg);
  }
};
</script>


<style lang="scss">
</style>
