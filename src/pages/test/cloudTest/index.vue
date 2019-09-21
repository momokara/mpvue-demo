<template>
  <div class="cloudtest-container">
    <div v-if="isTestEnv"
         class="ta-c">
      <van-button plain
                  type="default"
                  @click="saveAS">
        AS to C
      </van-button>
      <input type="text"
             class="ta-c fsp14 fc-semi"
             v-model="aS">
    </div>
    <div class="ta-c">
      <van-button plain
                  type="default"
                  custom-class="fsp16 phone-input"
                  open-type="getPhoneNumber"
                  @getphonenumber="getPhoneNumber">
        获取手机号
      </van-button>
      <div class="ta-c fsp14 fc-grey">[{{phone}}]</div>
    </div>
    <div class="ta-c">
      <van-button plain
                  @click="saveUser"
                  type="default">
        saveUser
      </van-button>
      <van-button plain
                  @click="getUser"
                  type="default">
        getUser
      </van-button>
      <van-button plain
                  @click="getToken"
                  type="default">
        getToken
      </van-button>

    </div>
    <div class="ta-c">

      <van-button plain
                  type="default"
                  custom-class="fsp16 phone-input"
                  @click="getCode">
        获取二维码
      </van-button>
      <van-cell-group>
        <van-field :value="pagePath"
                   label="页面路径"
                   placeholder="页面路径"
                   @change="onChange($event,'pagePath')" />
        <van-field :value="sceneID"
                   label="场景id"
                   placeholder="请输入教练id"
                   @change="onChange($event,'sceneID')" />
      </van-cell-group>
      <img v-if="qrcodeUrl"
           :src="qrcodeUrl"
           class="qrcode-img"
           mode="widthFix">
    </div>
    <button @click="sendtest">testsend</button>
  </div>
</template>
<script>
// import { getSessionKeyCloud } from '@/api/cloudTools'
import { deCrypt } from '@/api/dataTools'
// deCloudID
import {
  // deCryptKey,
  getUnlimited,
  saveAS
} from '@/utils/cloudfunc/tools'

import { saveUserInfo, getUserInfo } from '@/utils/cloudfunc/getUserInfo'

import { getTempFileURL } from '@/utils/cloudfunc/file'
import cache from '@/store/cache'
import basicInfo from '@/store/basicInfo'
// 页面记录
import { pagelogs } from '@/utils/logs'
import { ajax } from '@/api/basic'

export default {
  data () {
    return {
      phone: '',
      qrcodeUrl: '',
      pagePath: 'pages/coachPlate/coachInfo/main',
      sceneID: '582162329064439808',
      aS: ''
    }
  },
  // 使用的 vue 组件
  components: {},
  watch: {
    msg (val, oldVal) {
      console.log('watchmsg', val, oldVal)
    }
  },
  computed: {
    sessionKey () {
      return cache.state.sessionKey
    },
    userInfo () {
      return basicInfo.state
    },
    isTestEnv () {
      return process.env.NODE_ENV !== 'production'
    }
  },
  // 页面中的方法
  methods: {
    getPageData: function () {
      let _this = this
      console.log(_this)
    },
    getUserInfo () {
      wx.getUserInfo({
        success: function (res) {
          console.log({ 'getUserInfo==========': res })
        },
        fail: function (err) {
          console.error({ 'getUserInfo==========err': err })
        }
      })
    },
    saveAS: function () {
      saveAS({ appSecret: this.aS }).then(res => {
        console.log('saveAS', res)
        wx.showToast({
          title: res.errMsg,
          icon: 'none'
        })
      })
    },
    getToken: function () {
      wx.cloud
        .callFunction({
          name: 'tools',
          data: {
            action: 'getToken'
          }
        })
        .then(res => {
          console.log(res)
        })
    },
    // 获取手机号
    getPhoneNumber: function (e) {
      let _this = this
      if (e.mp.detail.encryptedData) {
        console.log(e.mp, _this)
        // deCryptKey({
        //   encryptedData: e.mp.detail.encryptedData,
        //   iv: e.mp.detail.iv,
        //   sessionKey: cache.state.sessionKey
        // }).then(res => {
        //   console.log(res)
        //   _this.phone = res.phoneNumber
        // })
        deCrypt(e.mp.detail).then(res => {
          console.log(res)
          _this.phone = res.phoneNumber
        })
      } else {
        console.error('用户拒绝 getPhoneNumber:', e.mp.detail)
        _this.phone = '用户拒绝'
      }
    },
    // 获取二维码
    getCode: function () {
      let _this = this
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        mask: true
      })
      console.log(`${_this.sceneID},${_this.userInfo.userNo}`)
      getUnlimited({
        isHyaline: true,
        lineColor: { r: 185, g: 185, b: 185 },
        autoColor: false,
        page: _this.pagePath,
        scene: `${_this.sceneID},${_this.userInfo.userNo}`
      }).then(res => {
        getTempFileURL([res.fileID]).then(res => {
          wx.hideToast()
          console.log(res)
          if (res.length) {
            _this.qrcodeUrl = res[0].tempFileURL
          }
        })
      })
    },
    onChange (e, key) {
      this[key] = e.mp.detail
    },
    saveUser () {
      saveUserInfo(this.userInfo).then(res => {
        console.log('getUserInfo res', res)
      })
    },
    getUser () {
      getUserInfo().then(res => {
        console.log('getUserInfo res', res)
      })
    },
    sendtest () {
      let url =
        'https://stagingapi.xiaomabang.net/xmb_zhijia_cloud/marketing_service/pubs/ticket/inviteTicket'
      let params = { id: '593453664643842048' }
      let method = 'POST'

      ajax({ url, params, method }).catch(err => {
        console.error(err)
      })
    }
  },

  // 监听页面加载
  onLoad () {
    // getSessionKeyCloud().then(res => {
    //   console.log('getSessionKeyCloud', res)
    // })
  },
  // 监听页面显示
  onShow () {
    pagelogs()
    // getUserInfo()
  },
  // 监听页面初次渲染完成
  onReady () {},
  // 监听页面隐藏
  onHide () {
    pagelogs(true)
  },
  // 监听页面卸载
  onUnload () {},
  // 监听用户下拉动作
  onPullDownRefresh () {},
  // 页面上拉触底事件的处理函数
  onReachBottom () {},
  // 用户点击右上角分享
  onShareAppMessage () {}
}
</script>


<style lang="scss">
.cloudtest-container {
  .ta-c {
    margin-bottom: 20px;
  }
  .qrcode-img {
    width: 250px;
    margin: auto;
  }
}
</style>
