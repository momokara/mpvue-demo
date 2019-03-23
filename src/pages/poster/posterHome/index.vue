<template>
  <div class="home-container">
    <!-- 顶部轮播 -->
    <headerSwiper
      v-if="data.swiper"
      :swiperList="data.swiper.data"
      :config="data.swiper.config"
      @change="swiperChange"
      @animationfinish="swiperChange"
    >
    </headerSwiper>
    <!-- 导航栏 -->
    <div class="header-nav-box">
      <homeNav
        v-if="data.nav"
        :config="data.nav.config"
        :data="data.nav.data"
        :noticeData="data.nav.noticeData"
      >
      </homeNav>
    </div>
    <!-- 推荐位 -->
    <div>

    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import headerSwiper from "@/components/headerSwipers";
import homeNav from "@/components/homeAd/homeNav";
import adBox from "@/components/homeAd/adBox";

import { getPosterHomeInfo } from "@/api/api.poster";

// 页面记录
import { pagelogs } from "@/utils/logs";

export default {
  data() {
    return {
      data: {}
    };
  },

  components: {
    headerSwiper,
    homeNav,
    adBox
  },

  methods: {
    getPageData() {
      let _this = this;
      getPosterHomeInfo().then(res => {
        console.log("getPosterHomeInfo", res);
        _this.data = res;
        wx.stopPullDownRefresh();
      });
    }
  },
  onShow() {
    pagelogs();
    this.getPageData();
  },
  onHide() {
    pagelogs(true);
  },

  onPullDownRefresh() {
    this.getPageData();
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
.header-nav-box {
  @include main-box;
}
</style>
