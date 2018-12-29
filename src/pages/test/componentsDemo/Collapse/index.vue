<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-collapse
        :value="active1"
        data-key="active1"
        @change="onChange"
      >
        <van-collapse-item :title="title1">{{ content1 }}</van-collapse-item>
        <van-collapse-item :title="title2">{{ content2 }}</van-collapse-item>
        <van-collapse-item
          :title="title3"
          disabled
        >{{ content3 }}</van-collapse-item>
      </van-collapse>

      <div class="fsp16 fc-grey ">
        手风琴
      </div>
      <van-collapse
        :value="active2"
        data-key="active2"
        accordion
        @change="onChange"
      >
        <van-collapse-item :title="title1">{{ content1 }}</van-collapse-item>
        <van-collapse-item :title="title2">{{ content2 }}</van-collapse-item>
        <van-collapse-item :title="title3">{{ content3 }}</van-collapse-item>
      </van-collapse>

      <div class="fsp16 fc-grey ">
        自定义标题内容
      </div>
      <van-collapse
        :value="active3"
        data-key="active3"
        @change="onChange"
      >
        <van-collapse-item>
          <view slot="title">
            {{ title1 }}
            <van-icon
              name="question-o"
              custom-class="van-icon-question"
            />
          </view>
          {{ content1 }}
        </van-collapse-item>
        <van-collapse-item
          :title="title2"
          value="内容"
          icon="shop-o"
        >
          {{ content2 }}
        </van-collapse-item>
      </van-collapse>
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
      active1: [0],
      active2: 0,
      active3: [],
      title1: "有赞微商城",
      title2: "有赞零售",
      title3: "有赞美业",
      content1: "提供多样店铺模板，快速搭建网上商城",
      content2:
        "网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失",
      content3: "线上拓客，随时预约，贴心顺手的开单收银"
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onChange(e) {
      const { key } = e.mp.currentTarget.dataset;
      this[key] = e.mp.detail;
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
