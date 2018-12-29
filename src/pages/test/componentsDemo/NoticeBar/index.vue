<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-notice-bar
        :text="text"
        left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
      />

      <div class="fsp16 fc-grey ">
        禁用滚动
      </div>
      <van-notice-bar
        :scrollable="false"
        :text="text"
      />

      <div class="fsp16 fc-grey ">
        通告栏模式
      </div>
      <van-notice-bar
        mode="closeable"
        :text="text"
        custom-class="demo-margin-bottom"
      />
      <van-notice-bar
        mode="link"
        :text="text"
      />
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">Rate API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">Rate Event</div>
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
      text:
        "我是一个负责喊666 的通知长条形性息 666666666666666666666666666666666。"
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {},

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
