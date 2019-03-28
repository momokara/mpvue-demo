<template>
  <!-- 自定义海报 -->
  <div class="custom-poster-page">
    <!-- 展示图 -->
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
          >
            <van-icon
              custom-class="delete-icon"
              name="clear"
              size="20px"
              color="#F64C4C"
            />
          </div>
          <div
            class="img-box fill-box"
            @click="toggleBg({bgImg:itemlcbg})"
          >
            <img
              class="image"
              :src="itemlcbg"
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
      <van-button
        class="showForm-btn"
        size="large"
        type="primary"
        @click="showForm"
      >生成海报</van-button>
    </div>

    <!-- 信息输入框 -->
    <div>
      <van-popup
        :show="isShowForm"
        @close="showForm"
      >
        <div class="form-box">
          <van-cell-group>
            <van-field
              label="姓名"
              maxlength="12"
              :value="formData.nickName"
              data-key="nickName"
              placeholder="请输入姓名"
              :border="false"
              clearable
              :error-message="errlog.nickName"
              @change="onChange"
            />
            <van-field
              label="手机"
              maxlength="11"
              :value="formData.phone"
              data-key="phone"
              placeholder="请输入手机号"
              :border="false"
              clearable
              :error-message="errlog.phone"
              @change="onChange"
            />
            <van-field
              label="广告词"
              :value="formData.adMsg"
              data-key="adMsg"
              placeholder="请输入广告词"
              :border="false"
              clearable
              :error-message="errlog.adMsg"
              type="textarea"
              fixed="true"
              maxlength="150"
              input-class="text-box"
              @change="onChange"
            />
          </van-cell-group>
          <div class="btn-box">
            <van-button
              class="form-btn"
              type="primary"
              @click="downLoadPoster"
              :disabled="!canDownLoad"
            >确定</van-button>
            <van-button
              class="form-btn"
              @click="showForm"
            >取消</van-button>
          </div>
        </div>
      </van-popup>
    </div>
  </div>

</template>

<script>
// eslint-disable-next-line no-unused-vars
import { upLoadFile } from '@/utils/cos/cosfunc'
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
    },
    formData: {
      type: Object,
      default: {
        nickName: '',
        phone: '',
        adMsg: ''
      }
    }
  },
  data () {
    return {
      pagedata: {
        showImg: ''
      },

      // 错误提示
      errlog: {},
      LocationImg: [],
      isShowForm: false,
      canDownLoad: true
    }
  },
  methods: {
    // 发送图片下载事件
    downLoadPoster: function () {
      if (this.canDownLoad) {
        let data = {
          bgUrl: this.pagedata.showImg,
          nickName: this.formData.nickName,
          phone: this.formData.phone,
          adMsg: this.formData.adMsg
        }
        this.$emit('downPoster', data)
        this.showForm()
      }
    },

    // 上传图片
    uploadImg: function () {
      let _this = this
      wx.chooseImage({
        success: chooseResult => {
          console.log(chooseResult, _this)
          upLoadFile(chooseResult.tempFiles[0], `costom_poster_bg`).then(
            res => {
              _this.pagedata.showImg = `https://${res.Location}`
              console.log('_this.pagedata.showImg===================', _this.pagedata.showImg)

              let imgList = _this.LocationImg.length > 0 ? _this.LocationImg : []
              imgList.push(_this.pagedata.showImg)
              console.log('imgList===================', imgList)
              _this.LocationImg = imgList
              if (_this.id) {
                _this.saveLcImg()
              }
            }
          )
        }
      })
    },
    onChange: function (e) {
      this.formData[e.mp.target.dataset.key] = e.mp.detail
      this.validForm()
    },
    validForm: function () {
      let _this = this
      for (const key in _this.formData) {
        if (_this.formData.hasOwnProperty(key)) {
          const element = _this.formData[key]
          if (element) {
            _this.errlog[key] = ''
            _this.canDownLoad = true
          } else {
            _this.errlog[key] = '不能为空'
            _this.canDownLoad = false
          }
        }
      }
    },
    // 切换背景图
    toggleBg: function ({ id, bgImg }) {
      this.pagedata.showImg = bgImg
    },

    // 缓存文件名
    getFileName: function () {
      // 单页分开保存
      // return `posterPageBg_${this.id}`
      // 整体保存
      return `posterPageBg`
    },
    // 移除本地文件

    // 保存本地图片信息
    saveLcImg: function () {
      let _posterPageBg = wx.getStorageSync(this.getFileName())
      _posterPageBg = _posterPageBg || {}
      console.log('saveLcImg', _posterPageBg)
      _posterPageBg[this.id] = this.LocationImg
      wx.setStorageSync(this.getFileName(), _posterPageBg)
    },

    // 删除本地缓存图片
    deleteLcImg: function (index) {
      let _this = this
      _this.LocationImg.splice(index, 1)
      if (_this.id) {
        _this.saveLcImg()
      }
    },

    // 加载本地图片记录，在id存在时有效
    loadLcImg: function () {
      let _this = this
      if (_this.id) {
        let _posterPageBg = wx.getStorageSync(_this.getFileName())
        _this.LocationImg = _posterPageBg[_this.id] ? _posterPageBg[_this.id] : []
      }
      _this.pagedata.showImg = _this.getDefaultBg()
    },

    // 获取默认背景图
    getDefaultBg: function () {
      let defaultBg = ''
      if (this.LocationImg.length > 0) {
        defaultBg = this.LocationImg[0]
      } else if (this.bgUrl.length > 0) {
        defaultBg = this.bgUrl[0].imgUrl
      }
      return defaultBg
    },

    /**
     * 轮播内容数量不足时候补位
     * @param {Number} displayMultipleItems 每行数量配置信息
     * @param {Number} swiperListLength 数组长度
     */
    fixswiperList: function (displayMultipleItems, swiperListLength) {
      if (displayMultipleItems > swiperListLength) {
        let fixLength = displayMultipleItems - swiperListLength
        for (let index = 0; index < fixLength; index++) {
          const emptydata = {
            imgUrl: '',
            id: ''
          }
          this.bgUrl.push(emptydata)
        }
      }
    },
    showForm: function () {
      this.isShowForm = !this.isShowForm
    }
  },
  created () {
    this.fixswiperList(3, this.bgUrl.length)
    this.loadLcImg()
    this.validForm()
  }
}
</script>

<style lang="scss" >
.custom-poster-page {
  .show-box {
    width: 350px;
    margin: auto;
    .show-bg {
      width: 100%;
    }
  }

  .bg-list {
    height: 203px;
    position: fixed;
    bottom: 0;
    width: 100%;
    .bg-swiper {
      height: 120px;
      .delete {
        position: absolute;
        right: 7 px;
        top: 1px;
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
  .form-box {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    .text-box {
      height: 140px;
    }
    .btn-box {
      width: 100vw;
      display: flex;
      justify-content: space-around;
      .form-btn {
        width: 45vw;
        .van-button {
          width: 100%;
        }
      }
    }
  }
}
</style>
