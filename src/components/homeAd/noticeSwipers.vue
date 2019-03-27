<template>
  <!-- 纵向滚动的轮播 -->
  <swiper
    class="swiper"
    :class="customClass"
    :indicator-dots="useConfig.indicatorDots"
    :indicator-color="useConfig.indicatorColor"
    :autoplay="useConfig.autoplay"
    :interval="useConfig.interval"
    :duration="useConfig.duration"
    :circular="useConfig.circular"
    :vertical="useConfig.vertical"
    :previous-margin="useConfig.previousMargin"
    :next-margin="useConfig.nextMargin"
    :displayMultipleItems="useConfig.displayMultipleItems"
    @change="swiperChange"
    @animationfinish="animationFinish"
  >
    <swiper-item
      v-for="item in swiperList"
      :key="item"
      :item-id="item.id"
    >
      <a
        class="notice-link fs12"
        @click="golink(item.url)"
      >
        <img
          class="icon"
          :src="iconUrl"
          alt=""
        >
        <div class="notice-info line-clamp_1">{{item.info}}</div>
        <div class="more">查看</div>
      </a>
    </swiper-item>
  </swiper>

</template>

<script>
import { golink } from '@/utils/tools'
export default {
  props: {
    swiperList: {
      type: Array
    },
    config: {
      type: Object,
      default: {}
    },
    iconUrl: {
      type: String
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
        autoplay: true,
        interval: 5000,
        duration: 500,
        circular: false,
        vertical: true,
        previousMargin: '0px',
        nextMargin: '0px',
        displayMultipleItems: 1
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
.swiper {
  width: 100%;
  height: 100%;
  position: relative;
  .notice-link {
    margin-top: 1px;
  }
  .icon {
    width: 16px;
    height: 16px;
    padding: 5px 0;
    float: left;
    margin-right: 15rpx;
  }
  .notice-info {
    width: 250px;
  }
  .more {
    position: absolute;
    right: 0px;
    top: 3px;
    color: #6bb72d;
    float: right;
    height: 20px;
    line-height: 20px;
  }
}
</style>
