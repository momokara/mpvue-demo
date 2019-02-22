<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <div class="demo-relative-box">
        <van-tabbar
          :active="active"
          custom-class="tabbar"
          :safe-area-inset-bottom="false"
          @change="onChange"
        >
          <van-tabbar-item icon="home-o">标签</van-tabbar-item>
          <van-tabbar-item
            icon="search"
            dot
          >标签</van-tabbar-item>
          <van-tabbar-item
            icon="friends-o"
            info="5"
          >标签</van-tabbar-item>
          <van-tabbar-item
            icon="setting-o"
            info="20"
          >标签</van-tabbar-item>
        </van-tabbar>
      </div>

      <div class="fsp16 fc-grey ">
        自定义图标
      </div>
      <div class="demo-relative-box">
        <van-tabbar
          :active="active2"
          custom-class="tabbar"
          :safe-area-inset-bottom="false"
          @change="onChange"
        >
          <van-tabbar-item info="3">
            <image
              slot="icon"
              :src="icon.normal"
              mode="aspectFit"
            />
            <image
              slot="icon-active"
              :src="icon.active"
              mode="aspectFit"
            />
            自定义
          </van-tabbar-item>
          <van-tabbar-item icon="search">标签</van-tabbar-item>
          <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
      </div>

      <div class="fsp16 fc-grey ">
        自定义颜色
      </div>
      <div class="demo-relative-box">
        <van-tabbar
          :active="active"
          custom-class="tabbar"
          :safe-area-inset-bottom="false"
          active-color="#4b0"
          @change="onChange"
        >
          <van-tabbar-item icon="home-o">标签</van-tabbar-item>
          <van-tabbar-item icon="search">标签</van-tabbar-item>
          <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
          <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
      </div>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">Tabbar API</div>
      <apiTable :tabledata="table_api_tabbar"></apiTable>

      <div class="fsp14 fc-grey">TabbarItem API</div>
      <apiTable :tabledata="table_api_item"></apiTable>

      <div class="fsp14 fc-grey">Tabbar Event</div>
      <apiTable :tabledata="table_event"></apiTable>

      <div class="fsp14 fc-grey">TabbarItem Slot</div>
      <apiTable :tabledata="table_slot"></apiTable>

      <div class="fsp14 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_class"></apiTable>

    </div>
  </div>
</template>
<script>
import apiTable from "@/components/apiDataTable";
import apiData from "./api_data";

export default {
  data() {
    return {
      title: "",
      active: 0,
      active2: 0,
      icon: {
        normal:
          "https://cdn.jiapeiyun.cn/haivit/public/image/20181017163403_639/最新资讯@3x.png",
        active:
          "https://cdn.jiapeiyun.cn/haivit/public/image/20181017163420_937/名师教练@3x.png"
      },
      table_api_tabbar: apiData.api_tabbar,
      table_api_item: apiData.api_item,
      table_event: apiData.event,
      table_slot: apiData.slot,
      table_class: apiData.custom_class
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onChange(event) {
      console.log(event.mp.detail);
    }
  },

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  onLoad(option) {
    if (option) {
      this.title = option.label;
    }
  }
};
</script>


<style lang="scss">
.demo-relative-box {
  .tabbar {
    position: relative;
  }
}
</style>
