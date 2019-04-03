<template>
  <div>
    <div class="ad-box-titleline" v-if="config.title">
      <span class="ad-box-title fsp16">{{config.title}}</span>
      <a
        v-if="config.moreUrl"
        @click="golink(config.moreUrl)"
        class="ad-box-more fr fc-green"
      >
        <span class="fsp14">更多</span>
        <van-icon
          name="arrow"
          size="14px"
          custom-class="more-link-icon fr"
        /></a>
    </div>
    <div class="info-box"></div>
    <!-- 横向轮播 -->
    <div
      v-if="config.type==1"
      class="swiper-slide-box"
    >
      <miniSwipers
        :swiperList="data"
        :config="config"
      ></miniSwipers>
    </div>
    <!-- 单纯图片的广告列表 -->
    <div
      v-if="config.type==2"
      class="img-ad-box"
    >
      <imgAdList
        :dataList="data"
        :config="config"
      ></imgAdList>
    </div>
    <!-- 带简介的性息列表 -->
    <div
      v-if="config.type==3"
      class="img-ad-box"
    >
      <infocardList
        :dataList="data"
        :config="config"
      ></infocardList>
    </div>
    <!-- 横向导航 -->
    <div
      v-if="config.type==4"
      class="img-ad-box"
    >
      <homeNav
        :config="config"
        :data="data"
      >
      </homeNav>
    </div>
    <!-- 长列表菜单 -->
    <div
      v-if="config.type==5"
      class="img-ad-box"
    >
      <cellMenu
        :config="config"
        :data="data"
      >
      </cellMenu>
    </div>
  </div>

</template>

<script>
import miniSwipers from '@/components/homeAd/miniSwipers'
import imgAdList from '@/components/homeAd/imgAdList'
import infocardList from '@/components/homeAd/infoCardList'
import homeNav from '@/components/homeAd/homeNav'
import cellMenu from '@/components/userCenter/cellMenu'

import { golink } from '@/utils/tools'
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
    infocardList,
    homeNav,
    cellMenu
  },
  methods: {
    golink
  }
}
</script>

<style lang="scss">
.ad-box-titleline {
  box-sizing: border-box;
  padding: 10px 2px 5px 2px;

  .ad-box-more {
    display: inline-block;
    box-sizing: border-box;
    .fsp14 {
      line-height: 30px;
    }
    .more-link-icon {
      margin-top: 7px;

    }
  }
}
</style>
