<template>
  <div class="container">
    <van-cell-group custom-class="cell-group">
      <van-cell
        v-if="isTestEnv"
        is-link
        title="进入组件列表"
        url="/pages/test/componentsDemoMenu/main"
      />
      <van-cell
        v-if="isTestEnv"
        is-link
        title="counter Demo VueX"
        url="/pages/test/counter/main"
      />
      <van-cell
        is-link
        title="Logs"
        url="/pages/user/logs/main"
      />
      <van-cell
        is-link
        title="查看当前数据"
        url="/pages/user/watchData/main"
      />

      <van-cell title="测试请求地址">
        <van-radio-group
          :value="testreqtype"
          @change="reqTypeChange"
        >
          <van-radio name="GET">GET</van-radio>
          <van-radio name="POST">POST</van-radio>
        </van-radio-group>
      </van-cell>
      <van-cell title="测试请求地址">
        <div>
          <textarea
            class="test-data-area"
            type="text"
            v-model="testurl"
            placeholder="测试请求地址"
          ></textarea>
        </div>
      </van-cell>

      <van-cell
        is-link
        title="发送测试请求"
        @click="sendtestrequest()"
      />
    </van-cell-group>
    <van-cell-group
      custom-class="cell-group"
      v-if="isTestEnv"
    >
      <van-cell title="加密信息">
        <div>
          <textarea
            class="test-data-area"
            type="text"
            v-model="crypt.data"
            placeholder="请输入需要加密的信息"
          ></textarea>
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
    <div
      class="demo"
      v-if="isTestEnv"
    >
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
import { ajax } from "@/api/api";
import WxPromis from "@/utils/Wxrequest";
import { encrypt, decrypt } from "@/utils/cloudfunc/crypt";
import dialog from "@/../static/components/dialog/dialog";
import qidlist from "@/../static/qlist";

// 页面记录
import { pagelogs } from "@/utils/logs";

export default {
  data() {
    return {
      isTestEnv: false,
      msg: "this is msg",
      testurl: "",
      testreqtype: "GET",
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
      // console.log(this.testdata);
      // let testdata = JSON.parse(this.testdata);
      // console.log(testdata);
      ajax(this.testurl, this.testreqtype)
        .then(res => {
          console.log(res);
          dialog
            .alert({
              title: "返回结果",
              message: JSON.stringify(res)
            })
            .then(() => {
              // on close
            });
        })
        .catch(err => {
          dialog
            .alert({
              title: "返回结果",
              message: JSON.stringify(err)
            })
            .then(() => {
              // on close
            });
        });
    },
    reqTypeChange: function(e) {
      this.testreqtype = e.mp.detail;
    },
    encrypt: function() {
      let _this = this;
      encrypt(_this.crypt.data).then(res => {
        console.log("encryptRes:", res.result.res);
        _this.crypt.encrypt_data = res.result.res;
      });
    },
    decrypt: function(data) {
      let _this = this;
      decrypt(_this.crypt.encrypt_data).then(res => {
        console.log("解密结果:", res);
      });
    }
  },

  created() {},
  onShow() {
    this.isTestEnv = process.env.NODE_ENV !== "production";
    pagelogs();
  },
  onHide() {
    pagelogs(true);
  }
};
</script>

<style scoped>
.cell-group {
  margin-bottom: 15px;
}
.test-data-area {
  width: 100%;
}
</style>
