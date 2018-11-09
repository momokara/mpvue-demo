<template>
  <div class="loginpage-container">
    <img class="icon" v-if="imgurl" :src="imgurl" alt="" mode="widthFix">
    <div class="tips fz-11pt color-888">{{tip}}</div>
    <v-button custom-class='button' type='primary' open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo">
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
      if (e.target.rawData) {
        Api.autoLogin()
          .then(res => {
            console.log("登录成功:", res);
            return res;
          })
          .then(res => {
            let _pageHis = getCurrentPages();
            console.log(_pageHis);
            
            if (_pageHis.length > 1 && res.nickName) {
              // 有历史记录处理
              wx.navigateBack({
                delta: 1,
                success: function() {
                  console.log("back OK");
                }
              });
            } else if (_pageHis.length <= 1 && res.nickName) {
              // 无历史记录则返回首页
              wx.switchTab({
                url: "/pages/home/main",
                success: function() {
                  console.log("go OK");
                }
              });
            }
          });
      }
    }
  },

  created() {}
};

</script>

<style lang="scss">
.loginpage-container{
  text-align: center;
  .icon{
    width: 300rpx;
    margin-top: 120rpx;
  }
  .tips{
    margin: 50rpx auto;
  }
  .button{
    width:660rpx;
  }
}
</style>
