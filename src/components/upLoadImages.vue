<template>
  <div class="img_upload">
    <div
      v-if="title"
      class="title"
    >{{title}}</div>
    <div class="image-box">
      <img
        class="img-cell"
        v-for="(item,index) in imageList"
        :key="index"
        :src="item"
        @click="deleteImage(index,false)"
      >
      <block v-if="!autoUpLoad">
        <img
          class="img-cell"
          v-for="(item,index) in tempFilePaths"
          :key="index"
          :src="item"
          @click="deleteImage(index,true)"
        >

      </block>
      <div
        class="img-cell add-btn fs40"
        v-if="(imageList.length+tempFilePaths.length)<max"
        @click="addImage"
      >
        +
      </div>
    </div>
    <button
      class="upload-btn"
      type="primary"
      v-if="!autoUpLoad"
      @click="upLoadImgs"
    >
      上传图片
    </button>
  </div>
</template>

<script>
// import Api from "@/api/api";
import { upLoadimgs } from "@/utils/cos/cosfunc";
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    max: {
      type: Number,
      default: 6
    },
    autoUpLoad: {
      type: Boolean,
      default: false
    },
    imageList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      tempFilePaths: [],
      tempFiles: [],
      uploadresFilePaths: []
    };
  },
  methods: {
    // 选择图片
    addImage: function(e) {
      let _this = this;
      wx.chooseImage({
        count: 6,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: res => {
          if (_this.autoUpLoad) {
            _this.tempFilePaths = res.tempFilePaths;
            _this.tempFiles = res.tempFiles;
            _this.upLoadImgs().then(res => {
              _this.$emit("upLoadImgs", _this.imageList);
            });
          } else {
            _this.tempFilePaths = _this.tempFilePaths.concat(res.tempFilePaths);
            _this.tempFiles = _this.tempFiles.concat(res.tempFiles);
          }
          let _delRes = {
            imageList: this.imageList,
            tempFilePaths: this.tempFilePaths
          };
          _this.$emit("addImg", _delRes);
        }
      });
    },
    /**
     * 删除图片
     * @param {*} index 图片序号
     */
    deleteImage: function(index, istemp) {
      let tempFilePaths = istemp ? this.tempFilePaths : this.imageList;
      tempFilePaths.splice(index, 1);
      let _delRes = {
        imageList: this.imageList,
        tempFilePaths: this.tempFilePaths
      };
      this.$emit("deleteImg", _delRes);
    },
    // 上传图片
    upLoadImgs() {
      let _this = this;
      return upLoadimgs(this.tempFiles).then(res => {
        _this.imageList = _this.imageList ? _this.imageList.concat(res) : res;
        if (!_this.autoUpLoad) {
          _this.$emit("upLoadImgs", _this.imageList);
          _this.tempFilePaths = [];
        }
        return res;
      });
    }
  }
};
</script>

<style lang="scss">
.image-box {
  width: 720rpx;
  margin: auto;
  clear: both;
  display: flex;
  flex-wrap: wrap;
  .img-cell {
    width: 220rpx;
    height: 220rpx;
    margin: 10rpx;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .add-btn {
    background-color: #ddd;
    color: #fff;
    text-align: center;
    line-height: 200rpx;
    clear: right;
  }
}
.upload-btn {
  width: 700rpx;
  margin: 15px auto;
}
</style>
