<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-swipe-cell
        :right-width="65"
        :left-width="65"
      >
        <view
          slot="left"
          class="van-swipe-cell__left"
        >选择</view>
        <van-cell-group>
          <van-cell
            title="单元格"
            value="内容"
          />
        </van-cell-group>
        <view
          slot="right"
          class="van-swipe-cell__right"
        >删除</view>
      </van-swipe-cell>

      <div class="fsp16 fc-grey ">
        异步关闭
      </div>
      <van-swipe-cell
        id="swipe-cell"
        :right-width="65"
        :left-width="65"
        async-close
        bind:close="onClose"
      >
        <view
          slot="left"
          class="van-swipe-cell__left"
        >选择</view>
        <van-cell-group>
          <van-cell
            title="单元格"
            value="内容"
          />
        </van-cell-group>
        <view
          slot="right"
          class="van-swipe-cell__right"
        >删除</view>
      </van-swipe-cell>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">Slot</div>
      <apiTable :tabledata="table_slot"></apiTable>

      <div class="fsp14 fc-grey">Event</div>
      <apiTable :tabledata="table_event"></apiTable>

      <div class="fsp14 fc-grey">close 参数</div>
      <apiTable :tabledata="table_close"></apiTable>

      <div class="fsp14 fc-grey">方法</div>
      <apiTable :tabledata="table_func"></apiTable>

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
      table_api: apiData.api,
      table_slot: apiData.slot,
      table_event: apiData.event,
      table_close: apiData.close,
      table_func: apiData.func
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onClose(event) {
      const { position, instance } = event.detail;
      switch (position) {
        case "left":
        case "cell":
          instance.close();
          break;
        case "right":
          Dialog.confirm({
            message: "确定删除吗？"
          }).then(() => {
            instance.close();
          });
          break;
      }
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
.demo-swipe-cell {
  user-select: none;
}

.van-swipe-cell__left,
.van-swipe-cell__right {
  display: inline-block;
  width: 65px;
  height: 44px;
  font-size: 15px;
  line-height: 44px;
  color: #fff;
  text-align: center;
  background-color: #f44;
}
</style>
