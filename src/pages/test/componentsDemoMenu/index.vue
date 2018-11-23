<template>
  <div class="container">
    <div class="title">
      基础demo
    </div>
    <div>
      <van-cell-group>
        <van-cell v-for="(item,index) in style_components" v-bind:key="index" :title="index+1+'.'+item.title" :value="item.cn_name" :label="item.label" :url="components_root_url+item.url" :border="true" is-link />
      </van-cell-group>
    </div>

    <div class="title">
      基础组件
    </div>
    <van-cell-group>
      <van-cell v-for="(item,index) in menuList_basic" v-bind:key="index" :title="index+1+'.'+item.title" :value="item.cn_name" :label="item.label" :url="components_root_url+item.url" :border="true" is-link />
    </van-cell-group>

    <div class="title">
      业务组件
    </div>
    <van-cell-group>
      <van-cell v-for="(item,index) in menuList_business" v-bind:key="index" :title="index+1+'.'+item.title" :value="item.cn_name" :label="item.label" :url="components_root_url+item.url" :border="true" is-link />
    </van-cell-group>

    <div class="title">
      VUE-页面功能组件
    </div>
    <van-cell-group>
      <van-cell v-for="(item,index) in menuList_vue" v-bind:key="index" :title="index+1+'.'+item.title" :value="item.cn_name" :label="item.label" :url="components_root_url+item.url" :border="true" is-link />
    </van-cell-group>

  </div>
</template>
<script>
import menuData from "./menu_data";
export default {
  data() {
    return {
      components_root_url: "/pages/test",
      // 一些css基本样式
      style_components: menuData.styledemo,
      // 基础组件
      menuList_basic: menuData.basic,
      // 业务组件
      menuList_business: menuData.business,

      // 页面功能组件_vue组件
      menuList_vue: menuData.vue
    };
  },

  components: {},

  methods: {},

  created() {}
};
</script>
<style>
page {
  background-color: #fbfbfb;
}
.container {
  padding: 15px;
}
</style>
