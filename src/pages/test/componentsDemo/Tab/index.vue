<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-tabs
        :active="1"
        @change="onChange"
      >
        <van-tab
          v-for="(item, index) in [1,2,3,4]"
          :key="index"
          :title="'标签' + item"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>

      <div class="fsp16 fc-grey ">
        横向滚动
      </div>
      <van-tabs>
        <van-tab
          v-for="(item, index) in [1,2,3,4,5,6,7]"
          :key="index"
          :title="'标签' + item"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>

      <div class="fsp16 fc-grey ">
        禁用标签
      </div>
      <van-tabs @disabled="onClickDisabled">
        <van-tab
          v-for="(item, index) in [1,2,3,4]"
          :key="index"
          :title="'标签' + item"
          :disabled="index === 1"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>

      <div class="fsp16 fc-grey ">
        样式风格
      </div>
      <van-tabs type="card" 
                activeColor="blue">
        <van-tab
          v-for="(item, index) in [1,2,3]"
          :key="index"
          :title="'标签' + item"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>

      <div class="fsp16 fc-grey ">
        点击事件
      </div>
      <van-tabs @tabclick="onClick">
        <van-tab
          v-for="(item, index) in [1,2,3,4]"
          :key="index"
          :title="'标签' + item"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>

      <div class="fsp16 fc-grey ">
        粘性布局
      </div>
      <van-tabs
        sticky
        :scroll-top="scrollTop"
      >
        <van-tab
          v-for="(item, index) in [1,2,3,4]"
          :key="index"
          :title="'标签' + item"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>

      <div class="fsp16 fc-grey ">
        切换动画
      </div>
      <van-tabs animated>
        <van-tab
          v-for="(item, index) in [1,2,3,4]"
          :key="index"
          :title="'标签' + item"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>

      <div class="fsp16 fc-grey ">
        滑动切换
      </div>
      <van-tabs swipeable>
        <van-tab
          v-for="(item, index) in [1,2,3,4]"
          :key="index"
          :title="'标签' + item"
        >
          <view class="content">
            {{ '内容' + item }}
          </view>
        </van-tab>
      </van-tabs>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">Tabs API</div>
      <apiTable :tabledata="table_api_tabs"></apiTable>

      <div class="fsp14 fc-grey">Tab API</div>
      <apiTable :tabledata="table_api_tab"></apiTable>

      <div class="fsp14 fc-grey">Tab Slot</div>
      <apiTable :tabledata="table_slot"></apiTable>

      <div class="fsp14 fc-grey">Tabs Event</div>
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
      tabs: [1, 2, 3, 4],
      tabsMore: [1, 2, 3, 4, 5, 6, 7, 8],
      scrollTop: 0,
      table_api_tabs: apiData.api_tabs,
      table_api_tab: apiData.api_tab,
      table_slot: apiData.slot,
      table_event: apiData.event,
      table_class: apiData.custom_class
    }
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onClickDisabled (e) {
      console.log(e)
      wx.showToast({
        title: `标签 ${e.mp.detail.index + 1} 已被禁用`,
        icon: 'none'
      })
    },

    onChange (e) {
      wx.showToast({
        title: `切换到标签 ${e.mp.detail.index + 1}`,
        icon: 'none'
      })
    },

    onClick (e) {
      console.log(e)
      wx.showToast({
        title: `点击标签 ${e.mp.detail.index + 1}`,
        icon: 'none'
      })
    },

    onPageScroll (e) {
      this.setData({
        scrollTop: e.scrollTop
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
.fsp16.fc-grey {
  margin-top: 20px;
}
.content {
  padding: 20px;
  background-color: #ddd;
}
</style>
