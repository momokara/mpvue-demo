<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-panel
        title="标题"
        desc="描述信息"
        status="状态"
      >
        <view class="content">内容</view>
      </van-panel>

      <div class="fsp16 fc-grey ">
        高级用法
      </div>
      <van-panel
        title="标题"
        desc="描述信息"
        status="状态"
        use-footer-slot
      >
        <view class="content">内容</view>
        <view
          slot="footer"
          class="footer"
        >
          <van-button
            size="small"
            class="demo-margin-right"
          >按钮</van-button>
          <van-button
            size="small"
            type="danger"
          >按钮</van-button>
        </view>
      </van-panel>

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
      title: ""
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
.content {
  padding: 20px;
  font-size: 16px;
}

.footer {
  text-align: right;
}
</style>
