<template>
  <div class="home-container">
    <headerNotice :isShowOffical="true"></headerNotice>
    <block v-if="isSending&&!data.swiper">
      <div class="loading-content">
        <loadingBox :height="'200px'"></loadingBox>
        <loadingBox></loadingBox>
      </div>
    </block>
    <block v-else>
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
          <div v-if="index>0&&item.config.type!=7"
               class="line-c line"></div>
          <adBox :data="item.data"
                 :config="item.config"></adBox>
        </div>
      </div>
    </block>

    <pageFooter></pageFooter>

  </div>
</template>

<script>
import headerSwiper from '@/components/headerSwipers'
import adBox from '@/components/homeAd/adBox'
import loadingBox from '@/components/loadingBox'

import pageFooter from '@/components/pageFooter'

import { delayFunc } from '@/utils/tools'

import { getHomeInfo } from '@/api/basic'
import { getShareData, setbarStyle } from '@/api/dataTools'

import cloudConfig from '@/store/cloudConfig.js'

// 页面记录
import { pagelogs } from '@/utils/logs'

export default {
  data () {
    return {
      data: {},
      pagelogs: {},
      // 获取红包信息所需参数
      redPackParm: {
        redpacketId: 0,
        redpacketObjectId: 0
      },
      showRedPack: false,
      isSending: false
    }
  },

  components: {
    headerSwiper,
    adBox,
    pageFooter,
    loadingBox
  },
  methods: {
    getPageData (isShowToast) {
      let _this = this
      if (_this.isSending) {
        console.log('发送中...')
        return
      }
      _this.isSending = true
      if (isShowToast) {
        wx.showToast({
          title: '加载中...',
          icon: 'loading'
        })
      }

      getHomeInfo().then(res => {
        _this.isSending = false
        if (res) {
          _this.data = res
        }
        if (res.pagetitle) {
          console.log(res)
          wx.setNavigationBarTitle({
            title: res.pagetitle
          })
        }
        wx.hideToast()
        wx.stopPullDownRefresh()
      })

      // 重置状态
      delayFunc(() => {
        _this.isSending = false
        wx.hideToast()
        wx.stopPullDownRefresh()
      })
    },
    // 关闭红包
    closeRedPack () {
      this.showRedPack = false
    }
  },
  onLoad (options) {
    this.getPageData(true)
  },
  onShow () {
    this.getPageData()
    this.pagelogs = pagelogs()
  },
  // 监听页面初次渲染完成
  onReady () {
    const { barStyle, list } = cloudConfig.state.tabBarData
    if (barStyle) {
      setbarStyle({ barStyle, list })
    }
  },
  onHide () {
    pagelogs(true)
  },

  onPullDownRefresh () {
    this.data = {}
    this.getPageData()
  },
  onShareAppMessage (res) {
    const shareTitle = this.data.pagetitle || '首页'
    console.log('onShareAppMessage', res, getShareData('', shareTitle))
    return getShareData('', shareTitle)
  }
}
</script>

<style lang="scss">
@mixin content-box($w, $padding, $border-radius) {
  width: $w;
  margin: 0 auto 5px auto;
  border-radius: $border-radius;
  padding: $padding;
}
@mixin main-box {
  @include content-box(340px, 5px, 12px);
  background-color: #fff;
}

.header-nav-box {
  @include main-box;
}
.main-ad-list {
  @include main-box;
  margin: 10px auto 10px auto;
  .line {
    height: 1px;
    margin: 10px auto 0 auto;
    width: 320px;
  }
}
</style>
