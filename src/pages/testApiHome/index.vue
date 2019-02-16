<template>
  <div class="container">

    <van-cell-group custom-class="cell-group">
      <van-cell
        is-link
        title="进入组件列表"
        url="/pages/test/componentsDemoMenu/main"
      />
      <van-cell
        is-link
        title="counter Demo VueX"
        url="/pages/test/counter/main"
      />
      <van-cell
        is-link
        title="Logs"
        url="/pages/test/logs/main"
      />
    </van-cell-group>

    <div class="demo ">
      <div class="fsp16 fc-grey">
        双向数据绑定
      </div>
      <div class="fsp14">
        <input
          type="text"
          v-model="msg"
        >
        <input
          type="text"
          v-model="msg"
        >
        <div>{{msg}}</div>
      </div>

    </div>

  </div>
</template>

<script>
import Api from "@/api/api";
import WxPromis from "@/utils/Wxrequest";
import dialog from "@/../static/components/dialog/dialog";
import qidlist from "@/../static/qlist";
import { log } from "util";
// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {
      motto: "home",
      msg: "this is msg",
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

  created() {},
  onShow() {
    pagelogs();
  }
};
</script>

<style scoped>
.video-box {
  width: 100%;
}
</style>
