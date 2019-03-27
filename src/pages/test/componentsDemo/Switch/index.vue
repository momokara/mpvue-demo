<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-switch
        :checked="checked"
        @change="onChange"
      />

      <div class="fsp16 fc-grey ">
        禁用状态
      </div>
      <van-switch
        :checked="checked"
        disabled
        @change="onChange"
      />

      <div class="fsp16 fc-grey ">
        加载状态
      </div>
      <van-switch
        :checked="checked"
        loading
        @change="onChange"
      />

      <div class="fsp16 fc-grey ">
        自定义大小
      </div>
      <van-switch
        :checked="checked"
        size="24px"
        @change="onChange"
      />

      <div class="fsp16 fc-grey ">
        自定义颜色
      </div>
      <van-switch
        :checked="checked"
        active-color="#4b0"
        inactive-color="#f44"
        @change="onChange"
      />

      <div class="fsp16 fc-grey ">
        异步控制
      </div>
      <van-switch
        :checked="checked2"
        size="36px"
        @change="onChange2"
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

    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
import apiTable from '@/components/apiDataTable'
import apiData from './api_data'
import Dialog from '@/../static/components/dialog/dialog'

export default {
  data () {
    return {
      title: '',
      checked: true,
      checked2: true,
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
    onChange (e) {
      this.checked = e.mp.detail
    },

    onChange2 (e) {
      Dialog.confirm({
        title: '提示',
        message: '是否切换开关？'
      }).then(res => {
        this.checked2 = e.mp.detail
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
