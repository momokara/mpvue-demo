<template>
  <div class="loginpage-container">
    <img
      class="icon"
      :src="imgurl"
      alt=""
      mode="widthFix"
    >
    <div class="tips fz-11pt color-888">{{tip}}</div>
    <van-button
      custom-class='button'
      type='primary'
      open-type="getUserInfo"
      lang="zh_CN"
      @getuserinfo="getUserInfo"
    >
      授权登录
    </van-button>
  </div>
</template>

<script>
import Api from "@/api/api";
import { saveUserInfo } from "@/utils/cloudfunc/getUserInfo";
// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {
      imgurl:
        "https://cdn.jiapeiyun.cn/haivit/public/image/20181017162601_890/关于粤安@3x.png",
      tip: "这里显示的tips",
      fromUrl: ""
    };
  },

  components: {},

  methods: {
    getUserInfo(e) {
      let data = {};
      data.userInfo = e.mp.detail.userInfo;
      if (e.mp.detail.errMsg === "getUserInfo:ok") {
        saveUserInfo(data).then(res => {
          console.log("saveUserInfo", res, "gourl", this.fromUrl);
          if (res.openid) {
            let gourl = this.fromUrl ? this.fromUrl : "pages/home/main";
            if (this.fromUrl) {
              console.log("gourl", gourl);
              wx.redirectTo({
                url: `/${gourl}`,
                fail: () => {
                  wx.switchTab({
                    url: `/${gourl}`
                  });
                }
              });
            } else {
              wx.redirectTo({
                url: `/pages/home/main`,
                fail: () => {
                  wx.switchTab({
                    url: `/${gourl}`
                  });
                }
              });
            }
          }
        });
      }
    }
  },

  onLoad(options) {
    console.log("loginoptions", options);
    if (options.from) {
      this.fromUrl = options.from;
    }
  },
  onShow() {
    pagelogs();
  }
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
