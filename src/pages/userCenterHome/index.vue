<template>
  <div class="container">
    <userInfoCard
      :userInfo="userCardInfo"
      :accountData="data.userInfo.account"
      :bgImg="data.userInfo.bgImg"
      @tapHeaderImg="tapHeaderImg()"
    >
    </userInfoCard>

    <div
      class="main-ad-list"
      v-if="data.menuList"
    >
      <div
        class="maim-ad-box"
        v-for="(item, index) in data.menuList"
        :key="index"
        :class="[{'shadow-box':item.config.isBorder}]"
      >
        <adBox
          :data="item.data"
          :config="item.config"
        ></adBox>

      </div>
    </div>

    <div class="group-box">
      <van-cell-group custom-class="cell-group">
        <van-swipe-cell>
          <view slot="left">选择</view>
          <van-cell-group>
            <van-cell
              icon="https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/default/clear_icon.png"
              title="清除本地缓存"
              value="内容"
              is-link
              @click="clearStorage()"
              @longpress="longpress()"
              id="cleanStorage"
            />
          </van-cell-group>
          <view slot="right">删除</view>
        </van-swipe-cell>

      </van-cell-group>

    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
import basicInfo from '@/store/basicInfo.js'
import { getUserCenterHomeInfo } from '@/api/api'

import userInfoCard from '@/components/userCenter/userInfoCard'
import adBox from '@/components/homeAd/adBox'

import { reLogin } from '@/api/dataTools'
import { golink } from '@/utils/tools'
import dialog from '@/../static/components/dialog-mo/dialog'

// 页面记录
import { pagelogs } from '@/utils/logs'

export default {
  data () {
    return {
      tapcleanTimes: 0,
      openid: '',
      data: {
        userInfo: {
        }
      }
    }
  },
  // 使用的 vue 组件
  components: {
    userInfoCard,
    adBox
  },
  computed: {
    userCardInfo () {
      // 直接跳转
      this.goLoginPage()
      return basicInfo.state
    }
  },
  // 页面中的方法
  methods: {
    tapHeaderImg: function () {
      // this.goLoginPage();
      console.log(' @click.stop')
      wx.navigateTo({
        url: '/pages/user/editUserInfo/main',
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        }
      })
    },
    /**
     * 跳转登录页面
     * @param {Boolean} isjump  是否跳转
     */
    goLoginPage: function (isjump) {
      // eslint-disable-next-line no-mixed-operators
      isjump = isjump || !basicInfo.state.userInfo && basicInfo.state.isgetinfo
      if (isjump) {
        // eslint-disable-next-line no-undef
        let currentPage = getCurrentPages()
        currentPage = currentPage[currentPage.length - 1]
        console.log(currentPage.route)
        wx.redirectTo({
          url: `/pages/loginpage/main?from=${currentPage.route}`
        })
      }
    },
    clearStorage: function () {
      reLogin().then(res => {
        console.log('clearStorage', res)
      })
    },
    longpress: function () {
      if (this.tapcleanTimes >= 5) {
        dialog
          .confirm({
            title: '进入调试页面',
            message:
              '您将进入数据调试页面，请勿向非工作人员透露相关信息，以免引起不必要的损失！'
          })
          .then(() => {
            golink('pages/testApiHome/main')
            // on confirm
          })
          .catch(() => {
            // on cancel
          })
      } else {
        this.tapcleanTimes++
        if (this.tapcleanTimes >= 3) {
          wx.showToast({
            title: `长按${6 - this.tapcleanTimes}次后显示调试`,
            icon: 'none'
          })
        }
      }
    },
    getPageData: function () {
      let _this = this
      getUserCenterHomeInfo().then(res => {
        _this.data = res
      })
    }
  },
  onLoad () {
    this.openid = basicInfo.state.openid
  },
  onShow () {
    this.tapcleanTimes = 0
    this.getPageData()
    pagelogs()
  },
  onHide () {
    pagelogs(true)
  }
}
</script>


<style lang="scss">
@mixin main-box {
  margin: 0 auto 5px auto;
  width: 340px;
}
@mixin shadow-box {
  box-shadow: 0 0 3px #ddd;
  background-color: #fff;
}
.shadow-box {
  @include shadow-box;
}
.group-box {
  @include main-box;
  .cell-group {
    margin-bottom: 15px;
  }
}
.main-ad-list {
  .maim-ad-box {
    @include main-box;
    width: 340px;
    border-radius: 5px;
    overflow: hidden;
    .ad-box-title {
      padding: 15px;
      box-sizing: border-box;
    }
  }
}
</style>
