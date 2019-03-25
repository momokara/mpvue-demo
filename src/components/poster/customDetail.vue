<template>
  <!-- 自定义海报 -->
  <div class="contant">

    <div class="show-box">
      <img
        class="show-bg"
        :src="pagedata.showImg"
        alt=""
        mode="widthFix"
      >
    </div>

    <!-- 背景图列表 -->
    <div class="bg-list">
      <div class="fsp16">选择成功图片海报</div>
      <swiper
        displayMultipleItems="4"
        class="bg-swiper"
      >
        <swiper-item>
          <div
            class="img-box fill-box ta-c add-bg"
            @click="uploadImg"
          >+</div>
        </swiper-item>
        <!-- 本地缓存图片地址 -->
        <swiper-item
          v-for="(itemlcbg, indexlc) in LocationImg"
          :key="indexlc"
        >
          <div
            class="delete"
            @click="deleteLcImg(indexlc)"
          > 删除</div>
          <div
            class="img-box fill-box"
            @click="toggleBg({bgImg:itemlcbg.imgUrl})"
          >
            <img
              class="image"
              :src="itemlcbg.imgUrl"
              mode="widthFix"
            >
          </div>
        </swiper-item>
        <!-- 线上图片地址 -->
        <swiper-item
          v-for="(itembg, index) in bgUrl"
          :key="index"
        >
          <div
            v-if="itembg.imgUrl"
            class="img-box fill-box"
            @click="toggleBg({id:itembg.id,bgImg:itembg.imgUrl})"
          >
            <img
              class="image"
              :src="itembg.imgUrl"
              mode="widthFix"
            >
          </div>
          <div
            v-else
            class="img-box empty-box"
          ></div>
        </swiper-item>
      </swiper>
    </div>
  </div>

</template>

<script>
import { upLoadFile } from "@/utils/cos/cosfunc";
export default {
  props: {
    id: {
      type: String
    },
    adMsg: {
      type: Array
    },
    bgUrl: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      pagedata: {
        showImg: ""
      },
      LocationImg: []
    };
  },
  methods: {
    // 发送图片下载事件
    downLoadPoster: function(data) {
      this.$emit("downPoster", data);
    },

    // 商城图片
    uploadImg: function() {
      let _this = this;
      wx.chooseImage({
        success: chooseResult => {
          upLoadFile(chooseResult.tempFiles[0], `costom_poster_bg`).then(
            res => {
              console.log("url:", res);
              _this.pagedata.showImg = `https://${res.Location}`;
              _this.LocationImg.push({ imgUrl: _this.pagedata.showImg });
              if (_this.id) {
                _this.saveLcImg();
              }
            }
          );
        }
      });
    },

    // 切换背景图
    toggleBg: function({ id, bgImg }) {
      this.pagedata.showImg = bgImg;
    },

    // 缓存文件名
    getFileName: function() {
      return `posterPageBg_${this.id}`;
    },
    // 移除本地文件

    // 保存本地图片信息
    saveLcImg: function() {
      wx.setStorageSync(this.getFileName(), this.LocationImg);
    },

    // 删除本地缓存图片
    deleteLcImg: function(index) {
      let _this = this;
      _this.LocationImg.splice(index, 1);
      if (_this.id) {
        _this.saveLcImg();
      }
    },

    // 加载本地图片记录，在id存在时有效
    loadLcImg: function() {
      let _this = this;
      if (_this.id) {
        _this.LocationImg = wx.getStorageSync(_this.getFileName());
      }
      _this.pagedata.showImg = _this.getDefaultBg();
    },

    // 获取默认背景图
    getDefaultBg: function() {
      let defaultBg = "";
      if (this.LocationImg.length > 0) {
        defaultBg = this.LocationImg[0].imgUrl;
      } else if (this.bgUrl.length > 0) {
        defaultBg = this.bgUrl[0].imgUrl;
      }
      return defaultBg;
    },

    /**
     * 轮播内容数量不足时候补位
     * @param {Number} displayMultipleItems 每行数量配置信息
     * @param {Number} swiperListLength 数组长度
     */
    fixswiperList: function(displayMultipleItems, swiperListLength) {
      if (displayMultipleItems > swiperListLength) {
        let fixLength = displayMultipleItems - swiperListLength;
        for (let index = 0; index < fixLength; index++) {
          const emptydata = {
            imgUrl: "",
            id: ""
          };
          this.bgUrl.push(emptydata);
        }
      }
    }
  },
  created() {
    this.fixswiperList(3, this.bgUrl.length);
    this.loadLcImg();
  }
};
</script>

<style lang="scss" scoped>
.show-box {
  width: 350px;
  margin: auto;
  .show-bg {
    width: 100%;
  }
}

.bg-list {
  height: 150px;
  position: fixed;
  bottom: 0;
  width: 100%;
  .bg-swiper {
    height: 120px;
    .delete {
      position: absolute;
      right: 0;
      top: 0;
    }
    .add-bg {
      font-size: 60px;
    }
    .img-box {
      box-sizing: border-box;
      margin: 5px 10px;
      height: 110px;
      line-height: 100px;
      .image {
        width: 100%;
      }
    }
    .fill-box {
      background-color: #ddd;
      color: #fff;
      overflow: hidden;
      box-shadow: 0 0 3px #333;
    }
  }
}
</style>
