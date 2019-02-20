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
import headerSwiper from "@/components/header-swipers";
import homeNav from "@/components/home-nav";
import adBox from "@/components/home-ad/ad-box";

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
        console.log("Homedata", res);
        _this.swiper = res.swiper;
        _this.nav = res.nav;
        _this.adList = res.adList;
        if (res.pagetitle) {
          wx.setNavigationBarTitle({
            title: "String"
          });
        }
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
  .line {
    height: 1px;
    margin: 10px 0 0 0;
  }
}
</style>
