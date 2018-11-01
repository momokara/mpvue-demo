<template>
  <div class="container">
    <div class="title">
      基础组件
    </div>
    <div>
      <van-cell-group>
        <van-cell v-for="(item,index) in menuList" v-bind:key="index" :title="index+1+'.'+item.title" :value="item.cn_name" :label="item.label" :url="components_root_url+item.url" :border="false" is-link />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      components_root_url: "/pages/test/componentsDemo",
      menuList: [
        {
          title: "Layout",
          cn_name: "布局",
          label: "Layout 页面分栏布局",
          url: "/Layout/main"
        }
      ]
    };
  },

  components: {},

  methods: {},

  created() {}
};
</script>
<style>
page {
  background-color: #ddd;
}
</style>

<style scoped>
</style>
