<template>
  <!-- 弹出海报和下载 -->
  <div class="contant">
    <van-popup
      :show="isShow"
      @close="onClose"
    >
      <img
        class="popup-img"
        mode="aspectFit"
        :src="imgUrl"
        alt=""
      >
      <button
        @click="downLoadPoster"
        class="downLoad-btn ta-c"
      >下载</button>
    </van-popup>
  </div>

</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    imgUrl: {
      type: String
    },
    isloading: false
  },
  data() {
    return {};
  },
  methods: {
    onClose: function() {
      this.$emit("close", true);
    },
    downLoadPoster: function() {
      let _this = this;

      if (!_this.isloading) {
        _this.isloading = true;
        wx.showToast({
          title: "图片加载中",
          icon: "loading"
        });
        wx.downloadFile({
          url: _this.imgUrl, // 仅为示例，并非真实的资源
          success(res) {
            // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
            if (res.statusCode === 200) {
              _this.isloading = false;
              wx.hideToast();
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success(res) {
                  
                }
              });
            }
            _this.$emit("close", true);
          }
        });
      }
    }
  }
};
</script>

<style lang="scss">
.popup-img {
  height: 60vh;
}
.contant {
  .van-popup {
    background-color: transparent;
    .downLoad-btn {
      background-color: #fff;
      width: 100px;
      margin: auto;
    }
  }
}
</style>
