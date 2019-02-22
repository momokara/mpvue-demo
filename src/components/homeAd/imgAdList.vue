<template>
  <div class="img-ad-list">
    <div
      v-for="item in dataList"
      :key="item"
      :item-id="item.id"
    >
      <a
        @click="golink(item.url)"
        class="link"
      >
        <img
          :style="imgHeight"
          :src="item.imgUrl"
          mode="scaleToFill"
          class="slide-image"
        />

      </a>
    </div>
  </div>

</template>

<script>
import { golink } from "@/utils/tools";
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
  data() {
    return {
      defaultconfig: {
        imgHeight: "150rpx"
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
    imgHeight() {
      let _height = this.useConfig.imgHeight / 750 * 100;
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
      this.useConfig = Object.assign({}, this.defaultconfig, this.config);
    }
  },
  created() {
    this.getUseConfig();
  }
};
</script>

<style lang="scss">
.img-ad-list {
  .link,
  .slide-image {
    border-radius: 5px;
    width: 100%;
  }
  .link {
    margin-bottom: 5px;
  }
}
</style>
