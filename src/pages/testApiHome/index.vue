<template>
  <div class="container">
    <v-button class='bottom' type='primary' open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="bindGetUserInfo">
      授权登录
    </v-button>
    <div>
      <img v-for="(item,index) in tempFilePaths" :key="index" :src="item" alt="" srcset="">
      <v-button type='primary' open-type="getUserInfo" @click="addImage">
        添加图片
      </v-button>
      <br>
       <v-button type='primary' @click="getHomeInfo">
        getHomeInfo
      </v-button>
       <v-button type='primary' @click="doautoLogin">
        autoLogin
      </v-button>
       <br>
       <v-button type='primary' @click="promiseRequest">
        testpromise
      </v-button>
       <v-button type='primary' @click="subimage">
        subimage
      </v-button>
       <v-button type='primary' @click="uploadImgs">
        uploadImgs
      </v-button>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/swiper";
import scrollBox from "@/components/scroll-box";
import api from "@/api/api";
import { request, uploadImg, uploadImgs } from "@/utils/Wxrequest";
export default {
  data() {
    return {
      motto: "home",
      userInfo: {},
      tempFilePaths: [],
      uploadresFilePaths: []
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
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
              console.log("登录返回的userinfo", res);
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
    },
    // 选择图片
    addImage: function(e) {
      wx.chooseImage({
        count: 6,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: res => {
          console.log(res.tempFilePaths);
          this.tempFilePaths = this.tempFilePaths.concat(res.tempFilePaths);
          console.log(this.tempFilePaths);
        }
      });
    },
    /**
     * 删除图片
     * @param {*} index 图片序号
     */ deleteImage: function(event) {
      var index = event.currentTarget.dataset.id;
      var tempFilePaths = this.data.tempFilePaths;
      tempFilePaths.splice(index, 1);
      this.setData({
        tempFilePaths: tempFilePaths
      });
    },
    // 批量上传图片
    uploadImgs() {
      uploadImgs(this.tempFilePaths).then(res => {
        console.log("uploadImgs", res);
      });
    },
    doautoLogin() {
      api.userAutoLogin({}, function(userinfo) {
        console.log("userautoLogin", userinfo);
      });
    },
    getHomeInfo() {
      api.getHomeInfo({}, function(res) {
        if (res) {
          console.log("请求回来的res", res);
        }
      });
    },
    promiseRequest() {
      const _requestUrl = {
        folder_name: "project_name_deal3",
        module: "deal",
        action: "page/11000_index_jx"
      };
      request(_requestUrl, {})
        .then(res => {
          console.log("res1", res);
          return request(_requestUrl, {});
        })
        .then(res => {
          console.log("res2", res);
        });
    }
  },

  created() {
    // this.getHomeInfo();
  }
};
</script>

<style scoped>
</style>
