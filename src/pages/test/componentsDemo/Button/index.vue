<template>
  <div class="container">
    <div class="title ">
      Button 按钮
    </div>
    <div class="demo">
      <div class="fsp16 fc-grey ">
        按钮类型
      </div>
      <div>
        <van-button type="primary" class="demo-margin-right">主要按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
      </div>
      <van-button class="demo-margin-right">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>

      <div class="fsp16 fc-grey ">
        朴素按钮
      </div>
      <van-button type="primary" plain class="demo-margin-right">朴素按钮</van-button>
      <van-button type="danger" plain>朴素按钮</van-button>

      <div class="fsp16 fc-grey ">
        禁用状态
      </div>
      <van-button type="primary" disabled class="demo-margin-right">禁用状态</van-button>
      <van-button type="danger" disabled>禁用状态</van-button>

      <div class="fsp16 fc-grey ">
        加载状态
      </div>
      <van-button loading type="primary" class="demo-margin-right" loading-class="loading" />
      <van-button loading type="danger" loading-class="loading" />

      <div class="fsp16 fc-grey ">
        按钮形状
      </div>
      <van-button type="primary" square class="demo-margin-right">方形按钮</van-button>
      <van-button type="danger" round>圆形按钮</van-button>

      <div class="fsp16 fc-grey ">
        按钮尺寸
      </div>
      <van-button size="large" block custom-class="demo-margin-bottom">大号按钮</van-button>
      <van-button class="demo-margin-right">普通按钮</van-button>
      <van-button size="small" class="demo-margin-right">小型按钮</van-button>
      <van-button size="mini">迷你按钮</van-button>

    </div>
    <!-- info -->
    <div class="info">
      <div class="title fc-semi">API 说明</div>
      <div class="title fc-grey">API</div>
      <van-row class="fsp14" v-for="tabrow in table_api" v-bind:key="tabrow">
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

      <div class="title fc-grey">外部样式类</div>
      <van-row class="fsp14" v-for="tabrow in custom_class_data" v-bind:key="tabrow">
        <van-col span="10" custom-class="table-col">
          {{tabrow.params}}
        </van-col>
        <van-col span="14" custom-class="table-col">
          {{tabrow.desc}}
        </van-col>
      </van-row>

      <div class="title fc-grey">Event</div>
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
      table_api: [
        {
          params: "参数",
          desc: "说明",
          tpye: "类型",
          default: "默认值"
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
          params: "size",
          desc: "按钮尺寸，可选值为 normal large small mini",
          tpye: "String",
          default: "normal"
        },
        {
          params: "plain",
          desc: "是否为朴素按钮",
          tpye: "Boolean",
          default: "false"
        },
        {
          params: "disabled",
          desc: "是否禁用按钮",
          tpye: "Boolean",
          default: "false"
        },
        {
          params: "loading",
          desc: "是否显示为加载状态",
          tpye: "Boolean",
          default: "false"
        },
        {
          params: "block",
          desc: "是否为块级元素",
          tpye: "Boolean",
          default: "false"
        },
        {
          params: "round",
          desc: "是否为圆形按钮",
          tpye: "Boolean",
          default: "false"
        },
        {
          params: "square",
          desc: "是否为方形按钮",
          tpye: "Boolean",
          default: "false"
        },
        {
          params: "open-type",
          desc: "微信开放能力，具体支持可参考 微信官方文档",
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
          desc: "会话来源	",
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
          desc: "显示会话内消息卡片	",
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
          desc: "点击按钮且按钮状态不为加载或禁用时触发",
          return: "-"
        },
        {
          params: "getuserinfo",
          desc:
            "用户点击该按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值同 wx.getUserInfo",
          return: "-"
        },
        {
          params: "contact",
          desc: "客服消息回调",
          return: "-"
        },
        {
          params: "error",
          desc: "当使用开放能力时，发生错误的回调",
          return: "-"
        },
        {
          params: "opensetting",
          desc: "在打开授权设置页后回调",
          return: "-"
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
        },
        {
          params: "loading-class",
          desc: "加载图标样式类"
        }
      ]
    };
  },

  // 页面中的方法
  methods: {},
  // VUE 钩子 常用

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {
    console.log("demopage-created", this.msg);
  },
  // 页面节点挂载
  mounted() {
    console.log("demopage-mounted", this.msg);
  }
};
</script>


<style lang="scss">
.demo {
  .van-button {
    margin: 5px;
  }
}
</style>
