<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-progress
        custom-class="progress"
        percentage="50"
      />

      <div class="fsp16 fc-grey ">
        置灰
      </div>
      <van-progress
        custom-class="progress"
        inactive
        percentage="50"
      />

      <div class="fsp16 fc-grey ">
        样式定制
      </div>
      <van-progress
        custom-class="progress"
        pivot-text="橙色"
        color="#f2826a"
        percentage="25"
      />
      <van-progress
        custom-class="progress"
        pivot-text="红色"
        color="#f44"
        percentage="50"
      />
      <van-progress
        custom-class="progress"
        percentage="75"
        pivot-text="紫色"
        pivot-color="#7232dd"
        color="linear-gradient(to right, #be99ff, #7232dd)"
      />
      <van-progress
        custom-class="progress"
        percentage="75"
        :show-pivot="false"
        pivot-text="金色变色"
        pivot-color="#333"
        color="linear-gradient(270deg,rgba(255,248,185,1) 0%,rgba(249,212,35,1) 100%)" 
      />

      <div class="fsp16 fc-grey ">
        环形
      </div>
      <van-progress-cycle
        custom-class="progress"
        :percentage="cycpercent"
      ></van-progress-cycle>
      <van-slider
        :value="cycpercent"
        min="0"
        max="100"
        @drag="sliderChange"
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
  </div>
</template>
<script>
import apiTable from '@/components/apiDataTable'
// eslint-disable-next-line no-unused-vars
import apiData from './api_data'

export default {
  data () {
    return {
      title: '',
      cycpercent: 10
    }
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    sliderChange (e) {
      this.cycpercent = e.mp.detail.value
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
.progress {
  margin: 5px 15px 20px;
}
</style>
