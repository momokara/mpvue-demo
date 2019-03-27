<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-badge-group
        @change="onChange"
        custom-class="group"
      >
        <van-badge title="标签名称" />
        <van-badge
          title="标签名称"
          info="8"
        />
        <van-badge
          title="标签名称"
          info="99"
        />
        <van-badge
          title="标签名称"
          info="99+"
        />
      </van-badge-group>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">BadgeGroup API</div>
      <apiTable :tabledata="table_api_BadgeGroup"></apiTable>

      <div class="fsp14 fc-grey">Badge API</div>
      <apiTable :tabledata="table_api_Badge"></apiTable>

      <div class="fsp14 fc-grey">BadgeGroup 外部样式类</div>
      <apiTable :tabledata="table_class"></apiTable>

      <div class="fsp14 fc-grey">Badge 外部样式类</div>
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
      table_api_BadgeGroup: apiData.api_BadgeGroup,
      table_api_Badge: apiData.api_Badge,
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
      wx.showToast({
        icon: 'none',
        title: `切换至第${e.mp.detail}项`
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
