<template>
  <div class="container">
    <div class="title fz-17pt">
      Transition 动画
    </div>
    <div class="demo">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-cell title="Fade" @click="onClickFade" is-link />
      <van-cell title="Fade Up" @click="onClickFadeUp" is-link />
      <van-cell title="Fade Down" @click="onClickFadeDown" is-link />
      <van-cell title="Fade Left" @click="onClickFadeLeft" is-link />
      <van-cell title="Fade Right" @click="onClickFadeRight" is-link />
      <van-cell title="Slide Up" @click="onClickSlideUp" is-link />
      <van-cell title="Slide Down" @click="onClickSlideDown" is-link />
      <van-cell title="Slide Left" @click="onClickSlideLeft" is-link />
      <van-cell title="Slide Right" @click="onClickSlideRight" is-link />

      <van-transition :show="show" :name="name" custom-class="block">动画？</van-transition>
    </div>

    <!-- info -->
    <div class="info">
      <div class="title fz-17pt color-35">API 说明</div>
      <div class="fsp16 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp16 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_custom_class"></apiTable>

      <div class="fsp16 fc-grey">动画类型</div>
      <apiTable :tabledata="table_animation"></apiTable>
    </div>

  </div>
</template>
<script>
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";

export default {
  data() {
    return {
      show: false,
      name: "fade",
      table_api: apiData.api,
      table_animation: apiData.animation,
      table_custom_class: apiData.custom_class
    };
  },

  // 使用的 vue 组件
  components: {
    apiTable
  },

  // 页面中的方法
  methods: {
    onClickFade() {
      this._trigger("fade");
    },

    onClickFadeUp() {
      this._trigger("fade-up");
    },

    onClickFadeDown() {
      this._trigger("fade-down");
    },

    onClickFadeLeft() {
      this._trigger("fade-left");
    },

    onClickFadeRight() {
      this._trigger("fade-right");
    },

    onClickSlideUp() {
      this._trigger("slide-up");
    },

    onClickSlideDown() {
      this._trigger("slide-down");
    },

    onClickSlideLeft() {
      this._trigger("slide-left");
    },

    onClickSlideRight() {
      this._trigger("slide-right");
    },
    _trigger(name) {
      let _this = this;
      _this.name = name;
      _this.show = true;

      setTimeout(() => {
        _this.show = false;
      }, 500);
    }
  },

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {

  }
};
</script>

<style lang="scss">
.block {
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  position: fixed;
  margin: -50px 0 0 -50px;
  background-color: #1989fa;
}
</style>
