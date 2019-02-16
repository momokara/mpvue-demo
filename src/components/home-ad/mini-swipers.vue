<template>
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
    :current-item-id="currentItemId"
    @change="swiperChange"
    @animationfinish="animationFinish"
  >
    <swiper-item
      v-for="item in swiperList"
      :key="item"
      :item-id="item.id"
    >
      <a
        :href="item.url"
        class="link"
      >
        <img
          :src="item.img_url"
          mode="scaleToFill"
          class="slide-image"
        />
        <div v-if="useConfig.isShowName" class="ta-c fsp12 fc-grey ">{{item.name}}</div>
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
        indicatorActiveColor: "#000",
        autoplay: false,
        interval: 5000,
        duration: 500,
        circular: false,
        vertical: false,
        previousMargin: "0px",
        nextMargin: "0px",
        displayMultipleItems: 1,
        isShowName: true
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
.mini-swiper {
  width: 100%;
  height: 100%;
  .link,
  .slide-image {
    height: 80%;
    width: 100%;
  }
}
</style>
