<template>
  <div>
    <div class="ad-box-titleline">
      <span class="ad-box-title fsp16">{{config.title}}</span>
      <a
        @click="golink(config.moreUrl)"
        class="ad-box-more fc-green"
      >
        <span class="fsp14">更多</span>
        <van-icon
          name="arrow"
          size="14px"
          custom-class="more-link-icon"
        /></a>
    </div>
    <div class="info-box"></div>
    <div
      v-if="config.type==1"
      class="swiper-slide-box"
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
import miniSwipers from "@/components/homeAd/miniSwipers";
import imgAdList from "@/components/homeAd/imgAdList";
import infocardList from "@/components/homeAd/infoCardList";
import { golink } from "@/utils/tools";
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
.ad-box-titleline {
  box-sizing: border-box;
  padding: 10px 2px 5px 2px;

  .ad-box-more {
    display: inline-block;
    box-sizing: border-box;
    float: right;
    .fsp14 {
      line-height: 30px;
    }
    .more-link-icon {
      margin-top: 7px;
      float: right;
    }
  }
}

</style>
