<template>
  <div class="container">
    <div class="title fz-17pt">
      {{title}}
    </div>

    <div class="demo">

      <van-tabs
        @change="onChange"
        class="tabs"
      >
        <div class="fsp16 fc-grey ">
          基础用法
        </div>
        <van-tab
          v-for="(item, index) in iconTable"
          :key="index"
          :title="item.title"
        >
          <view class="content">
            <div
              class="demo-cell"
              v-for="(item_icon, index_icon) in iconlist[item.name]"
              :key="index_icon"
            >
              <van-icon
                :custom-class="'icon-row'"
                :name="item_icon"
                :size="'35px'"
                :color="'#3AC569'"
              />
              <div class="icon_name fs12">{{item_icon}}</div>
            </div>
          </view>
        </van-tab>
      </van-tabs>

      <div class="fsp16 fc-grey ">
        使用自定义图片
      </div>
      <div class="demo-cell ta-c">
        <van-icon
          :custom-class="'icon-row'"
          name="https://cdn.huibaoming.com/haivit/public/image/20181026120910_500/活动订单.png"
          size="35px"
        />
        <div class="icon_name fs12">自定义</div>
      </div>

    </div>
    <!-- info -->
    <div class="info">
      <div class="title fc-semi">API 说明</div>
      <div class="fsp16 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp16 fc-grey">Slot</div>
      <apiTable :tabledata="table_slot"></apiTable>

      <div class="fsp16 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_custom_class"></apiTable>

      <div class="fsp16 fc-grey">Event</div>
      <apiTable :tabledata="table_event"></apiTable>

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
      iconTable: [
        { title: '基础图标', name: 'basic' },
        { title: '线框风格', name: 'full' },
        { title: '实线风格', name: 'filled' }
      ],
      iconlist: apiData.icon_name_list,
      table_api: apiData.api,
      table_event: apiData.event,
      table_slot: apiData.slot,
      table_custom_class: apiData.custom_class
    }
  },
  // 使用的 vue 组件
  components: { apiTable },
  // 页面中的方法
  methods: {},
  onLoad (option) {
    if (option) {
      this.title = option.label
    }
  }
}
</script>


<style lang="scss">
.demo {
  .content {
    display: flex;
    flex-wrap: wrap;
  }

  .tabs {
    width: 100%;
  }
  .demo-cell {
    text-align: center;
    display: inline-block;
    margin: 10px 0;
    width: 20%;
  }
}
</style>
