<template>
  <div class="container">
  </div>
</template>
<script>
export default {
  data() {
    return {
   
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
    console.log("demopage-created", this.msg);
  },
  // 页面节点挂载  
  mounted() {
    console.log("demopage-mounted", this.msg);
  },
  
};
</script>


<style lang="scss">
</style>
