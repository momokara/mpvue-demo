<template>
  <div class="img_upload">
    <div v-if="title"
         class="title">{{title}}</div>
    <div class="image-box">
      <block v-for="(item,index) in imageList"
             :key="index">

        <img class="img-cell"
             :class="(index+1)%4==0?'right-cell':''"
             :src="item"
             @click="deleteImage(index,false)">
      </block>

      <block v-if="!autoUpLoad">
        <block v-for="(item,index) in tempFilePaths"
               :key="index">
          <img class="img-cell"
               :src="item"
               @click="deleteImage(index,true)">
        </block>
      </block>
      <div class="img-cell right-cell add-btn fs40"
           v-if="(imageList.length+tempFilePaths.length)<max"
           @click="addImage">
        +
      </div>
    </div>
    <button class="upload-btn"
            v-if="!autoUpLoad"
            @click="upLoadImgs">
      {{btnText}}
    </button>
  </div>
</template>

<script>
// import Api from "@/api/api";
import { upLoadimgs } from '@/utils/cos/cosfunc'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    max: {
      type: Number,
      default: 8
    },
    autoUpLoad: {
      type: Boolean,
      default: true
    },
    // 预览图片数组
    imageList: {
      type: Array,
      default: []
    },
    btnText: {
      type: String,
      default: '上传图片'
    }
  },
  data () {
    return {
      // 缓存
      tempFilePaths: [],
      tempFiles: [],
      uploadresFilePaths: []
    }
  },
  methods: {
    // 选择图片
    addImage: function (e) {
      let _this = this
      wx.chooseImage({
        count: this.max,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: res => {
          if (_this.autoUpLoad) {
            wx.showLoading({
              title: '上传中',
              mask: true
            })
            _this.tempFilePaths = res.tempFilePaths
            _this.tempFiles = res.tempFiles
            _this.upLoadImgs().then(res => {
              _this.tempFilePaths = []
              _this.$emit('upLoadImgs', _this.imageList)
              wx.hideLoading()
            })
          } else {
            _this.tempFilePaths = _this.tempFilePaths.concat(res.tempFilePaths)
            _this.tempFiles = _this.tempFiles.concat(res.tempFiles)
          }
          let _delRes = {
            imageList: this.imageList,
            tempFilePaths: this.tempFilePaths
          }
          _this.$emit('addImg', _delRes)
        }
      })
    },
    /**
     * 删除图片
     * @param {*} index 图片序号
     */
    deleteImage: function (index, istemp) {
      let tempFilePaths = istemp ? this.tempFilePaths : this.imageList
      tempFilePaths.splice(index, 1)
      let _delRes = {
        imageList: this.imageList,
        tempFilePaths: this.tempFilePaths
      }
      this.$emit('deleteImg', _delRes)
    },
    // 上传图片
    upLoadImgs () {
      let _this = this
      return upLoadimgs(this.tempFiles).then(res => {
        _this.imageList = _this.imageList ? _this.imageList.concat(res) : res
        if (!_this.autoUpLoad) {
          _this.$emit('upLoadImgs', _this.imageList)
          _this.tempFilePaths = []
        }
        return res
      })
    },
    clean: function () {
      console.log('clean is work')
      this.imageList = []
      this.tempFilePaths = []
      this.tempFiles = []
    }
  }
}
</script>

<style lang="scss">
.image-box {
  width: 350px;
  margin: auto;
  clear: both;
  display: flex;
  flex-wrap: wrap;
  .img-cell {
    width: 80px;
    height: 80px;
    margin: 0 10px 10px 0;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .img-cell.right-cell {
    margin: 0 0px 10px 0;
  }
  .add-btn {
    background-color: #ddd;
    color: #fff;
    text-align: center;
    line-height: 70px;
    clear: right;
  }
}
.upload-btn {
  width: 700rpx;
  margin: 15px auto;
}
</style>
