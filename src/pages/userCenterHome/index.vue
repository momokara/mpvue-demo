<template>
  <div class="container">
    <userInfoCard
      :userInfo="userInfo"
      @tapHeaderImg="tapHeaderImg()"
    >
      123
    </userInfoCard>
  </div>
</template>
<script>
import basicInfo from "../../store/basicInfo.js";
import userInfoCard from "@/components/userInfoCard";
// 页面记录
import { pagelogs } from "@/utils/logs";

export default {
  data() {
    return {
      msg: "这里是消息"
    };
  },
  // 使用的 vue 组件
  components: {
    userInfoCard
  },
  computed: {
    userInfo() {
      if (!basicInfo.state.userInfo.userInfo) {
        let currentPage = getCurrentPages();
        currentPage = currentPage[currentPage.length - 1];
        console.log(currentPage.route);
        wx.redirectTo({
          url: `/pages/loginpage/main?from=${currentPage.route}`
        });
      }
      console.log("userInfochange");
      return basicInfo.state.userInfo;
    }
  },
  // 页面中的方法
  methods: {
    tapHeaderImg: function() {
      wx.navigateTo({
        url: "/pages/user/editUserInfo/main",
        success: function(res) {
          // success
        },
        fail: function() {
          // fail
        }
      });
    }
  },
  onLoad() {
    pagelogs();
  },
  onShow() {}
};
</script>


<style lang="scss">
</style>
