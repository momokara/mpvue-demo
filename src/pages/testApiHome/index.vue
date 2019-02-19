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
      <van-cell
        is-link
        title="发送测试请求"
        @click="sendtestrequest()"
      />
    </van-cell-group>
    <van-cell-group custom-class="cell-group">
      <van-cell title="加密信息">
        <div>
          <input
            type="text"
            v-model="crypt.data"
            placeholder="请输入需要加密的信息"
          >
        </div>
      </van-cell>
      <van-cell
        is-link
        title="加密"
        @click="encrypt()"
      />
      <van-cell
        is-link
        title="解密"
        @click="decrypt()"
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
    <van-dialog id="van-dialog" />
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
      show: false,
      crypt: {
        data: "",
        encrypt_data: ""
      }
    };
  },

  components: {},

  methods: {
    sendtestrequest: function() {
      WxPromis.ajaxAll(
        "http://www.zhijiayun.com.cn/zhijia-admin/printRequest",
        "POST",
        { data1: "hello world!" }
      ).then(res => {
        console.log(res);
        dialog
          .alert({
            title: "返回结果",
            message: JSON.stringify(res)
          })
          .then(() => {
            // on close
          });
      });
    },
    encrypt: function(data) {
      let _this = this;
      wx.cloud
        .callFunction({
          name: "docrypt",
          // 传给云函数的参数
          data: {
            type: 1,
            data: _this.crypt.data
          }
        })
        .then(res => {
          console.log("encryptRes:", res.result);
          _this.crypt.encrypt_data = res.result.res;
        });
    },
    decrypt: function(data) {
      let _this = this;
      wx.cloud
        .callFunction({
          name: "docrypt",
          // 传给云函数的参数
          data: {
            type: 2,
            data: _this.crypt.encrypt_data
          }
        })
        .then(res => {
          console.log("decryptRes:", res.result);
        });
    }
  },

  created() {},
  onShow() {
    pagelogs();
  }
};
</script>

<style scoped>
.cell-group {
  margin-bottom: 15px;
}
</style>
