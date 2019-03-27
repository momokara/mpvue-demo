<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-slider
        value="50"
        custom-class="slider"
        @change="onChange"
      />

      <div class="fsp16 fc-grey ">
        指定选择范围
      </div>
      <van-slider
        custom-class="slider"
        value="50"
        min="10"
        max="90"
        @change="onChange"
      />

      <div class="fsp16 fc-grey ">
        禁用
      </div>
      <van-slider
        custom-class="slider"
        value="50"
        disabled
      />

      <div class="fsp16 fc-grey ">
        指定步长
      </div>
      <van-slider
        custom-class="slider"
        value="50"
        step="10"
        @change="onChange"
      />

      <div class="fsp16 fc-grey ">
        自定义样式
      </div>
      <van-slider
        value="50"
        custom-class="slider"
        bar-height="4px"
        active-color="#f44"
      />

      <div class="fsp16 fc-grey ">
        自定义按钮
      </div>
      <van-slider
        :value="currentValue"
        custom-class="slider"
        use-button-slot
        active-color="#f44"
        @drag="onDrag"
      >
        <view
          class="custom-button"
          slot="button"
        >
          {{currentValue }}
        </view>
      </van-slider>

    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">Event</div>
      <apiTable :tabledata="table_event"></apiTable>

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
      currentValue: 50,
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
      wx.showToast({
        icon: 'none',
        title: `当前值：${event.mp.detail}`
      })
    },

    onDrag (event) {
      this.currentValue = event.mp.detail.value
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
