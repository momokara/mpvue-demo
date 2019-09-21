<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-stepper :value="value1" />

      <div class="fsp16 fc-grey ">
        禁用状态
      </div>
      <van-stepper
        :value="value1"
        disabled
      />

      <div class="fsp16 fc-grey ">
        异步变更
      </div>
      <van-stepper
        :value="5"
        integer
        async-change
        @change="onChange"
      />
      <div class="fsp16 fc-grey ">
        高级用法
      </div>
      <van-stepper
        :value="value2"
        integer
        min="5"
        max="40"
        step="2"
      />

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

    <van-toast id="van-toast" />
  </div>
</template>
<script>
import Toast from '@/../static/components/toast/toast'
import apiTable from '@/components/apiDataTable'
import apiData from './api_data'

export default {
  data () {
    return {
      title: '',
      table_api: apiData.api,
      table_event: apiData.event,
      table_class: apiData.class
    }
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onChange (event) {
      Toast(`change: ${event.mp.detail}`)
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
