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
      // 基础组件
      menuList_basic: [
        {
          title: "Layout",
          cn_name: "布局",
          label: "Layout 页面分栏布局",
          url: "/componentsDemo/Layout/main"
        },
        {
          title: "Button",
          cn_name: "按钮",
          label: "Button 按钮",
          url: "/componentsDemo/Button/main"
        },
        {
          title: "Cell",
          cn_name: "单元格",
          label: "Cell 单元格",
          url: "/componentsDemo/Cell/main"
        },
        {
          title: "Icon",
          cn_name: "图标",
          label: "Icon 图标",
          url: "/componentsDemo/Icon/main"
        },
        {
          title: "Popup",
          cn_name: "弹出层",
          label: "Popup 弹出层",
          url: "/componentsDemo/Popup/main"
        },
        {
          title: "Score-Star",
          cn_name: "评分星星",
          label: "评分用到的⭐⭐",
          url: "/componentsDemo/scoreStar/main"
        },
        {
          title: "Transition",
          cn_name: "动画",
          label: "Transition 动画",
          url: "/componentsDemo/Transition/main"
        }
      ],
      // 业务组件
      menuList_business: [
        {
          title: "GoodsAction",
          cn_name: "商品导航",
          label: "GoodsAction 商品导航",
          url: "/componentsDemo/GoodsAction/main"
        },
        {
          title: "Lottery-Wheel",
          cn_name: "转盘抽奖",
          label: "Lottery-Wheel 转盘抽奖",
          url: "/componentsDemo/Lottery-Wheel/main"
        },
        {
          title: "Lottery-Table",
          cn_name: "九宫格抽奖",
          label: "Lottery-Table 九宫格抽奖",
          url: "/componentsDemo/Lottery-Table/main"
        }
      ],

      // 页面功能组件_vue组件
      menuList_vue: [
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
  background-color: #fbfbfb;
}
.container {
  padding: 15px;
}
</style>
