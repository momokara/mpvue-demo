<template>
  <div class="loginpage-container">
    <img class="icon"
         :src="imgurl"
         alt=""
         mode="widthFix">
    <div class="tips fz-11pt color-888">{{tip}}</div>
    <van-button custom-class='button'
                type='primary'
                open-type="getUserInfo"
                lang="zh_CN"
                @getuserinfo="getUserInfo">
      {{btnText}}
    </van-button>
  </div>
</template>

<script>
import basicInfo from '@/store/basicInfo.js'
import config from '@/config.js'

import { saveEditUser } from '@/api/api'
// 页面记录
import { pagelogs } from '@/utils/logs'
export default {
  data () {
    return {
      imgurl: config.defaultData.loginPageIcon,
      tip: config.defaultData.loginPageTips,
      btnText: config.defaultData.loginPageButtionText,
      fromUrl: ''
    }
  },

  components: {},

  methods: {
    getUserInfo (e) {
      let _this = this
      let data = {}
      data.userInfo = e.mp.detail.userInfo
      let savedata = data.userInfo
      if (e.mp.detail.errMsg === 'getUserInfo:ok') {
        saveEditUser(savedata).then(res => {
          if (res.code === 200) {
            basicInfo.commit('updataByKey', data)
            wx.setStorageSync('openid', basicInfo.state)
            _this.jumpLink()
          }
        })
      }
    },
    jumpLink: function () {
      let gourl = this.fromUrl ? this.fromUrl : 'pages/home/main'
      console.log('gourl', gourl)
      wx.redirectTo({
        url: `/${gourl}`,
        fail: () => {
          wx.switchTab({
            url: `/${gourl}`
          })
        }
      })
    }
  },

  onLoad (options) {
    console.log('loginoptions', options)
    if (options.from) {
      this.fromUrl = options.from
    }
  },
  onShow () {
    pagelogs()
  },
  onHide () {
    pagelogs(true)
  }
}
</script>

<style lang="scss">
.loginpage-container {
  text-align: center;
  .icon {
    width: 300rpx;
    margin-top: 120rpx;
  }
  .tips {
    margin: 50rpx auto;
  }
  .button {
    width: 660rpx;
  }
}
</style>
