<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @clickLeft="onClickLeft"
        @clickRight="onClickRight"
      />

      <div class="fsp16 fc-grey ">
        高级用法
      </div>
      <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
      >
        <van-icon
          name="search"
          slot="right"
          custom-class="icon"
        />
      </van-nav-bar>

    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">Slot</div>
      <apiTable :tabledata="table_slot"></apiTable>

      <div class="fsp14 fc-grey">Event</div>
      <apiTable :tabledata="table_event"></apiTable>

      <div class="fsp14 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_class"></apiTable>

    </div>
  </div>
</template>
<script>
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";

export default {
  data() {
    return {
      title: "",
      table_api: apiData.api,
      table_slot: apiData.slot,
      table_event: apiData.event,
      table_class: apiData.custom_class
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onClickLeft() {
      wx.showToast({ title: "点击返回", icon: "none" });
    },

    onClickRight() {
      wx.showToast({ title: "点击按钮", icon: "none" });
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
</style>
