<template>
  <div
    :style="boxHeight"
    class="mini-swiper-box"
  >
    <swiper
      class="mini-swiper"
      :class="customClass"
      :indicator-dots="useConfig.indicatorDots"
      :indicator-color="useConfig.indicatorColor"
      :indicator-active-color="useConfig.indicatorActiveColor"
      :autoplay="useConfig.autoplay"
      :interval="useConfig.interval"
      :duration="useConfig.duration"
      :circular="true"
      :vertical="useConfig.vertical"
      :previous-margin="useConfig.previousMargin"
      :next-margin="useConfig.nextMargin"
      :displayMultipleItems="useConfig.displayMultipleItems"
      :current="current"
      @change="swiperChange"
      @animationfinish="animationFinish"
    >
      <swiper-item
        v-for="item in swiperList"
        :key="item"
        :item-id="item.id"
      >
        <a
          @click="golink(item.url)"
          class="link"
        >
          <img
            :style="imgHeight"
            :src="item.img_url"
            mode="aspectFill"
            class="slide-image"
          />
          <div
            v-if="useConfig.isShowName"
            class="ta-c item-name line-clamp_1"
            :class="[item.price?'fsp12 fc-grey':'fsp14 fc-black']"
          ><span :class="[item.price?'short-name':'']">
              {{item.name}}
            </span>
            <span
              class="fc-hred"
              :class="[item.price?'short-name':'']"
              v-if="item.price"
            >￥{{item.price}}</span> </div>
        </a>
      </swiper-item>
    </swiper>
  </div>

</template>

<script>
import { golink } from "@/utils/tools";
export default {
  props: {
    swiperList: {
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
  data() {
    return {
      defaultconfig: {
        indicatorDots: false,
        indicatorColor: "rgba(0, 0, 0, 0.3)",
        indicatorActiveColor: "#000",
        autoplay: false,
        interval: 5000,
        duration: 500,
        circular: false,
        vertical: false,
        previousMargin: "0px",
        nextMargin: "0px",
        displayMultipleItems: 1,
        isShowName: true,
        img_height: "150rpx"
      },
      useConfig: {}
    };
  },
  watch: {
    config: {
      handler: function(val, oldval) {
        this.getUseConfig();
      },
      deep: true
    }
  },
  computed: {
    boxHeight() {
      let _height = this.useConfig.cell_height / 750 * 100;
      return `height: ${_height.toFixed(2)}vw`;
    },
    imgHeight() {
      let _height = this.useConfig.img_height / 750 * 100;
      return `height: ${_height.toFixed(2)}vw`;
    }
  },
  methods: {
    golink,
    swiperChange(event) {
      this.$emit("change", event);
    },
    animationFinish(event) {
      this.$emit("animationfinish", event);
    },
    getUseConfig() {
      let _this = this;
      _this.useConfig = Object.assign({}, _this.defaultconfig, _this.config);
      let ltr = _this.useConfig.img_height.match(/[a-z|A-Z]+$/gi);
      let num = _this.useConfig.img_height.match(/^\d+/gi);
      // 单位是 px 转成2倍做rpx
      _this.useConfig.img_height = ltr == "px" ? num * 2 : num;
      // 如果要显示名称则需要加高高度
      if (_this.useConfig.isShowName) {
        _this.useConfig.cell_height = parseInt(_this.useConfig.img_height) + 60;
      } else {
        _this.useConfig.cell_height = _this.useConfig.img_height;
      }
    }
  },
  created() {
    this.getUseConfig();
  }
};
</script>

<style lang="scss">
.mini-swiper-box {
  overflow: hidden;
  width: 100%;
  .mini-swiper {
    width: 100%;
    .link {
      box-sizing: border-box;
      padding: 0px 3px;
      white-space: nowrap;
      .item-name {
        width: 100%;
        .short-name {
          max-width: 48%;
          display: inline;
        }
      }
    }
    .link,
    .slide-image {
      width: 100%;
      border-radius: 5px;
    }
  }
}
</style>
