<template>
  <div class="container">
    <div class="title fz-17pt">
      GoodsAction(商品导航)
    </div>
    <!-- demo -->
    <div class="goods-action-box">
      <div class="title fz-15pt color-35">基本用法</div>
      <van-goods-action>
        <van-goods-action-icon text="客服1" @click="onClickIcon">
          <image src="https://cdn.huibaoming.com/haivit/public/image/20181026120910_500/活动订单.png" />
        </van-goods-action-icon>
        <van-goods-action-icon icon="cart" text="购物车" @click="onClickIcon" />
        <van-goods-action-button text="加入购物车" type="warning" />
        <van-goods-action-button text="立即购买" />
        <van-goods-action-button text="立即购买2" type="primary" />
      </van-goods-action>
    </div>
    <div class="goods-action-box">
      <div class="title fz-15pt color-35">加上info提示</div>
      <van-goods-action>
        <van-goods-action-icon text="客服1" @click="onClickIcon">
          <image src="https://cdn.huibaoming.com/haivit/public/image/20181026120910_500/活动订单.png" />
        </van-goods-action-icon>
        <van-goods-action-icon text="客服2" @click="onClickIcon" info="s1">
          <image src="https://cdn.huibaoming.com/haivit/public/image/20181026120910_500/活动订单.png" />
        </van-goods-action-icon>
        <van-goods-action-icon icon="cart" text="购物车" @click="onClickIcon" info="66" />
        <van-goods-action-button text="加入购物车" type="warning" />
        <van-goods-action-button text="立即购买" />
      </van-goods-action>
    </div>
    <!-- info -->
    <div class="info">
      <div class="title fz-17pt color-35">API 说明</div>
      <div class="title fz-15pt color-888">GoodsActionIcon API</div>
      <van-row class="fsp14" v-for="tabrow in table_GoodsActionIcon_api" v-bind:key="tabrow">
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

      <div class="title fz-17pt color-35">GoodsActionIcon Slot</div>
      <van-row class="fsp14" v-for="tabrow in slot_data" v-bind:key="tabrow">
        <van-col span="6" custom-class="table-col">
          {{tabrow.params}}
        </van-col>
        <van-col span="18" custom-class="table-col">
          {{tabrow.desc}}
        </van-col>
      </van-row>

      <div class="title fz-15pt color-888">GoodsActionButton API</div>
      <van-row class="fsp14" v-for="tabrow in table_GoodsActionButton_api" v-bind:key="tabrow">
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
import Toast from "@/../static/components/toast/toast";
export default {
  data() {
    return {
      msg: "这里是消息",
      table_GoodsActionIcon_api: [
        {
          params: "参数",
          desc: "说明",
          tpye: "类型",
          default: "默认值"
        },
        {
          params: "text",
          desc: "按钮文字",
          tpye: "String",
          default: "-"
        },
        {
          params: "icon",
          desc: "图标类型，可选值见icon组件",
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
          params: "url",
          desc: "跳转链接",
          tpye: "String",
          default: "-"
        },
        {
          params: "link-type",
          desc: "链接跳转类型，可选值为 redirectTo switchTab reLaunch",
          tpye: "String",
          default: "navigateTo"
        },
        {
          params: "id",
          desc: "标识符",
          tpye: "String",
          default: "-"
        },
        {
          params: "type",
          desc: "按钮类型，可选值为 primary warning danger",
          tpye: "String",
          default: "default"
        },
        {
          params: "disabled",
          desc: "是否禁用按钮",
          tpye: "Boolean",
          default: "false"
        },
        {
          params: "loading",
          desc: "是否显示为加载状态	",
          tpye: "Boolean",
          default: "false"
        },
        {
          params: "open-type",
          desc: "微信开放能力，具体支持可参考 微信官方文档	",
          tpye: "String",
          default: "-"
        },
        {
          params: "app-parameter",
          desc: "打开 APP 时，向 APP 传递的参数",
          tpye: "String",
          default: "-"
        },
        {
          params: "lang",
          desc:
            "指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文",
          tpye: "String",
          default: "en"
        },
        {
          params: "session-from",
          desc: "会话来源",
          tpye: "String",
          default: "-"
        },
        {
          params: "send-message-title",
          desc: "会话内消息卡片标题",
          tpye: "String",
          default: "当前标题"
        },
        {
          params: "send-message-path",
          desc: "会话内消息卡片点击跳转小程序路径",
          tpye: "String",
          default: "当前分享路径"
        },
        {
          params: "send-message-img",
          desc: "sendMessageImg",
          tpye: "String",
          default: "截图"
        },
        {
          params: "show-message-card",
          desc: "显示会话内消息卡片",
          tpye: "String",
          default: "false"
        },
      ],
      table_GoodsActionButton_api: [
        {
          params: "参数",
          desc: "说明",
          tpye: "类型",
          default: "默认值"
        },
        {
          params: "text",
          desc: "按钮文字",
          tpye: "String",
          default: "-"
        },
        {
          params: "url",
          desc: "跳转链接",
          tpye: "String",
          default: "-"
        },
        {
          params: "link-type",
          desc: "链接跳转类型，可选值为 redirectTo switchTab reLaunch",
          tpye: "String",
          default: "navigateTo"
        },
        {
          params: "id",
          desc: "标识符",
          tpye: "String",
          default: "-"
        },
        {
          params: "type",
          desc: "按钮类型，可选值为 primary warning danger",
          tpye: "String",
          default: "default"
        },
        {
          params: "disabled",
          desc: "是否禁用按钮",
          tpye: "Boolean",
          default: "false"
        },
        {
          params: "loading",
          desc: "是否显示为加载状态	",
          tpye: "Boolean",
          default: "false"
        },
        {
          params: "open-type",
          desc: "微信开放能力，具体支持可参考 微信官方文档	",
          tpye: "String",
          default: "-"
        },
        {
          params: "app-parameter",
          desc: "打开 APP 时，向 APP 传递的参数",
          tpye: "String",
          default: "-"
        },
        {
          params: "lang",
          desc:
            "指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文",
          tpye: "String",
          default: "en"
        },
        {
          params: "session-from",
          desc: "会话来源",
          tpye: "String",
          default: "-"
        },
        {
          params: "send-message-title",
          desc: "会话内消息卡片标题",
          tpye: "String",
          default: "当前标题"
        },
        {
          params: "send-message-path",
          desc: "会话内消息卡片点击跳转小程序路径",
          tpye: "String",
          default: "当前分享路径"
        },
        {
          params: "send-message-img",
          desc: "sendMessageImg",
          tpye: "String",
          default: "截图"
        },
        {
          params: "show-message-card",
          desc: "显示会话内消息卡片",
          tpye: "String",
          default: "false"
        },
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
      ]
    };
  },
  // 使用的 vue 组件
  components: {},
  // 页面中的方法
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },

    onClickButton() {
      Toast("点击按钮");
    }
  },
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
  }
};
</script>


<style lang="scss">
.goods-action-box {
  height: 100px;
  position: relative;
  .van-goods-action {
    position: absolute;
  }
}
.table-col {
  font-size: 11pt;
  border-top: 1px solid #333;
}
</style>
