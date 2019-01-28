<template>
  <div class="container">
    <userInfoCard :userInfo="userInfo"></userInfoCard>

  </div>
</template>
<script>
import basicInfo from "../../store/basicInfo.js";
import userInfoCard from "@/components/userInfoCard";
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
      console.log("userInfochange")
      return basicInfo.state.userInfo;
    }
  },
  // 页面中的方法
  methods: {},

  onShow() {
    console.log("demopage-onShow", this.msg);
  }
};
</script>


<style lang="scss">
</style>
