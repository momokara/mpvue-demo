<template>
  <div class="container">
    <div class="title">
      基础组件
    </div>
    <div>
      <van-cell-group>
        <van-cell v-for="(item,index) in menuList" v-bind:key="index" :title="index+1+'.'+item.title" :value="item.cn_name" :label="item.label" :url="components_root_url+item.url" :border="true" is-link />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      components_root_url: "/pages/test",
      menuList: [
        {
          title: "New page(demo)",
          cn_name: "新页面模板",
          label: "新页面模板的使用模板",
          url: "/newpagedemo/main"
        },
        {
          title: "Font-size&color",
          cn_name: "字体大小和颜色",
          label: "页面常用字体大小和颜色",
          url: "/font_color/main"
        },
        {
          title: "Layout",
          cn_name: "布局",
          label: "Layout 页面分栏布局",
          url: "/componentsDemo/Layout/main"
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
