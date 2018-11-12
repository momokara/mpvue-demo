<template>
  <div class="container">
    <div>
      <navigator url="/pages/test/componentsDemoMenu/main">
        <v-button type='default'>
          进入组件列表
        </v-button>
      </navigator>
    </div>
    <div>
      <img v-for="(item,index) in tempFilePaths" :key="index" :src="item" @click="deleteImage(index)">
      <v-button type='primary' open-type="getUserInfo" @click="addImage">
        添加图片
      </v-button>
      <v-button type='primary' @click="upLoadImgs">
        上传图片
      </v-button>
      <br>
      <v-button type='primary' @click="autoLogin">
        自动登录
      </v-button>
      <br>
      <v-button type='primary' @click="getHomeInfo">
        获取首页信息
      </v-button>
    </div>
  </div>
</template>

<script>
import Api from "@/api/api";
export default {
  data() {
    return {
      motto: "home",
      userInfo: {},
      tempFilePaths: [],
      uploadresFilePaths: []
    };
  },

  components: {},

  methods: {
    // 选择图片
    addImage: function(e) {
      wx.chooseImage({
        count: 6,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: res => {
          this.tempFilePaths = this.tempFilePaths.concat(res.tempFilePaths);
        }
      });
    },
    /**
     * 删除图片
     * @param {*} index 图片序号
     */
    deleteImage: function(index) {
      console.log(index);
      let tempFilePaths = this.tempFilePaths;
      tempFilePaths.splice(index, 1);
    },
    upLoadImgs() {
      Api.upLoadimgs(this.tempFilePaths).then(res => {
        console.log("upLoadImgs res:", res);
      });
    },
    autoLogin() {
      return Api.autoLogin().then(res => {
        return res;
      });
    },
    getHomeInfo() {
      return Api.gethomeInfo().then(res => {
        return res;
      });
    }
  },

  created() {
    // this.autoLogin()
    //   .then(res => {
    //     console.log(res);
    //     return res;
    //   })
    //   .then(res => {
    //     if (res.nickName) {
    //       return this.getHomeInfo();
    //     }
    //   })
    //   .then(res => {
    //     console.log("页面信息", res);
    //   })
    //   .catch(res => {
    //     console.log("error");
    //   });
  }
};
</script>

<style scoped>
</style>
