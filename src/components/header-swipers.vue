<template>
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
    :current="current"
    :current-item-id="currentItemId"
    @change="swiperChange"
    @animationfinish="animationFinish"
  >
    <swiper-item
      v-for="item in swiperList"
      :key="item"
      :item-id="item.id"
    >
      <a :href="item.url">
        <img
          :src="item.pic_path"
          mode="scaleToFill"
          class="slide-image"
        />
      </a>
    </swiper-item>
  </swiper>

</template>

<script>
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
.swiper {
  width: 100%;
  height: 100%;
  a,
  .slide-image {
    height: 100%;
    width: 100%;
  }
}
</style>
