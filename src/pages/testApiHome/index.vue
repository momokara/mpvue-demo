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
      <v-button type='primary' @click="autoLogin">
        自动登录
      </v-button>
      <br>
      <v-button type='primary' @click="getHomeInfo">
        获取首页信息
      </v-button>
      <v-button type='primary' @click="showalert">
        弹出窗口
      </v-button>
    </div>
    <video class="video-box" src="https://cdn.huibaoming.com/haivit/public/image/20181108110347_150/7867e1428c1f76.mp4"></video>
    <van-tabbar :active="1" @change="onChange">
      <van-tabbar-item>
        <img class="tabbar-item_icon" :slot="icon" src="../../../static/images/icon/home.png" />
        <span class="tabbar-item">首页</span>
      </van-tabbar-item>
      <van-tabbar-item icon="chat" dot>test</van-tabbar-item>
    </van-tabbar>
    <van-dialog id="van-dialog" @GetUserInfo="GetUserInfo" />
    <!-- 弹出层 -->
    <van-popup :show="show" @close="onClose">
      内容11111111111111111111111
    </van-popup>
  </div>
</template>

<script>
import Api from "@/api/api";
import dialog from "@/../static/components/dialog/dialog";

export default {
  data() {
    return {
      motto: "home",
      userInfo: {},
      tempFilePaths: [],
      uploadresFilePaths: [],
      show: false
    };
  },

  components: {},

  methods: {
    autoLogin() {
      return Api.autoLogin().then(res => {
        return res;
      });
    },
    getHomeInfo() {
      return Api.gethomeInfo().then(res => {
        return res;
      });
    },
    GetUserInfo(res) {
      console.log("getuserinfo", res);
    },
    onChange(event) {
      console.log(event);
    },
    showalert() {
      this.show = true;
      // dialog
      //   .alert({
      //     title: "标题",
      //     message: "弹窗内容"
      //   })
      //   .then(() => {
      //     // on close
      //   });
    },
    onClose() {
      this.show = false;
      console.log('close')
    }
  },

  created() {
    // this.autoLogin().then(res => {
    //   console.log(res);
    //   return res;
    // });
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
.video-box {
  width: 100%;
}
</style>
