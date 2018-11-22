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
    </div>

    <van-tabbar :active="1" @change="onChange">
      <van-tabbar-item>
        <img class="tabbar-item_icon" :slot="icon" src="../../../static/images/icon/home.png" />
        <span class="tabbar-item">首页</span>
      </van-tabbar-item>
      <van-tabbar-item icon="chat" dot>test</van-tabbar-item>
    </van-tabbar>
    <van-dialog id="van-dialog" @GetUserInfo="GetUserInfo" />
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
</style>
