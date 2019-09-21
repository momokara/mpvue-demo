<template>
  <div class="container">
    <upLoadImages
      :title="'图片上传组件'"
      :autoUpLoad="autoUpLoad"
      :imageList="imgArr"
      @addImg="addImg"
      @deleteImg="deleteImg"
      @upLoadImgs="upLoadImgs"
    ></upLoadImages>
    <div class="control-box">
      <van-cell-group>
        <van-cell>
          <div slot="title">
            <span class="van-cell-text">autoUpLoad(开启自动上传)</span>
          </div>
          <div>
            <van-switch
              :checked="autoUpLoad"
              @change="onChange"
            />
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">Event</div>
      <apiTable :tabledata="table_event"></apiTable>

    </div>

  </div>
</template>
<script>
import upLoadImages from '@/components/common/upLoadImages'
import apiTable from '@/components/apiDataTable'
import apiData from './api_data'
export default {
  data () {
    return {
      msg: '这里是消息',
      autoUpLoad: false,
      imgArr: [
      ],
      table_api: apiData.api,
      table_event: apiData.event
    }
  },
  // 使用的 vue 组件
  components: {
    upLoadImages,
    apiTable
  },
  // 页面中的方法
  methods: {
    // 添加图片回调
    addImg: function (event) {
      console.log('addImg', event)
    },
    // 删除图片回调
    deleteImg: function (event) {
      console.log('deleteImg', event)
    },
    // 上传图片回调
    upLoadImgs: function (event) {
      console.log('upLoadImgs', event)
    },
    onChange: function (event) {
      console.log(event.mp.detail)
      this.autoUpLoad = event.mp.detail
    }
  }
}
</script>


<style lang="scss">
.api-info {
  padding: 10rpx 10rpx 60rpx 10rpx;
}
.table-col {
  font-size: 11pt;
  border-top: 1px solid #333;
}
</style>
