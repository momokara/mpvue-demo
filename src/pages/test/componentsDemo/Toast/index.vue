<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        文字提示
      </div>
      <van-button
        @tap="showToast"
        class="demo-margin-right"
      >文字提示</van-button>
      <van-button @tap="showLongToast">长文字提示</van-button>

      <div class="fsp16 fc-grey ">
        加载提示
      </div>
      <van-button @tap="showLoadingToast">加载提示</van-button>

      <div class="fsp16 fc-grey ">
        成功/失败提示
      </div>
      <van-button
        @tap="showSuccessToast"
        class="demo-margin-right"
      >成功提示</van-button>
      <van-button @tap="showFailToast">失败提示</van-button>

      <div class="fsp16 fc-grey ">
        高级用法
      </div>
      <van-button @tap="showCustomizedToast">高级用法</van-button>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">方法</div>
      <apiTable :tabledata="table_func"></apiTable>

      <div class="fsp14 fc-grey">Options</div>
      <apiTable :tabledata="table_option"></apiTable>

    </div>
    <van-toast id="van-toast" />
  </div>
</template>
<script>
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";
import Toast from "@/../static/components/toast/toast";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      title: "",
      table_func: apiData.func,
      table_option: apiData.option
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    showToast() {
      Toast("提示内容");
    },

    showLongToast() {
      Toast("这是一条长文字提示，超过一定字数就会换行");
    },

    showLoadingToast() {
      Toast.loading({ mask: true, message: "加载中..." });
    },

    showSuccessToast() {
      Toast.success("成功文案");
    },

    showFailToast() {
      Toast.fail("失败提示");
    },

    showCustomizedToast(duration) {
      const text = second => `倒计时 ${second} 秒`;
      const toast = Toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: "spinner",
        message: text(3)
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.setData({ message: text(second) });
        } else {
          clearInterval(timer);
          Toast.clear();
        }
      }, 1000);
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
