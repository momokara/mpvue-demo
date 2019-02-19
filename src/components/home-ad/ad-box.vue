<template>
  <div>
    <div class="fsp16">{{config.title}}</div>
    <div
      v-if="config.type==1"
      class="mini-swiper-box"
    >
      <miniSwipers
        :swiperList="data"
        :config="config"
      ></miniSwipers>
    </div>
    <div
      v-if="config.type==2"
      class="img-ad-box"
    >
      <imgAdList
        :dataList="data"
        :config="config"
      ></imgAdList>
    </div>
    <div
      v-if="config.type==3"
      class="img-ad-box"
    >
      <infocardList
        :dataList="data"
        :config="config"
      ></infocardList>
    </div>
  </div>

</template>

<script>
import miniSwipers from "@/components/home-ad/mini-swipers";
import imgAdList from "@/components/home-ad/img-ad-list";
import infocardList from "@/components/home-ad/infocard-list";
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
    miniSwipers,
    imgAdList,
    infocardList
  },
  methods: {
    golink
  }
};
</script>

<style lang="scss">
.mini-swiper-box {
  height: 105px;
}
</style>
