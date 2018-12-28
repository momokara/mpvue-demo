<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        :thumb="imageURL"
      />

      <div class="fsp16 fc-grey ">
        高级用法
      </div>
      <van-card
        custom-class="mt20"
        num="2"
        tag="标签"
        price="2.00"
        origin-price="3.00"
        desc="描述信息"
        title="商品标题"
        :thumb="imageURL"
      >
        <view slot="header">
          <div class="header">heaer</div>
        </view>
        <view slot="tags">
          <van-tag
            plain
            type="danger"
          >满减</van-tag>
        </view>
        <view slot="footer">
          <van-button
            size="mini"
            custom-class="button"
          >按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </view>
        <view slot="right-slot">
          <van-button size="mini">right-slot</van-button>
        </view>
      </van-card>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_custom_class"></apiTable>

      <div class="fsp14 fc-grey">Slot</div>
      <apiTable :tabledata="table_slot"></apiTable>

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
      imageURL:
        "//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg",
      table_api: apiData.api,
      table_custom_class: apiData.custom_class,
      table_event: apiData.event,
      table_slot: apiData.slot
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {},
  onLoad(option) {
    if (option) {
      this.title = option.label;
    }
  }
};
</script>


<style lang="scss">
.header {
  background-color: #ddd;
  color: #fff;
  padding: 5px;
}
.mt20 {
  margin-top: 20px;
}
</style>
