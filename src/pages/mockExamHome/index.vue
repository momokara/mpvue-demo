<template>
  <div class="exam-home-container">
    <!-- 顶部轮播 -->
    <headerSwiper
      :swiperList="data.swiper.data"
      :config="data.swiper.config"
      @change="swiperChange"
      @animationfinish="swiperChange"
    >
    </headerSwiper>

    <div class="main-nav-box">
      <block
        v-for="(item, index) in data.nav"
        :key="index"
      >
        <examHomeNav :data="item"></examHomeNav>
      </block>

    </div>
    <!-- <van-button>去笔试</van-button>
    <van-button>去预约学车</van-button> -->
  </div>
</template>
<script>
import headerSwiper from '@/components/headerSwipers'
import examHomeNav from '@/components/exam/examHomeNav'
import { getLearnHomeInfo } from '@/api/api'

// 页面记录
import { pagelogs } from '@/utils/logs'
export default {
  data () {
    return {
      data: {
        swiper: {},
        nav: {}
      }
    }
  },
  // 使用的 vue 组件
  components: {
    headerSwiper,
    examHomeNav
  },
  // 页面中的方法
  methods: {
    getPageData: function () {
      let _this = this
      getLearnHomeInfo().then(res => {
        _this.data = res
        wx.stopPullDownRefresh()
      })
    }
  },

  onLoad () {
    this.getPageData()
  },

  // 监听页面显示
  onShow () {
    pagelogs()
  },

  // 监听页面隐藏
  onHide () {
    pagelogs(true)
  },
  onPullDownRefresh () {
    this.getPageData()
  }
}
</script>

<style lang="scss">
.main-nav-box {
  width: 350px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .exam-nav {
    margin-bottom: 15px;
  }
}
</style>
