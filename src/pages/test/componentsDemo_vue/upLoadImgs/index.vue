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
import upLoadImages from "@/components/upLoadImages";
import apiTable from "@/components/apiDataTable";
import apiData from "./api_data";
export default {
  data() {
    return {
      msg: "这里是消息",
      autoUpLoad: false,
      imgArr: [
        "https://cdn.huibaoming.com/haivit/public/image/20181112155409_979/wx7e28d99c40baf7a8.o6zAJs0VYBlymN8fYVEUKSPcEawI.DSXlZRmdFiq153b8b378d15905c5ed2e65c281061b91.jpg",
        "https://cdn.huibaoming.com/haivit/public/image/20181112155409_979/wx7e28d99c40baf7a8.o6zAJs0VYBlymN8fYVEUKSPcEawI.DSXlZRmdFiq153b8b378d15905c5ed2e65c281061b91.jpg",
        "https://cdn.huibaoming.com/haivit/public/image/20181112155409_979/wx7e28d99c40baf7a8.o6zAJs0VYBlymN8fYVEUKSPcEawI.DSXlZRmdFiq153b8b378d15905c5ed2e65c281061b91.jpg"
      ],
      table_api: apiData.api,
      table_event: apiData.event
    };
  },
  // 使用的 vue 组件
  components: {
    upLoadImages,
    apiTable
  },
  // 页面中的方法
  methods: {
    addImg: function(event) {
      console.log("addImg", event);
    },
    deleteImg: function(event) {
      console.log("deleteImg", event);
    },
    upLoadImgs: function(event) {
      console.log("upLoadImgs", event);
    },
    onChange: function(event) {
      console.log(event.mp.detail);
      this.autoUpLoad = event.mp.detail;
    }
  }
};
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
