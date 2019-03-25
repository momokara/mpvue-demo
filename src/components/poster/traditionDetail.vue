<template>
  <!-- 传统海报 -->
  <div class="tradition-contant">
    <!-- 广告词列表 -->
    <div class="ad-list">
      <block
        v-for="(item, index) in adMsg"
        :key="index"
      >
        <div class="data-row fsp14">
          <div class="info-box">{{item.info}}</div>
          <div
            class="btn-box"
            @click="setClipboardData(item.info)"
          >
            <van-tag type="success">复制</van-tag>
          </div>
        </div>
      </block>
    </div>
    <!-- 背景图列表 -->
    <div class="bg-list">
      <div class="fsp16">选择成功图片海报</div>
      <block
        v-for="(itembg, index) in bgUrl"
        :key="index"
      >
        <div class="img-box">
          <div class="fsp12 fc-grey ta-c">(点击图片选择海报,生成二维码保存)</div>
          <img
            class="image"
            :src="itembg.imgUrl"
            @click="downLoadPoster({id:itembg.id,bgImg:itembg.imgUrl})"
            mode="widthFix"
          >

        </div>
      </block>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    adMsg: {
      type: Array
    },
    bgUrl: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {
    // 复制文本信息
    setClipboardData: function(data) {
      wx.setClipboardData({
        data,
        success(res) {
          wx.getClipboardData({
            success(res) {
              console.log(res.data); // data
            }
          });
        }
      });
    },
    downLoadPoster: function({ id, bgImg }) {
      let data = {
        id,
        bgImg
      };
      this.$emit("downPoster", data);
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin main-box {
  width: 330px;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 0 0 5px #333;
  border-radius: 10px;
}
.ad-list {
  .data-row {
    display: flex;
    flex-wrap: nowrap;
    @include main-box;
    .info-box {
      width: 300px;
    }
    .btn-box {
      width: 30px;
      display: flex;
      align-items: center;
    }
  }
}
.bg-list {
  @include main-box;
  .img-box {
    margin-bottom: 10px;
    .image {
      width: 100%;
    }
  }
}
</style>
