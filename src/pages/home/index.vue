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
        :notice_data="nav.notice_data"
      >
      </homeNav>
    </div>

    <div class="main-ad-list">
      <div
        v-for="(item, index) in adList"
        :key="index"
      >
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
import headerSwiper from "@/components/header-swipers";
import homeNav from "@/components/home-nav";
import adBox from "@/components/home-ad/ad-box";

import Api from "@/api/api";

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
      Api.getHomeInfo().then(res => {
        console.log("Homedata", res);
        _this.swiper = res.swiper;
        _this.nav = res.nav;
        _this.adList = res.adList;
      });
    }
  },
  onLoad() {},
  onShow() {
    pagelogs();
    this.getHomeInfo();
  }
};
</script>

<style lang="scss">
page {
  background-color: #f2f7fb;
}
@mixin main-box {
  width: 640rpx;
  margin: 40rpx auto;
  border-radius: 16px;
  padding: 20rpx 30rpx;
  background-color: #fff;
}
.header-swiper-box {
  height: 403.35rpx;
  margin: 25rpx 0;
  .swiper {
    width: 750rpx;
    a {
      width: 700rpx;
      margin: 0 25rpx;
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

 
}
</style>
