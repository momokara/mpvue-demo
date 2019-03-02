<template>
  <div class="home-container">
    <!-- 顶部轮播 -->
    <div class="header-swiper-box">
      <headerSwiper
        :swiperList="swiper.data"
        :config="swiper.config"
        @change="swiperChange"
        @animationfinish="swiperChange"
      >
      </headerSwiper>
    </div>
    <!-- 导航栏 -->
    <div class="header-nav-box">
      <homeNav
        :config="nav.config"
        :data="nav.data"
        :noticeData="nav.noticeData"
      >
      </homeNav>
    </div>

    <div class="main-ad-list">

      <div
        v-for="(item, index) in adList"
        :key="index"
      >
        <div
          v-if="index>0"
          class="bg-green line"
        ></div>
        <adBox
          :data="item.data"
          :config="item.config"
        ></adBox>

      </div>
    </div>

    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import headerSwiper from "@/components/headerSwipers";
import homeNav from "@/components/homeNav";
import adBox from "@/components/homeAd/adBox";

import { getHomeInfo } from "@/api/api";

// 页面记录
import { pagelogs } from "@/utils/logs";

export default {
  data() {
    return {
      swiper: {},
      nav: {},
      adList: []
    };
  },

  components: {
    headerSwiper,
    homeNav,
    adBox
  },

  methods: {
    getHomeInfo() {
      let _this = this;
      getHomeInfo().then(res => {
        _this.swiper = res.swiper;
        _this.nav = res.nav;
        _this.adList = res.adList;
        if (res.pagetitle) {
          wx.setNavigationBarTitle({
            title: res.pagetitle
          });
        }
      });
    }
  },
  onLoad() {},
  onShow() {
    pagelogs();
    this.getHomeInfo();
  },
  onHide() {
    pagelogs(true);
  }
};
</script>

<style lang="scss">
@mixin main-box {
  width: 330px;
  margin: 20px auto;
  border-radius: 16px;
  padding: 10px;
  background-color: #fff;
}
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
.header-nav-box {
  @include main-box;
}
.main-ad-list {
  @include main-box;
  margin: 20px auto 35px auto;
  .line {
    height: 1px;
    margin: 10px 0 0 0;
  }
}
</style>
