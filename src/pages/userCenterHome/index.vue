<template>
  <div class="container">
    <userInfoCard
      :userInfo="userCardInfo"
      @tapHeaderImg="tapHeaderImg()"
    >
    </userInfoCard>
    <div class="group-box">

      <van-cell-group custom-class="cell-group">
        <van-swipe-cell>
          <view slot="left">选择</view>
          <van-cell-group>
            <van-cell
              icon="https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/default/clear_icon.png"
              title="清除本地缓存"
              value="内容"
              is-link
              @click="clearStorage()"
              @longpress="longpress()"
              id="cleanStorage"
            />
          </van-cell-group>
          <view slot="right">删除</view>
        </van-swipe-cell>

      </van-cell-group>

      <van-cell-group custom-class="cell-group">

      </van-cell-group>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
import basicInfo from "../../store/basicInfo.js";
import userInfoCard from "@/components/userInfoCard";
import { reLogin } from "@/api/dataTools";
import { golink } from "@/utils/tools";
import dialog from "@/../static/components/dialog-mo/dialog";

// 页面记录
import { pagelogs } from "@/utils/logs";

export default {
  data() {
    return {
      tapcleanTimes: 0,
      openid: ""
    };
  },
  // 使用的 vue 组件
  components: {
    userInfoCard
  },
  computed: {
    userCardInfo() {
      // 直接跳转
      this.goLoginPage();
      return basicInfo.state;
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
        : !basicInfo.state.userInfo && basicInfo.state.isgetinfo;
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
      reLogin().then(res => {
        console.log("clearStorage", res);
      });
    },
    longpress: function() {
      if (this.tapcleanTimes >= 5) {
        dialog
          .confirm({
            title: "进入调试页面",
            message:
              "您将进入数据调试页面，请勿向非工作人员透露相关信息，以免引起不必要的损失！"
          })
          .then(() => {
            golink("pages/testApiHome/main");
            // on confirm
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.tapcleanTimes++;
        if (this.tapcleanTimes >= 3) {
          wx.showToast({
            title: `长按${6 - this.tapcleanTimes}次后显示调试`,
            icon: "none"
          });
        }
      }
    }
  },
  onLoad() {
    this.openid = basicInfo.state.openid;
  },
  onShow() {
    this.tapcleanTimes = 0;

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
