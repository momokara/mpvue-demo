<template>
  <div class="img-ad-list">
    <block v-for="item in dataList"
           :key="item"
           :item-id="item.id">
      <div @click="golink(item.url)"
           class="link"
           :style="imgHeight+rowWidth+(((index+1)%config.rowsize)==0?'':rowMarginR)+linkBg+rowMarginBottom"
           :class="[{'show-text':config.isShowName&&item.name}]">
        <video v-if="item.videoUrl"
               class="slide-image"
               :autoplay="item.videoAutoplay"
               :src="item.videoUrl"></video>
        <img v-else
             class="slide-image"
             :src="item.imgUrl"
             :mode="item.imgMode?item.imgMode:'aspectFill'" />
        <div v-if="config.isShowName&&item.name"
             class="textbox">
          <div class="text fsp14 ta-c fc-black line-clamp_1">{{item.name}}</div>
          <div class="text fsp12 ta-c fc-grey line-clamp_1">{{item.info}}</div>
        </div>
      </div>
    </block>
  </div>
</template>

<script>
import { golink } from '@/utils/tools'
export default {
  props: {
    dataList: {
      type: Array
    },
    config: {
      type: Object,
      default: {}
    },
    customClass: {
      type: String
    },
    current: {
      type: String
    }
  },
  data () {
    return {
      defaultconfig: {
        imgHeight: '150rpx'
      },
      useConfig: {}
    }
  },
  watch: {
    config: {
      handler: function (val, oldval) {
        this.getUseConfig()
      },
      deep: true
    }
  },
  computed: {
    imgHeight () {
      let _height = (this.useConfig.imgHeight / 750) * 100
      return `height: ${_height.toFixed(2)}vw;`
    },
    rowWidth () {
      let _width
      let rowsize = this.config.rowsize
      if (rowsize > 1) {
        _width = (100 - rowsize) / rowsize
      } else {
        _width = 100
      }
      return `width:${_width.toFixed(2)}%;`
    },
    rowMarginR () {
      let rowsize = this.config.rowsize
      let _margin
      if (rowsize > 1) {
        _margin = `margin-right:${1}%;`
      } else {
        _margin = ''
      }
      return _margin
    },
    linkBg () {
      let _bg = this.config.imgAdCellBg
        ? `background:${this.config.imgAdCellBg};`
        : ''
      return _bg
    },
    rowMarginBottom () {
      let _margin = this.config.imgAdCellMarginBottom
        ? `margin-bottom:${this.config.imgAdCellMarginBottom}`
        : ''
      return _margin
    }
  },
  methods: {
    golink,
    swiperChange (event) {
      this.$emit('change', event)
    },
    animationFinish (event) {
      this.$emit('animationfinish', event)
    },
    getUseConfig () {
      let _this = this
      _this.useConfig = Object.assign({}, this.defaultconfig, this.config)
      let ltr
      let num
      if (_this.useConfig.imgHeight) {
        _this.useConfig.imgHeight = _this.useConfig.imgHeight.toString()
        ltr = _this.useConfig.imgHeight.match(/[a-z|A-Z]+$/gi)
        num = _this.useConfig.imgHeight.match(/^\d+/gi)
      } else {
        ltr = 'rpx'
        num = '150'
      }
      // 单位是 px 转成2倍做rpx
      // eslint-disable-next-line eqeqeq
      _this.useConfig.imgHeight = ltr == 'px' ? num * 2 : num
      // 如果要显示名称则需要加高高度
      if (_this.useConfig.isShowName) {
        _this.useConfig.cell_height = parseInt(_this.useConfig.imgHeight) + 60
      } else {
        _this.useConfig.cell_height = _this.useConfig.imgHeight
      }
    }
  },
  created () {
    this.getUseConfig()
  }
}
</script>

<style lang="scss">
.img-ad-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  .link,
  .slide-image {
    border-radius: 5px;
  }
  .slide-cell,
  .slide-image {
    width: 100%;
    height: 100%;
  }
  .link {
    margin-bottom: 5px;
    position: relative;
    width: 100%;
  }
  .show-text {
    padding: 0 0 40px 0;
    position: relative;
    .textbox {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 40px;
      .text {
        line-height: 20px;
      }
    }
  }
}
</style>
