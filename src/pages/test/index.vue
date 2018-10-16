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
      <v-button type='primary' @click="subimage">
        上传图片
      </v-button>
      <br>
       <v-button type='primary' @click="getHomeInfo">
        getHomeInfo
      </v-button>
       <v-button type='primary' @click="doautoLogin">
        autoLogin
      </v-button>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/swiper";
import scrollBox from "@/components/scroll-box";
import api from "@/api/api";

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
    /**
     * 文件上传处理
     * @param {Array} filePaths 文件路径数组,由wx.chooseImage 产生
     * @param {Number} successUp  是成功上传的个数
     * @param {Number} failUp 上传失败的个数
     * @param {Number} i  是文件路径数组的标记
     * @param {Number} length 是文件路径数组的长度
     */
    uploadFile: function(filePaths, successUp, i, callback) {
      if (filePaths.length > 0) {
        const filePath = filePaths[i];
        wx.showLoading({
          title: "图片上传中"
        });
        api.uploadImage(filePath, res => {
          console.log(res);
          i++;
          successUp++;

          if (i < filePaths.length) {
            this.uploadFile(filePaths, successUp, i, callback);
          } else {
            wx.hideLoading();
            callback(this.uploadresFilePaths);
          }
          this.uploadresFilePaths = this.uploadresFilePaths.concat(res.url);
        });
      }
    },
    subimage: function() {
      let _this = this;
      const successUp = 0; //成功个数
      _this.uploadFile(this.tempFilePaths, successUp, 0, function(res) {
        console.log(res);
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
    }
  },

  created() {
    this.getHomeInfo()
  }
};
</script>

<style scoped>
</style>
