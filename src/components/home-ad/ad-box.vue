<template>
  <div>

    <div
      v-if="config.type==1"
      class="mini-swiper-box"
    >
      <miniSwipers
        :swiperList="data"
        :config="config"
      ></miniSwipers>
    </div>

  </div>

</template>

<script>
import miniSwipers from "@/components/home-ad/mini-swipers";
import { golink } from "@/utils/index";
export default {
  props: {
    config: {
      type: Object,
      default: {
        type: 3,
        autoplay: true,
        displayMultipleItems: 3
      }
    },
    data: {
      type: Array,
      default: []
    }
  },
  components: {
    miniSwipers
  },
  methods: {
    golink
  }
};
</script>

<style lang="scss">
.mini-swiper-box {
  height: 200px;
}
</style>
