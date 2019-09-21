<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-loading custom-class="loading" />
      <van-loading
        custom-class="loading shadow"
        color="#fff"
      />
      <div class="fsp16 fc-grey ">

      </div>
      <van-loading
        custom-class="loading"
        type="spinner"
      />
      <van-loading
        custom-class="loading shadow"
        type="spinner"
        color="#fff"
      />
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_class"></apiTable>

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
      table_api: apiData.api,
      table_class: apiData.custom_class
    }
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {},

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  onLoad (option) {
    if (option) {
      this.title = option.label
    }
  }
}
</script>


<style lang="scss">
.loading {
  margin-right: 20px;
}

.shadow {
  padding: 10px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
