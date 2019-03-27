<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-button @click="showNotify">显示消息通知</van-button>

      <div class="fsp16 fc-grey ">
        显示自定义消息通知
      </div>
      <van-button @click="showNotify2">显示自定义消息通知</van-button>

    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>
    </div>
    
    <van-notify id="van-notify" />
    <van-notify id="custom-selector" />
  </div>
</template>
<script>
import apiTable from '@/components/apiDataTable'
import apiData from './api_data'
import Notify from '@/../static/components/notify/notify'

export default {
  data () {
    return {
      title: '',
      table_api: apiData.api
    }
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    showNotify () {
      Notify('通知内容')
    },

    showNotify2 () {
      Notify({
        duration: 1000,
        text: '通知内容',
        selector: '#custom-selector',
        backgroundColor: '#1989fa'
      })
    }
  },

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  onLoad (option) {
    if (option) {
      this.title = option.label
    }
  }
}
</script>


<style lang="scss">
</style>
