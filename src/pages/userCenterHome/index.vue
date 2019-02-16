<template>
  <div class="container">
    <userInfoCard
      :userInfo="userInfo"
      @tapHeaderImg="tapHeaderImg()"
    >
    </userInfoCard>
    <div class="group-box">

      <van-cell-group custom-class="cell-group">
        <van-cell
          icon="https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/default/clear_icon.png"
          is-link
          title="清除本地缓存"
          @click="clearStorage()"
        />
      </van-cell-group>

      <van-cell-group custom-class="cell-group">
        <van-cell
          icon="/static/images/icon/point.png"
          is-link
          title="测试列表"
          url="/pages/testApiHome/main"
        />
      </van-cell-group>
    </div>
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
      // 直接跳转
      this.goLoginPage();
      console.log("userInfochange", basicInfo.state.islogin);
      let userinfo = basicInfo.state.userInfo.openid
        ? basicInfo.state.userInfo
        : {};
      return basicInfo.state.userInfo;
    }
  },
  // 页面中的方法
  methods: {
    tapHeaderImg: function() {
      // this.goLoginPage();

      wx.navigateTo({
        url: "/pages/user/editUserInfo/main",
        success: function(res) {
          // success
        },
        fail: function() {
          // fail
        }
      });
    },
    /**
     * 跳转登录页面
     * @param {Boolean} isjump  是否跳转
     */
    goLoginPage: function(isjump) {
      isjump = isjump
        ? isjump
        : !basicInfo.state.userInfo.userInfo && basicInfo.state.islogin;
      if (isjump) {
        let currentPage = getCurrentPages();
        currentPage = currentPage[currentPage.length - 1];
        console.log(currentPage.route);
        wx.redirectTo({
          url: `/pages/loginpage/main?from=${currentPage.route}`
        });
      }
    },
    clearStorage: function() {
      wx.clearStorageSync();
    }
  },
  onLoad() {},
  onShow() {
    pagelogs();
  }
};
</script>


<style lang="scss">
.group-box {
  width: 340px;
  margin: 0 auto;
  .cell-group {
    margin-bottom: 15px;
    box-shadow: 0 0 3px #ddd;
  }
}
</style>
