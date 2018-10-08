<template>
  <div class="container">
    <v-button class='bottom' type='primary' open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="bindGetUserInfo">
      授权登录
    </v-button>
  </div>
</template>

<script>
import swiper from "@/components/swiper";
import scrollBox from "@/components/scroll-box";
import { getHomeInfo } from "@/api/api";

export default {
  data() {
    return {
      motto: "home",
      userInfo: {}
    };
  },

  components: {
    swiper,
    scrollBox
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    getUserInfo() {
      console.log("getUserInfo");

      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
              console.log(res);
            },
            fail: res => {
              console.log("fail", res);
            }
          });
        }
      });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    }
  },

  created() {
    getHomeInfo({}, function(res) {
      if (res) {
        console.log("res", res);
      }
    });
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
</script>

<style scoped>
</style>
