<template>
  <div class="home-container">
    <block v-if="!isLoading">

      <!-- 顶部轮播 -->
      <headerSwiper v-if="data.swiper"
                    :swiperList="data.swiper.data"
                    :config="data.swiper.config"
                    @change="swiperChange"
                    @animationfinish="swiperChange">
      </headerSwiper>
      <!-- 导航栏 -->
      <div class="header-nav-box">
        <homeNav v-if="data.nav"
                 :config="data.nav.config"
                 :data="data.nav.data"
                 :noticeData="data.nav.noticeData">
        </homeNav>
      </div>
      <div class="main-ad-list"
           v-if="data.adList">

        <div v-for="(item, index) in data.adList"
             :key="index">
          <div v-if="index>0"
               class="bg-green line"></div>
          <adBox :data="item.data"
                 :config="item.config"></adBox>
        </div>
      </div>
    </block>
    <block v-else>
      加载中
    </block>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import headerSwiper from '@/components/headerSwipers'
import homeNav from '@/components/homeAd/homeNav'
import adBox from '@/components/homeAd/adBox'

import { getHomeInfo } from '@/api/api'
import { getShareData } from '@/api/dataTools'

// 页面记录
import { pagelogs } from '@/utils/logs'

export default {
  data () {
    return {
      data: {}
    }
  },

  components: {
    headerSwiper,
    homeNav,
    adBox
  },

  methods: {
    getPageData () {
      let _this = this
      _this.isLoading = true
      console.log(_this.isLoading)
      getHomeInfo().then(res => {
        _this.data = res
        _this.isLoading = false
        console.log(_this.isLoading)
        if (res.pagetitle) {
          wx.setNavigationBarTitle({
            title: res.pagetitle
          })
        }

        wx.stopPullDownRefresh()
      })
    }
  },
  onShow () {
    pagelogs()
    this.getPageData()
  },
  onHide () {
    pagelogs(true)
  },

  onPullDownRefresh () {
    this.getPageData()
  },
  onShareAppMessage (res) {
    return getShareData('', '小程序首页')
  }
}
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
.main-ad-list {
  @include main-box;
  margin: 20px auto 35px auto;
  .line {
    height: 1px;
    margin: 10px 0 0 0;
  }
}
</style>
