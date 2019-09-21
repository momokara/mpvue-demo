<template>
  <!-- 首页顶部轮播 -->
  <div class="header-swiper-box"
       :style="'height:'+useConfig.imgHeight">
    <div v-if="data"
         class="swiper"
         :class="customClass">
      <a @click="golink(data[0].url)"
         class="link">
        <video v-if="data[0].videoUrl"
               class="slide-image"
               :autoplay="data[0].videoAutoplay"
               :style="imgHeight"
               :src="data[0].videoUrl"></video>
        <img v-else
             :src="data[0].imgUrl"
             :mode="data[0].imgMode?data[0].imgMode:'scaleToFill'"
             class="slide-image" />
      </a>
    </div>
    <div v-else
         class="swiper no-data-box">
      <div class="link"></div>

    </div>
  </div>

</template>

<script>
import { golink } from '@/utils/tools'
export default {
  props: {
    data: {
      type: Array,
      default: []
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
    },
    currentItemId: {
      type: String
    }
  },
  data () {
    return {
      defaultconfig: {
        indicatorDots: false,
        indicatorColor: 'rgba(0, 0, 0, 0.3)',
        indicatorActiveColor: '#000',
        autoplay: false,
        interval: 5000,
        duration: 500,
        circular: false,
        vertical: false,
        previousMargin: '0px',
        nextMargin: '0px',
        displayMultipleItems: 1,
        imgHeight: '405rpx'
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
  methods: {
    golink,
    swiperChange (event) {
      this.$emit('change', event)
    },
    animationFinish (event) {
      this.$emit('animationfinish', event)
    },
    getUseConfig () {
      this.useConfig = Object.assign({}, this.defaultconfig, this.config)
    }
  },
  created () {
    this.getUseConfig()
  }
}
</script>

<style lang="scss">
.header-swiper-box {
  margin: 12px auto;
  width: 375px;
  .swiper {
    .link {
      width: 350px;
      margin: auto;
      border-radius: 8px;
      overflow: hidden;
    }
  }
}
.swiper {
  width: 100%;
  height: 100%;
  .link,
  .slide-image {
    height: 100%;
    width: 100%;
  }
}
.no-data-box {
  .link {
    background-color: #fff;
  }
}
</style>
