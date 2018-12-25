<template>
  <div class="container">
    <div class="title ">
      Radio 单选框
    </div>
    <div class="demo fsp14">
      <van-radio-group
        :value="radio1"
        data-key="radio1"
        @change="onChange"
      >
        <van-radio name="0">单选框 一般用法 </van-radio>
        <van-radio
          name="1"
          checkedColor="red"
        >单选框 checkedColor="red"</van-radio>
        <van-radio
          name="2"
          checked-icon-name="checked"
          checkedColor="green"
        >单选框 2</van-radio>
      </van-radio-group>
    </div>
  </div>
</template>
<script>
import card from "@/components/card";
export default {
  data() {
    return {
      radio1: "1"
    };
  },
  // 使用的 vue 组件
  components: {},
  // 页面中的方法
  methods: {
    onChange: function(e) {
      console.log(e.mp.detail);
      this[e.mp.currentTarget.dataset.key] = e.mp.detail;
    }
  },
  // VUE 钩子 常用

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {
    console.log("demopage-created", this.msg);
  }
};
</script>


<style lang="scss">
</style>
