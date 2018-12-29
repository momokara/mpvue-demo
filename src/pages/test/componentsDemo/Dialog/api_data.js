const apiData = {
  func: [{
      "params": "方法名",
      "desc": "参数",
      "type": "返回值",
      "default": "介绍"
    }, {
      "params": "Dialog",
      "desc": "options",
      "type": "Promise",
      "return": "展示弹窗"
    },
    {
      "params": "Dialog .alert",
      "desc": "options",
      "type": "Promise",
      "return": "展示消息提示弹窗"
    },
    {
      "params": "Dialog .confirm",
      "desc": "options",
      "type": "Promise",
      "return": "展示消息确认弹窗"
    },
    {
      "params": "Dialog .setDefaultOptions",
      "desc": "options",
      "type": "void",
      "return": "修改默认配置，对所有 Dialog 生效"
    },
    {
      "params": "Dialog .resetDefaultOptions",
      "desc": "-",
      "type": "void",
      "return": "重置默认配置，对所有 Dialog 生效"
    },
    {
      "params": "Dialog .close",
      "desc": "-",
      "type": "void",
      "return": "关闭弹窗"
    },
    {
      "params": "Dialog .stopLoading",
      "desc": "-",
      "type": "void",
      "return": "停止按钮的加载状态"
    }
  ],
  options: [{
      "params": "参数",
      "desc": "说明",
      "type": "类型",
      "default": "默认值"
    }, {
      "params": "title",
      "desc": "标题",
      "type": "String",
      "default": "-"
    },
    {
      "params": "message",
      "desc": "内容",
      "type": "String",
      "default": "-"
    },
    {
      "params": "messageAlign",
      "desc": "内容对齐方式，可选值为left right",
      "type": "String",
      "default": "center"
    },
    {
      "params": "zIndex",
      "desc": "z-index 层级",
      "type": "Number",
      "default": "100"
    },
    {
      "params": "selector",
      "desc": "自定义选择器",
      "type": "String",
      "default": "van-dialog"
    },
    {
      "params": "showConfirmButton",
      "desc": "是否展示确认按钮",
      "type": "Boolean",
      "default": "true"
    },
    {
      "params": "showCancelButton",
      "desc": "是否展示取消按钮",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "confirmButtonText",
      "desc": "确认按钮的文案",
      "type": "String",
      "default": "确认"
    },
    {
      "params": "cancelButtonText",
      "desc": "取消按钮的文案",
      "type": "String",
      "default": "取消"
    },
    {
      "params": "confirmButtonOpenType",
      "desc": "确认按钮的微信开放能力，具体支持可参考 微信官方文档",
      "type": "String",
      "default": "-"
    },
    {
      "params": "overlay",
      "desc": "是否展示蒙层",
      "type": "Boolean",
      "default": "true"
    },
    {
      "params": "closeOnClickOverlay",
      "desc": "点击蒙层时是否关闭弹窗",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "asyncClose",
      "desc": "是否异步关闭弹窗，开启后需要手动控制弹窗的关闭",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "context",
      "desc": "选择器的选择范围，可以传入自定义组件的 this 作为上下文",
      "type": "Object",
      "default": "当前页面"
    },
    {
      "params": "transition",
      "desc": "动画名称，可选值为fade",
      "type": "String",
      "default": "scale"
    }
  ],

  api: [{
      "params": "参数",
      "desc": "说明",
      "type": "类型",
      "default": "默认值"
    },
    {
      "params": "show",
      "desc": "是否显示弹窗",
      "type": "Boolean",
      "default": "-"
    },
    {
      "params": "title",
      "desc": "标题",
      "type": "String",
      "default": "-"
    },
    {
      "params": "message",
      "desc": "内容",
      "type": "String",
      "default": "-"
    },
    {
      "params": "message-align",
      "desc": "内容对齐方式，可选值为left right",
      "type": "String",
      "default": "center"
    },
    {
      "params": "z-index",
      "desc": "z-index 层级",
      "type": "Number",
      "default": "100"
    },
    {
      "params": "show-confirm-button",
      "desc": "是否展示确认按钮",
      "type": "Boolean",
      "default": "true"
    },
    {
      "params": "show-cancel-button",
      "desc": "是否展示取消按钮",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "confirm-button-text",
      "desc": "确认按钮的文案",
      "type": "String",
      "default": "确认"
    },
    {
      "params": "cancel-button-text",
      "desc": "取消按钮的文案",
      "type": "String",
      "default": "取消"
    },
    {
      "params": "confirm-button-open-type",
      "desc": "确认按钮的微信开放能力，具体支持可参考 微信官方文档",
      "type": "String",
      "default": "-"
    },
    {
      "params": "overlay",
      "desc": "是否展示蒙层",
      "type": "Boolean",
      "default": "true"
    },
    {
      "params": "close-on-click-overlay",
      "desc": "点击蒙层时是否关闭弹窗",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "use-slot",
      "desc": "是否使用自定义内容的插槽",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "async-close",
      "desc": "是否异步关闭弹窗，开启后需要手动控制弹窗的关闭",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "transition",
      "desc": "动画名称，可选值为fade",
      "type": "String",
      "default": "scale"
    }
  ],
  event: [{
      "params": "方法名",
      "desc": "说明",
      "return": "返回值"
    },
    {
      "params": "bind:close",
      "desc": "弹窗关闭时触发",
      "return": "event.detail: 触发关闭事件的来源，"
    },
    {
      "params": "bind:confirm",
      "desc": "点击确认按钮时触发",
      "return": "-"
    },
    {
      "params": "bind:cancel",
      "desc": "点击取消按钮时触发",
      "return": "-"
    },
    {
      "params": "bind:getuserinfo",
      "desc": "点击确认按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值同 wx.getUserInfo",
      "return": "-"
    },

    {
      "params": "bind:contact",
      "desc": "客服消息回调",
      "return": "-"
    },
    {
      "params": "bind:getphonenumber",
      "desc": "获取用户手机号回调",
      "return": "-"
    },
    {
      "params": "bind:error",
      "desc": "当使用开放能力时，发生错误的回调",
      "return": "-"
    },
    {
      "params": "bind:opensetting",
      "desc": "在打开授权设置页后回调",
      "return": "-"
    }
  ],

}



export default apiData;
