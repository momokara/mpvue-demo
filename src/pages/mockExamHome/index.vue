<template>
  <div class="container">
    <div id="msg">模拟考试</div>
    <input type="text" v-model="msg">

  </div>
</template>
<script>

export default {
  data() {
    return {
      msg: "这里是消息"
    };
  },
  // 使用的 vue 组件
  components: {

  },
  // 页面中的方法
  methods: {},
  // VUE 钩子 常用

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {
  },

  // 监听页面显示
  onShow() {

  },
 
};
</script>


<style lang="scss">
</style>
