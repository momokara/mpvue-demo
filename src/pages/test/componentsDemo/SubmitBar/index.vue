<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <div class="submit-box">
        <van-submit-bar
          :price="3050"
          button-text="提交订单"
          @submit="onClickButton"
          custom-class="van-submit-bar"
        />
      </div>

      <div class="fsp16 fc-grey ">
        禁用状态
      </div>
      <div class="submit-box">
        <van-submit-bar
          disabled
          :price="3050"
          button-text="提交订单"
          tip="您的收货地址不支持同城送, 我们已为您推荐快递"
          @submit="onClickButton"
          custom-class="van-submit-bar"
        />
      </div>

      <div class="fsp16 fc-grey ">
        加载状态
      </div>
      <div class="submit-box">
        <van-submit-bar
          loading
          :price="3050"
          button-text="提交订单"
          @submit="onClickButton"
          custom-class="van-submit-bar"
        />
      </div>

      <div class="fsp16 fc-grey ">
        高级用法
      </div>
      <div class="submit-box">
        <van-submit-bar
          :price="3050"
          button-text="提交订单"
          @submit="onClickButton"
          custom-class="van-submit-bar"
          :tip="true"
        >
          <van-tag
            type="primary"
            custom-class="van-tag"
          >标签</van-tag>
          <view slot="tip">
            您的收货地址不支持同城送
            <text
              class="edit-address"
              @click="onClickLink"
            >修改地址</text>
          </view>
        </van-submit-bar>
      </div>
      <van-toast id="van-toast" />
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_custom_class"></apiTable>

      <div class="fsp14 fc-grey">Cell Event</div>
      <apiTable :tabledata="table_event"></apiTable>

      <div class="fsp14 fc-grey">Slot</div>
      <apiTable :tabledata="table_slot"></apiTable>

    </div>
  </div>
</template>
<script>
import apiTable from '@/components/apiDataTable'
import apiData from './api_data'
import Toast from '@/../static/components/toast/toast'
export default {
  data () {
    return {
      title: '',
      table_api: apiData.api,
      table_custom_class: apiData.custom_class,
      table_event: apiData.event,
      table_slot: apiData.slot
    }
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onClickButton () {
      Toast('点击按钮')
    },
    onClickLink () {
      Toast('修改地址')
    }
  },
  onLoad (option) {
    if (option) {
      this.title = option.label
    }
  }
}
</script>


<style lang="scss">
.submit-box {
  .van-submit-bar {
    position: relative;
    box-shadow: 0 0 1px #ddd;
  }
  .van-tag {
    margin-left: 15px;
  }
}
</style>
