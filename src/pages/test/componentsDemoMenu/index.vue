<template>
  <div class="container">
    <div class="title">
      基础demo
    </div>
    <div>
      <van-cell-group>
        <van-cell v-for="(item,index) in menuList0" v-bind:key="index" :title="index+1+'.'+item.title" :value="item.cn_name" :label="item.label" :url="components_root_url+item.url" :border="true" is-link />
      </van-cell-group>
    </div>
    <div class="title">
      基础组件
    </div>
    <div>
      <van-cell-group>
        <van-cell v-for="(item,index) in menuList1" v-bind:key="index" :title="index+1+'.'+item.title" :value="item.cn_name" :label="item.label" :url="components_root_url+item.url" :border="true" is-link />
      </van-cell-group>
    </div>
    <div class="title">
      VUE-页面功能组件
    </div>
    <div>
      <van-cell-group>
        <van-cell v-for="(item,index) in menuList2" v-bind:key="index" :title="index+1+'.'+item.title" :value="item.cn_name" :label="item.label" :url="components_root_url+item.url" :border="true" is-link />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      components_root_url: "/pages/test",
      // 一些css基本样式
      menuList0: [
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
        }
      ],
      // 页面功能组件
      menuList1: [
        {
          title: "Layout",
          cn_name: "布局",
          label: "Layout 页面分栏布局",
          url: "/componentsDemo/Layout/main"
        },
        {
          title: "Lottery-Wheel",
          cn_name: "转盘抽奖",
          label: "Lottery-Wheel 转盘抽奖",
          url: "/componentsDemo/Lottery-Wheel/main"
        }
      ],
      // 页面功能组件_vue组件
      menuList2: [
        {
          title: "upLoad_Images",
          cn_name: "图片上传",
          label: "图片上传组件-vue 组件",
          url: "/componentsDemo_vue/upLoad_imgs/main"
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
