<template>
  <div class="container">
    <div class="title ">
      Button 按钮
    </div>
    <div class="demo">
      <div class="fsp16 fc-grey ">
        按钮类型
      </div>
      <div>
        <van-button type="primary" class="demo-margin-right">主要按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
      </div>
      <van-button class="demo-margin-right">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>

      <div class="fsp16 fc-grey ">
        朴素按钮
      </div>
      <van-button type="primary" plain class="demo-margin-right">朴素按钮</van-button>
      <van-button type="danger" plain>朴素按钮</van-button>

      <div class="fsp16 fc-grey ">
        禁用状态
      </div>
      <van-button type="primary" disabled class="demo-margin-right">禁用状态</van-button>
      <van-button type="danger" disabled>禁用状态</van-button>

      <div class="fsp16 fc-grey ">
        加载状态
      </div>
      <van-button loading type="primary" class="demo-margin-right" loading-class="loading" />
      <van-button loading type="danger" loading-class="loading" />

      <div class="fsp16 fc-grey ">
        按钮形状
      </div>
      <van-button type="primary" square class="demo-margin-right">方形按钮</van-button>
      <van-button type="danger" round>圆形按钮</van-button>

      <div class="fsp16 fc-grey ">
        按钮尺寸
      </div>
      <van-button size="large" block custom-class="demo-margin-bottom">大号按钮</van-button>
      <van-button class="demo-margin-right">普通按钮</van-button>
      <van-button size="small" class="demo-margin-right">小型按钮</van-button>
      <van-button size="mini">迷你按钮</van-button>

    </div>
    <!-- info -->
    <div class="info">
      <div class="title fc-semi">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_custom_class"></apiTable>

      <div class="fsp14 fc-grey">Event</div>
      <apiTable :tabledata="table_event"></apiTable>

    </div>
  </div>
</template>
<script>
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";
export default {
  data() {
    return {
      table_api: apiData.api,
      table_custom_class: apiData.custom_class,
      table_event: apiData.func
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {},
  // VUE 钩子 常用

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {},
  // 页面节点挂载
  mounted() {}
};
</script>


<style lang="scss">
.demo {
  .van-button {
    margin: 5px;
  }
}
</style>
