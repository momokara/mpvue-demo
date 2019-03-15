<template>
  <!-- 首页顶部轮播 -->
  <div class="header-swiper-box">
    <swiper
      v-if="swiperList"
      class="swiper"
      :class="customClass"
      :indicator-dots="useConfig.indicatorDots"
      :indicator-color="useConfig.indicatorColor"
      :indicator-active-color="useConfig.indicatorActiveColor"
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
          @click="golink(item.url)"
          class="link"
        >
          <img
            :src="item.imgUrl"
            mode="scaleToFill"
            class="slide-image"
          />
        </a>
      </swiper-item>
    </swiper>
    <div
      v-else
      class="swiper no-data-box"
    >
      <div class="link"></div>

    </div>
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
    },
    currentItemId: {
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
        displayMultipleItems: 1
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
  methods: {
    golink,
    swiperChange(event) {
      this.$emit("change", event);
    },
    animationFinish(event) {
      this.$emit("animationfinish", event);
    },
    getUseConfig() {
      this.useConfig = Object.assign({}, this.defaultconfig, this.config);
    }
  },
  created() {
    this.getUseConfig();
  }
};
</script>

<style lang="scss">
.header-swiper-box {
  height: 200px;
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
.no-data-box{
  .link{
    background-color: #fff;
  }
}
</style>
