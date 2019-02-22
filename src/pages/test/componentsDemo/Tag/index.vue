<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-tag class="demo-tag">标签</van-tag>
      <van-tag
        class="demo-tag"
        type="danger"
      >标签</van-tag>
      <van-tag
        class="demo-tag"
        type="primary"
      >标签</van-tag>
      <van-tag type="success">标签</van-tag>

      <div class="fsp16 fc-grey ">
        空心样式
      </div>
      <van-tag
        class="demo-tag"
        plain
      >标签</van-tag>
      <van-tag
        class="demo-tag"
        plain
        type="danger"
      >标签</van-tag>
      <van-tag
        class="demo-tag"
        plain
        type="primary"
      >标签</van-tag>
      <van-tag
        plain
        type="success"
      >标签</van-tag>

      <div class="fsp16 fc-grey ">
        圆角样式
      </div>
      <van-tag
        class="demo-tag"
        round
      >标签</van-tag>
      <van-tag
        class="demo-tag"
        round
        type="danger"
      >标签</van-tag>
      <van-tag
        class="demo-tag"
        round
        type="primary"
      >标签</van-tag>
      <van-tag
        round
        type="success"
      >标签</van-tag>

      <div class="fsp16 fc-grey ">
        标记样式
      </div>
      <van-tag
        class="demo-tag"
        mark
      >标签</van-tag>
      <van-tag
        class="demo-tag"
        mark
        type="danger"
      >标签</van-tag>
      <van-tag
        class="demo-tag"
        mark
        type="primary"
      >标签</van-tag>
      <van-tag
        mark
        type="success"
      >标签</van-tag>

      <div class="fsp16 fc-grey ">
        自定义颜色
      </div>
      <van-tag
        class="demo-tag"
        color="#f2826a"
      >标签</van-tag>
      <van-tag
        class="demo-tag"
        color="#f2826a"
        plain
      >标签</van-tag>
      <van-tag
        class="demo-tag"
        color="#7232dd"
      >标签</van-tag>
      <van-tag
        class="demo-tag"
        color="#7232dd"
        plain
      >标签</van-tag>
      <van-tag
        color="#ffe1e1"
        text-color="#ad0000"
      >标签</van-tag>

      <div class="fsp16 fc-grey ">
        标签大小
      </div>
      <van-tag
        class="demo-tag"
        type="danger"
      >标签</van-tag>
      <van-tag
        class="demo-tag"
        type="danger"
        size="medium"
      >标签</van-tag>
      <van-tag
        type="danger"
        size="large"
      >标签</van-tag>

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
import apiTable from "@/components/apiDataTable";
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
.demo-tag {
  margin: 10px;
}
</style>
