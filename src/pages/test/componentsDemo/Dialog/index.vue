<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        消息提示
      </div>
      <van-button
        plain
        type="primary"
        class="demo-margin-right"
        @click="onClickAlert"
      >
        消息提示
      </van-button>
      <van-button
        plain
        type="primary"
        @click="onClickAlert2"
      >
        无标题提示
      </van-button>

      <div class="fsp16 fc-grey ">
        消息确认
      </div>
      <van-button
        plain
        type="primary"
        @click="onClickConfirm"
      >
        消息确认
      </van-button>

      <div class="fsp16 fc-grey ">
        组件调用
      </div>
      <van-button
        plain
        type="danger"
        @click="showCustomDialog"
      >
        组件调用
      </van-button>

      <van-dialog
        use-slot
        async-close
        :show="show"
        show-cancel-button
        @close="onClose"
        confirm-button-open-type="getUserInfo"
        @getuserinfo="getUserInfo"
      >
        <van-field
          :value="username"
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field
          :value="password"
          type="password"
          label="密码"
          :border="false"
          placeholder="请输入密码"
        />
      </van-dialog>

      <van-dialog id="van-dialog" />
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">方法</div>
      <apiTable :tabledata="table_func"></apiTable>

      <div class="fsp14 fc-grey">Options</div>
      <apiTable :tabledata="table_options"></apiTable>

      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">Event</div>
      <apiTable :tabledata="table_event"></apiTable>

    </div>
  </div>
</template>
<script>
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";
import Dialog from "@/../static/components/dialog/dialog";
const message = "yooo";
export default {
  data() {
    return {
      title: "",
      show: false,
      username: "",
      password: "",
      table_func: apiData.func,
      table_options: apiData.options,
      table_api: apiData.api,
      table_event: apiData.event,
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    showCustomDialog() {
      this.show = true;
    },

    onClickAlert() {
      Dialog.alert({
        title: "标题",
        message
      });
    },

    getUserInfo(event) {
      console.log(event.detail);
    },

    onClickAlert2() {
      Dialog.alert({
        message
      });
    },

    onClickConfirm() {
      Dialog.confirm({
        title: "confirm标题",
        message
      })
        .then(res => {
          console.log("confirm yes", res);
        })
        .catch(res => {
          console.log("cancel", res);
        });
    },

    onClose(event) {
      let _this = this;
      if (event.mp.detail === "confirm") {
        setTimeout(() => {
          _this.show = false;
        }, 1000);
      } else {
        _this.show = false;
      }
    }
  },

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  onLoad(option) {
    if (option) {
      this.title = option.label;
    }
  }
};
</script>


<style lang="scss">
</style>
