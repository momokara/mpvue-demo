<template>
  <div class="container">
    <div id="msg">这里放页面内容</div>
    <demo-block
      title="基本用法"
      padding
    >
      <van-radio-group
        :value="radio1"
        data-key="radio1"
        custom-class="demo-radio-group"
        @change="onChange"
      >
        <van-radio
          name="0"
          checked-icon-name="checked"
          checkedColor="green"
          use-icon-slot
        >单选框 0
          <div slot="icon">
            <div
              v-if="radio1==0"
              class="
              radio-icon
              ta-c
              fsp14"
            >
              <van-icon
                name="checked"
                color="green"
                size="20px"
              ></van-icon>
            </div>

            <div
              v-else
              class="
              radio-icon
              ta-c
              fsp14"
            >A
            </div>

          </div>
        </van-radio>
        <van-radio
          name="1"
          checked-icon-name="clear"
          checkedColor="red"
        >单选框 1</van-radio>
        <van-radio
          name="2"
          checked-icon-name="checked"
          checkedColor="green"
        >单选框 2</van-radio>
      </van-radio-group>
    </demo-block>

  </div>
</template>
<script>
import card from "@/components/card";
export default {
  data() {
    return {
      msg: "这里是消息",
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
.radio-icon {
  width: 20px; /*px*/
  height: 20px; /*px*/
  line-height: 18px; /*px*/
  border-radius: 50%;
  box-sizing: border-box;
  border: 1px solid #ddd;
}
</style>
