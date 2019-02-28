<template>
  <div class="container">
    <van-cell-group>
      <van-cell
        title="头像"
        icon="user-circle-o"
        custom-class="header-cell"
        @click="changeHeaderImg()"
      >
        <div>
          <img
            class="header-img"
            :src="userData.userInfo.avatarUrl"
            mode="aspectFill"
          />
          <van-icon
            custom-class="arror"
            name="arrow"
          />
        </div>
      </van-cell>
      <input
        type="text"
        v-model="userData.userInfo.avatarUrl"
        class="hidden"
      >
      <van-cell
        title="昵称"
        icon="contact"
      >
        <div>
          <input
            type="text"
            v-model="userData.userInfo.nickName"
            placeholder="请输入昵称"
            maxlength="16"
          >
        </div>
      </van-cell>

      <van-cell
        title="实名"
        icon="user-o"
      >
        <div>
          <input
            type="text"
            v-model="userData.basicInfo.realName"
            placeholder="请输入真实姓名"
            maxlength="16"
          >
        </div>
      </van-cell>

      <van-cell
        title="手机"
        icon="phone-o"
      >

        <div>
          <van-button
            plain
            type="default"
            size="mini"
            custom-class="fsp16 phone-input"
            open-type="getPhoneNumber"
            @getphonenumber="getPhoneNumber"
          >获取</van-button>
          <input
            type="text"
            v-model="userData.basicInfo.phone"
            placeholder="请输入手机号"
            maxlength="11"
          >
        </div>
      </van-cell>

      <van-cell
        title="身份证"
        icon="coupon-o"
        custom-class="id-card"
      >
        <div>
          <input
            type="text"
            v-model="userData.basicInfo.idcardNo"
            placeholder="请输入身份证"
            maxlength="20"
          >
        </div>
      </van-cell>

    </van-cell-group>
    <div class="btn-box">
      <van-button
        custom-class="submit-btn"
        @click="saveUserInfo()"
        type="primary"
      >提交</van-button>
    </div>

  </div>
</template>
<script>
import basicInfo from "../../../store/basicInfo.js";
import { upLoadFile } from "@/utils/cos/cosfunc";
import { saveUserInfo, deCrypt } from "@/utils/cloudfunc/getUserInfo";
import { saveEditUser } from "@/api/api";
// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {
      userData: {
        userInfo: {
          avatarUrl: "",
          nickName: ""
        },
        basicInfo: {
          realName: "",
          phone: "",
          idcardNo: ""
        }
      }
    };
  },
  // 使用的 vue 组件
  components: {},
  computed: {
    userInfo() {
      if (basicInfo.state.islogin) {
        if (basicInfo.state.userInfo.avatarUrl) {
          this.userData.userInfo = basicInfo.state.userInfo;
          if (basicInfo.state.userInfo) {
            const userbasicInfo = basicInfo.state.basicInfo
              ? basicInfo.state.basicInfo
              : {};
            if (userbasicInfo.phone) {
              this.userData.basicInfo = userbasicInfo;
            }
          }
        }
      } else {
        console.log("登录中...");
      }
    }
  },
  watch: {
    userData: {
      handler: function(val, oldval) {
        // for (const key in val) {
        //   console.log(key, val[key]);
        // }
      },
      deep: true
    },
    "userData.userInfo.nickName": function(val, oldval) {
      console.log(val, "|oldval:", oldval);
    },
    "userData.basicInfo.real_name": function(val, oldval) {
      console.log(val, "|oldval:", oldval);
    },
    "userData.basicInfo.phone": function(val, oldval) {
      console.log(val, "|oldval:", oldval);
    },
    "userData.basicInfo.idcard_num": function(val, oldval) {
      console.log(val, "|oldval:", oldval);
    }
  },
  // 页面中的方法
  methods: {
    changeHeaderImg: function() {
      let _this = this;
      wx.chooseImage({
        success: chooseResult => {
          upLoadFile(chooseResult.tempFiles[0], `header_img`).then(res => {
            console.log("url:", res);
            _this.userData.userInfo.avatarUrl = `https://${res.Location}`;
          });
        }
      });
    },
    // 获取手机号
    getPhoneNumber: function(e) {
      let _this = this;
      if (e.mp.detail.encryptedData) {
        // 解密信息
        deCrypt(e.mp.detail).then(res => {
          console.log("用户同意 getPhoneNumber:", res);
          _this.userData.basicInfo.phone = res.phoneNumber;
        });
      } else {
        console.error("用户拒绝 getPhoneNumber:", e.mp.detail);
      }
    },
    // 保存用户信息
    saveUserInfo: function() {
      let _this = this;
      const savedata = {
        avatarUrl: _this.userData.userInfo.avatarUrl,
        nickName: _this.userData.userInfo.nickName,
        realName: _this.userData.basicInfo.realName,
        phone: _this.userData.basicInfo.phone,
        idcardNo: _this.userData.basicInfo.idcardNo
      };
      saveEditUser(savedata).then(res => {
        if (res.errMsg) {
          wx.showToast({
            title: res.errMsg,
            icon: "none"
          });
        } else {
          wx.showToast({
            title: "保存成功",
            icon: "success"
          });
        }
      });
      // saveUserInfo(this.userData).then(res => {
      // });
    },
    // 验证信息
    validFormData: function() {}
  },

  // 监听页面加载
  onLoad() {},
  // 监听页面显示
  onShow() {
    pagelogs();
  }
};
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
