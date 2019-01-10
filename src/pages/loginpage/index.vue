<template>
  <div class="loginpage-container">
    <img
      class="icon"
      v-if="imgurl"
      :src="imgurl"
      alt=""
      mode="widthFix"
    >
    <div class="tips fz-11pt color-888">{{tip}}</div>
    <v-button
      custom-class='button'
      type='primary'
      open-type="getUserInfo"
      lang="zh_CN"
      @getuserinfo="getUserInfo"
    >
      授权登录
    </v-button>
  </div>
</template>

<script>
import Api from "@/api/api";
export default {
  data() {
    return {
      imgurl:
        "https://cdn.jiapeiyun.cn/haivit/public/image/20181017162601_890/关于粤安@3x.png",
      tip: "这里显示的tips"
    };
  },

  components: {},

  methods: {
    getUserInfo(e) {
      let data = e.mp.detail.userInfo;
      if (e.mp.detail.errMsg === "getUserInfo:ok") {
        console.log(data);
        wx.cloud.callFunction({
          // 云函数名称
          name: "saveUserInfo",
          // 传给云函数的参数
          data: {
            userinfo: data
          },
          success(res) {
            console.log("saveUserInfo success",res); 
          },
          fail(err) {
            console.error("saveUserInfo fail:", err);
          }
        });
      }
    }
  },

  created() {}
};
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
