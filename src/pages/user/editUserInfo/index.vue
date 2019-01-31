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
          >
        </div>
      </van-cell>

      <van-cell
        title="真实姓名"
        icon="user-o"
      >
        <div>
          <input
            type="text"
            v-model="userData.basicInfo.real_name"
            placeholder="请输入真实姓名"
          >
        </div>
      </van-cell>

      <van-cell
        title="手机号"
        icon="phone-o"
      >
        <div>
          <input
            type="text"
            v-model="userData.basicInfo.phone"
            placeholder="请输入手机号"
          >
        </div>
      </van-cell>

      <van-cell
        title="身份证"
        icon="coupon-o"
      >
        <div>
          <input
            type="text"
            v-model="userData.basicInfo.idcard_num"
            placeholder="请输入身份证"
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
import { uploadFile } from "@/utils/cloudfunc/file";
import { getAuthorization, upLoadFile } from "@/utils/cos/cosfunc";
export default {
  data() {
    return {
      userData: {
        userInfo: {},
        basicInfo: {
          real_name: "",
          phone: "",
          idcard_num: ""
        }
      }
    };
  },
  // 使用的 vue 组件
  components: {},
  computed: {
    userInfo() {
      if (basicInfo.state.userInfo) {
        this.userData.userInfo = basicInfo.state.userInfo.userInfo;
        if (basicInfo.state.userInfo) {
          console.log("全局userInfo", basicInfo.state.userInfo);
          const userbasicInfo = basicInfo.state.userInfo.basic_info
            ? basicInfo.state.userInfo.basic_info
            : "";
          if (userbasicInfo) {
            this.userData.basicInfo = userbasicInfo;
          }
        }
      }
    }
  },
  // 页面中的方法
  methods: {
    changeHeaderImg: function() {
      let _this = this;
      wx.chooseImage({
        success: chooseResult => {
          upLoadFile(chooseResult.tempFiles[0]);
        }
      });
    },
    saveUserInfo: function() {
      saveUserInfo(this.userData).then(res => {
        console.log(res);
      });
    }
  },

  // 监听页面加载
  onLoad() {},
  // 监听页面显示
  onShow() {
    console.log("demopage-onShow", this.msg);
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

  .header-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
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
