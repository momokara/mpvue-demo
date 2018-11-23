<template>
  <div class="container">
    <div class="title fz-17pt">
      Icon(图标)
    </div>
    <div class="demo">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <div class="demo-cell" v-for="(item, index) in iconlist" :key="index">
        <van-icon :custom-class="'icon-row'" :name="item" :size="'35px'" :color="'#888'" />
        <span class="icon_name">{{item}}</span>
      </div>

      <div class="fsp16 fc-grey ">
        使用自定义图片
      </div>
      <div class="demo-cell">
        <van-icon size="40px">
          <image src="https://cdn.huibaoming.com/haivit/public/image/20181026120910_500/活动订单.png" />
        </van-icon>
      </div>

    </div>
    <!-- info -->
    <div class="info">
      <div class="title fc-semi">API 说明</div>
      <div class="title fc-grey">API</div>
      <apiTable :tabledata="table_Icon_api"></apiTable>

      <div class="title fc-grey">Slot</div>
      <apiTable :tabledata="slot_data"></apiTable>

      <div class="title fc-grey">外部样式类</div>
      <apiTable :tabledata="custom_class_data"></apiTable>

      <div class="title fc-grey">Event</div>
      <apiTable :tabledata="table_func_data"></apiTable>

    </div>
  </div>
</template>
<script>
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";

export default {
  data() {
    return {
      iconlist: apiData.icon_name_list,
      table_Icon_api: apiData.api,
      table_func_data: apiData.event,
      slot_data: apiData.slot,
      custom_class_data: apiData.custom_class
    };
  },
  // 使用的 vue 组件
  components: { apiTable },
  // 页面中的方法
  methods: {},
  // VUE 钩子 常用

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {},

  // 用户点击右上角分享
  onShareAppMessage() {
    console.log("demopage-onShareAppMessage", this.msg);
  }
};
</script>


<style lang="scss">
.demo {
  display: flex;
  flex-wrap: wrap;
  .fsp16 {
    display: block;
    width: 100%;
  }
  .demo-cell {
    .icon-row {
      display: block;
    }
    .icon_name {
      font-size: 12px;
    }
    text-align: center;
    display: inline-block;
    margin: 10px 0;
    width: 20%;
    position: relative;
  }
}
</style>
