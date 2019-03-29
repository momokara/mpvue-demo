<template>
  <div class="container">
    <van-cell-group>
      <van-cell title="头像"
                icon="user-circle-o"
                custom-class="header-cell"
                @click="changeHeaderImg()">
        <div>
          <img class="header-img"
               :src="userInfo.avatarUrl"
               mode="aspectFill" />
          <van-icon custom-class="arror"
                    name="arrow" />
        </div>
      </van-cell>
      <input type="text"
             v-model="userInfo.avatarUrl"
             class="hidden">
      <van-cell title="昵称"
                icon="contact">
        <div>
          <input type="text"
                 v-model="userInfo.nickName"
                 placeholder="请输入昵称"
                 maxlength="16">
        </div>
      </van-cell>

      <van-cell title="实名"
                icon="user-o">
        <div>
          <input type="text"
                 v-model="basicInfo.realName"
                 placeholder="请输入真实姓名"
                 maxlength="16">
        </div>
      </van-cell>

      <van-cell title="手机"
                icon="phone-o">

        <div>
          <van-button plain
                      type="default"
                      size="mini"
                      custom-class="fsp16 phone-input"
                      open-type="getPhoneNumber"
                      @getphonenumber="getPhoneNumber">获取</van-button>
          <input type="text"
                 v-model="basicInfo.phone"
                 placeholder="请输入手机号"
                 maxlength="11">
        </div>
      </van-cell>

      <van-cell title="身份证"
                icon="coupon-o"
                custom-class="id-card">
        <div>
          <input type="text"
                 v-model="basicInfo.idcardNo"
                 placeholder="请输入身份证"
                 maxlength="20">
        </div>
      </van-cell>

    </van-cell-group>
    <div class="btn-box">
      <van-button custom-class="submit-btn"
                  @click="saveUserInfo()"
                  type="primary">提交</van-button>
    </div>

  </div>
</template>
<script>
import basicInfo from '@/store/basicInfo.js'
import { upLoadFile } from '@/utils/cos/cosfunc'
import { deCrypt } from '@/utils/cloudfunc/getUserInfo'
import { saveEditUser } from '@/api/api'
// 页面记录
import { pagelogs } from '@/utils/logs'
export default {
  data () {
    return {
      userInfo: {
        avatarUrl: '',
        nickName: ''
      },
      basicInfo: {
        realName: '',
        phone: '',
        idcardNo: ''
      }
    }
  },
  // 使用的 vue 组件
  components: {},
  computed: {
    userInfoStore () {
      let _userStore = basicInfo.state
      if (basicInfo.state.islogin) {
        if (_userStore.userInfo.avatarUrl) {
          this.userInfo = _userStore.userInfo
          if (_userStore.userInfo) {
            const userbasicInfo = _userStore.basicInfo
              ? _userStore.basicInfo
              : {}
            if (userbasicInfo.phone) {
              this.basicInfo = userbasicInfo
            }
          }
        }
      } else {
        console.log('登录中...')
      }
      return _userStore
    }
  },
  // 页面中的方法
  methods: {
    changeHeaderImg: function () {
      let _this = this
      wx.chooseImage({
        success: chooseResult => {
          upLoadFile(chooseResult.tempFiles[0], `header_img`).then(res => {
            _this.userInfo.avatarUrl = `https://${res.Location}`
          })
        }
      })
    },
    // 获取手机号
    getPhoneNumber: function (e) {
      let _this = this
      if (e.mp.detail.encryptedData) {
        console.log(e.mp.detail)
        // 解密信息
        deCrypt(e.mp.detail).then(res => {
          console.log('用户同意 getPhoneNumber:', res)
          _this.basicInfo.phone = res.phoneNumber
        })
      } else {
        console.error('用户拒绝 getPhoneNumber:', e.mp.detail)
      }
    },
    // 保存用户信息
    saveUserInfo: function () {
      let _this = this
      const savedata = {
        avatarUrl: _this.userInfo.avatarUrl,
        nickName: _this.userInfo.nickName,
        realName: _this.basicInfo.realName,
        phone: _this.basicInfo.phone,
        idcardNo: _this.basicInfo.idcardNo
      }
      saveEditUser(savedata).then(res => {
        // eslint-disable-next-line eqeqeq
        if (res.code !== 200) {
          wx.showToast({
            title: res.errMsg,
            icon: 'none'
          })
        } else {
          let data = {
            userInfo: basicInfo.state.userInfo
          }
          data.userInfo.avatarUrl = this.userInfo.avatarUrl
          data.userInfo.nickName = this.userInfo.nickName
          data.basicInfo.realName = this.basicInfo.realName
          data.basicInfo.phone = this.basicInfo.phone
          data.basicInfo.idcardNo = this.basicInfo.idcardNo
          basicInfo.commit('updataByKey', data)
          wx.setStorageSync('openid', basicInfo.state)
          wx.showToast({
            title: '保存成功',
            icon: 'success'
          })
        }
      })
      // saveUserInfo(this..then(res => {
      // });
    },
    // 验证信息
    validFormData: function () {}
  },

  // 监听页面加载
  onLoad () {},
  // 监听页面显示
  onShow () {
    pagelogs()
  },
  onHide () {
    pagelogs(true)
  }
}
</script>


<style lang="scss">
.container {
  .header-cell {
    .van-cell__left-icon-wrap,
    .van-cell__title {
      padding-top: 15px; /*px*/
    }
    .arror {
      float: right;
      margin: 17px 0 0 5px; /*px*/
    }
    padding-bottom: 5px; /*px*/
  }
  .id-card {
    .van-cell__value {
      flex: 2;
    }
  }
  .header-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .fsp16.phone-input {
    color: #999;

    float: left;
  }
  .btn-box {
    text-align: center;
    .submit-btn {
      margin: 15px auto;
      width: 680rpx;
    }
  }
}
</style>
