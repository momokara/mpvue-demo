<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-search
        :value="value"
        placeholder="请输入搜索关键词"
        @change="onChange"
        @search="onSearch"
      />

      <div class="fsp16 fc-grey ">
        监听对应事件
      </div>
      <van-search
        :value="value"
        show-action
        placeholder="请输入搜索关键词"
        @change="onChange"
        @search="onSearch"
        @cancel="onCancel"
        @clear="onClear"
      />

      <div class="fsp16 fc-grey ">
        监听对应事件
      </div>
      <van-search
        :value="value"
        placeholder="请输入搜索关键词"
        use-action-slot
        @change="onChange"
        @search="onSearch"
      >
        <view
          slot="action"
          @tap="onSearch"
        >搜索</view>
        <view slot="left-action">左边</view>
      </van-search>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">Event</div>
      <apiTable :tabledata="table_event"></apiTable>

      <div class="fsp14 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_class"></apiTable>

      <div class="fsp14 fc-grey">Slot</div>
      <apiTable :tabledata="table_slot"></apiTable>

    </div>
  </div>
</template>
<script>
import apiTable from '@/components/apiDataTable'
import apiData from './api_data'

export default {
  data () {
    return {
      title: '',
      value: '',
      table_api: apiData.api,
      table_event: apiData.event,
      table_class: apiData.class,
      table_slot: apiData.slot
    }
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onChange (e) {
      this.value = e.mp.detail
    },

    onSearch (event) {
      if (this.value) {
        wx.showToast({
          title: '搜索：' + this.value,
          icon: 'none'
        })
      }
    },

    onCancel () {
      wx.showToast({
        title: '取消',
        icon: 'none'
      })
    },

    onClear () {
      wx.showToast({
        title: '清空',
        icon: 'none'
      })
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
</style>
