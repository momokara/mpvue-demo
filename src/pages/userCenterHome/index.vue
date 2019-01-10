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
        console.log("will go login");
        let currentPage = getCurrentPages();
        currentPage = currentPage[currentPage.length - 1];
        console.log(currentPage.route);
        wx.redirectTo({
          url: `/pages/loginpage/main?from=${currentPage.route}`
        });
      }
      return basicInfo.state.userInfo;
    }
  },
  // 页面中的方法
  methods: {},

  // 原生钩子
  // 监听页面加载
  onLoad() {
    console.log("demopage-onLoad", this.msg);
  },
  // 监听页面显示
  onShow() {
    console.log("demopage-onShow", this.msg);
  }
};
</script>


<style lang="scss">
</style>
