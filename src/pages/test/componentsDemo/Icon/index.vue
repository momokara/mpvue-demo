<template>
  <div class="container">
    <div class="title fz-17pt">
      Icon(图标)
    </div>
    <div class="demo">
      <span class="demo-cell">
        <van-icon name="success" />
      </span>
      <span class="demo-cell">
        <van-icon>
          <image src="https://cdn.huibaoming.com/haivit/public/image/20181026120910_500/活动订单.png" />
        </van-icon>
      </span>

    </div>
    <!-- info -->
    <div class="info">
      <div class="title fz-17pt color-35">API 说明</div>
      <div class="title fz-15pt color-888">API</div>
      <van-row class="fsp14" v-for="tabrow in table_Icon_api" v-bind:key="tabrow">
        <van-col span="7" custom-class="table-col">
          {{tabrow.params}}
        </van-col>
        <van-col span="8" custom-class="table-col">
          {{tabrow.desc}}
        </van-col>
        <van-col span="6" custom-class="table-col ta-c ">
          {{tabrow.tpye}}
        </van-col>
        <van-col span="3" custom-class="table-col ta-c ">
          {{tabrow.default}}
        </van-col>
      </van-row>

      <div class="title fz-17pt color-35">Slot</div>
      <van-row class="fsp14" v-for="tabrow in slot_data" v-bind:key="tabrow">
        <van-col span="6" custom-class="table-col">
          {{tabrow.params}}
        </van-col>
        <van-col span="18" custom-class="table-col">
          {{tabrow.desc}}
        </van-col>
      </van-row>

      <div class="title fz-17pt color-35">外部样式类</div>
      <van-row class="fsp14" v-for="tabrow in custom_class_data" v-bind:key="tabrow">
        <van-col span="6" custom-class="table-col">
          {{tabrow.params}}
        </van-col>
        <van-col span="18" custom-class="table-col">
          {{tabrow.desc}}
        </van-col>
      </van-row>

      <div class="title fz-17pt color-35">Event</div>
      <van-row class="fsp14" v-for="tabrow in table_func_data" v-bind:key="tabrow">
        <van-col span="6" custom-class="table-col">
          {{tabrow.params}}
        </van-col>
        <van-col span="10" custom-class="table-col">
          {{tabrow.desc}}
        </van-col>
        <van-col span="8" custom-class="table-col ta-c ">
          {{tabrow.return}}
        </van-col>
      </van-row>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "这里是消息",
      table_Icon_api: [
        {
          params: "参数",
          desc: "说明",
          tpye: "类型",
          default: "默认值"
        },
        {
          params: "name",
          desc: "图标名称	",
          tpye: "String",
          default: "-"
        },
        {
          params: "info",
          desc: "图标右上角提示信息",
          tpye: "String| Number",
          default: "-"
        },
        {
          params: "color",
          desc: "图标颜色",
          tpye: "String",
          default: "inherit"
        },
        {
          params: "size",
          desc: "图标大小，如 20px，2em",
          tpye: "String",
          default: "inherit"
        },
        {
          params: "custom-style",
          desc: "自定义样式",
          tpye: "String",
          default: "-"
        },
        {
          params: "class-prefix",
          desc: "类名前缀",
          tpye: "String",
          default: "van-icon"
        }
      ],
      table_func_data: [
        {
          params: "方法名",
          desc: "说明",
          return: "返回值"
        },
        {
          params: "click",
          desc: "按钮点击事件回调",
          return: "-"
        }
      ],
      slot_data: [
        {
          params: "插槽",
          desc: "说明"
        },
        {
          params: "~",
          desc: "图片插槽,自定义icon的图标"
        }
      ],
      custom_class_data: [
        {
          params: "类名",
          desc: "说明"
        },
        {
          params: "custom-class",
          desc: "根节点样式类"
        }
      ]
    };
  },
  // 使用的 vue 组件
  components: {},
  // 页面中的方法
  methods: {},
  // VUE 钩子 常用

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {
    console.log("demopage-created", this.msg);
  },

  // 页面数据更新之后  数据变更处理
  updated() {
    console.log("demopage-updated", this.msg);
  },
  // 原生钩子
  // 监听页面加载
  onLoad() {
    console.log("demopage-onLoad", this.msg);
  },
  // 监听页面显示
  onShow() {
    console.log("demopage-onShow", this.msg);
  },
  // 监听页面初次渲染完成
  onReady() {
    console.log("demopage-onReady", this.msg);
  },
  // 监听页面隐藏
  onHide() {
    console.log("demopage-onHide", this.msg);
  },
  // 监听页面卸载
  onUnload() {
    console.log("demopage-onUnload", this.msg);
  },
  // 监听用户下拉动作
  onPullDownRefresh() {
    console.log("demopage-onPullDownRefresh", this.msg);
  },
  // 页面上拉触底事件的处理函数
  onReachBottom() {
    console.log("demopage-onReachBottom", this.msg);
  },
  // 用户点击右上角分享
  onShareAppMessage() {
    console.log("demopage-onShareAppMessage", this.msg);
  },
  // 页面滚动
  onPageScroll() {
    console.log("demopage-onPageScroll", this.msg);
  },
  // 当前是 tab 页时，点击 tab 时触发 （mpvue 0.0.16 支持）
  onTabItemTap() {
    console.log("demopage-onTabItemTap", this.msg);
  }
};
</script>


<style lang="scss">
.demo {
  display: flex;
  .demo-cell{
    display: inline-block;
    margin: 10px;
  }
}
.table-col {
  font-size: 11pt;
  border-top: 1px solid #333;
}
</style>
