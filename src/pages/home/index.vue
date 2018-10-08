<template>
  <div class="container">
    <button class='bottom' type='primary' open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="bindGetUserInfo">
      授权登录
    </button>
    <swiper :swiperList="swiperList"></swiper>
    <div>
      <van-tabbar-item>
        <span>自定义</span>
        <image slot="icon" :src="iconurl" class="icon" mode="aspectFit" />
      </van-tabbar-item>
    </div>
    <scrollBox :scrollList="swiperList"></scrollBox>
    <scrollBox :scrollList="swiperList2"></scrollBox>
  </div>
</template>

<script>
import swiper from "@/components/swiper";
import scrollBox from "@/components/scroll-box";
import { request } from "@/utils/request";

export default {
  data() {
    return {
      motto: "home",
      userInfo: {},
      swiperList: [
        "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
      ],
      swiperList2: [
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
      ],
      iconurl:
        "https://cdn.jiapeiyun.cn/haivit/public/image/20180926173129_102/9.25-分类图标-关于粤安.png"
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
    request(
      "project_name_deal3",
      "deal",
      "page/11000_index_jx",
      {},
      false,
      function(res) {
        if (res) {
          console.log("res", res);
        }
      }
    );
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
</script>

<style scoped>
</style>
