<template>
  <div class="container">
    <div class="ta-c">
      <navigator url="/pages/test/componentsDemoMenu/main">
        <van-button type='default'>
          进入组件列表
        </van-button>
      </navigator>
    </div>
    <input type="text" v-model="msg">
    <input type="text" v-model="msg">
    <div >{{msg}}</div>
  </div>
</template>

<script>
import Api from "@/api/api";
import WxPromis from "@/utils/Wxrequest";
import dialog from "@/../static/components/dialog/dialog";
import qidlist from "@/../static/qlist";
import { log } from "util";

export default {
  data() {
    return {
      motto: "home",
      msg:"this is msg",
      userInfo: {},
      tempFilePaths: [],
      uploadresFilePaths: [],
      show: false
    };
  },

  components: {},

  methods: {
    getUserInfo(res) {
      console.log("getuserinfo", res);
    }
  },

  created() {}
};
</script>

<style scoped>
.video-box {
  width: 100%;
}
</style>
