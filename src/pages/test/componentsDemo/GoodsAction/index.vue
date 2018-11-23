<template>
  <div class="container">
    <div class="title fz-17pt">
      GoodsAction(商品导航)
    </div>
    <!-- demo -->

    <div class="goods-action-box">
      <div class="fsp16 fc-grey ">基本用法</div>
      <van-goods-action>
        <van-goods-action-icon text="客服1" @click="onClickIcon">
          <image src="https://cdn.huibaoming.com/haivit/public/image/20181026120910_500/活动订单.png" />
        </van-goods-action-icon>
        <van-goods-action-icon icon="cart" text="购物车" @click="onClickIcon" />
        <van-goods-action-button text="加入购物车" type="warning" />
        <van-goods-action-button text="立即购买" />
        <van-goods-action-button text="立即购买2" type="primary" />
      </van-goods-action>
    </div>
    <div class="goods-action-box">
      <div class="fsp16 fc-grey ">加上info提示</div>
      <van-goods-action>
        <van-goods-action-icon text="客服1" @click="onClickIcon">
          <image src="https://cdn.huibaoming.com/haivit/public/image/20181026120910_500/活动订单.png" />
        </van-goods-action-icon>
        <van-goods-action-icon text="客服2" @click="onClickIcon" info="s1">
          <image src="https://cdn.huibaoming.com/haivit/public/image/20181026120910_500/活动订单.png" />
        </van-goods-action-icon>
        <van-goods-action-icon icon="cart" text="购物车" @click="onClickIcon" info="66" />
        <van-goods-action-button text="加入购物车" type="warning" />
        <van-goods-action-button text="立即购买" />
      </van-goods-action>
    </div>
    <!-- info -->
    <div class="info">
      <div class="title fc-semi">API 说明</div>
      <div class="fsp14 fc-grey">GoodsActionIcon API</div>
      <apiTable :tabledata="table_api_icon"></apiTable>

      <div class="fsp14 fc-grey">GoodsActionIcon Slot</div>
      <apiTable :tabledata="table_slot"></apiTable>

      <div class="fsp14 fc-grey">GoodsActionButton API</div>
      <apiTable :tabledata="table_api_button"></apiTable>

      <div class="fsp14 fc-grey">Event</div>
      <apiTable :tabledata="table_event"></apiTable>

    </div>
  </div>
</template>
<script>
import Toast from "@/../static/components/toast/toast";
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";
export default {
  data() {
    return {
      table_api_icon: apiData.api_icon,
      table_api_button: apiData.api_button,
      table_event: apiData.event,
      table_slot: apiData.slot
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },

    onClickButton() {
      Toast("点击按钮");
    }
  }
};
</script>


<style lang="scss">
.goods-action-box {
  height: 110px;
  position: relative;
  .fsp16 {
    padding: 15px 15px 0 15px;
  }
  .van-goods-action {
    position: absolute;
  }
}
</style>
