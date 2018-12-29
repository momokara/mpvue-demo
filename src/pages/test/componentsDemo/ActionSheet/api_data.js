const apiData = {
  api: [{
      "params": "参数",
      "desc": "说明",
      "type": "类型",
      "default": "默认值"
    },
    {
      "params": "actions",
      "desc": "菜单选项",
      "type": "Array",
      "default": "[]"
    },
    {
      "params": "title",
      "desc": "标题",
      "type": "String",
      "default": "-"
    },
    {
      "params": "z-index",
      "desc": "z-index 层级",
      "type": "Number",
      "default": "100"
    },
    {
      "params": "cancel-text",
      "desc": "取消按钮文字",
      "type": "String",
      "default": "-"
    },
    {
      "params": "overlay",
      "desc": "是否显示遮罩层",
      "type": "Boolean",
      "default": "-"
    },
    {
      "params": "close-on-click-overlay",
      "desc": "点击遮罩是否关闭菜单",
      "type": "Boolean",
      "default": "-"
    },
    {
      "params": "safe-area-inset-bottom",
      "desc": "是否适配iPhoneX",
      "type": "Boolean",
      "default": "true"
    }
  ],
  event: [{
      "params": "方法名",
      "desc": "说明",
      "return": "返回值"
    },
    {
      "params": "bind:select",
      "desc": "选中选项时触发，禁用或加载状态下不会触发",
      "return": "event.detail: 选项对应的对象"
    },
    {
      "params": "bind:close",
      "desc": "关闭时触发",
      "return": "-"
    },
    {
      "params": "bind:cancel",
      "desc": "取消按钮点击时触发",
      "return": "-"
    },
  ],
  actions: [{
      "params": "key",
      "desc": "说明"
    },
    {
      "params": "name",
      "desc": "标题"
    },
    {
      "params": "subname",
      "desc": "二级标题"
    },
    {
      "params": "loading",
      "desc": "是否为加载状态"
    },
    {
      "params": "disabled",
      "desc": "是否为禁用状态"
    },
    {
      "params": "className",
      "desc": "为对应列添加额外的 class 类名"
    },
    {
      "params": "openType",
      "desc": "微信开放能力，具体支持可参考 微信官方文档",
      "undefined": "-"
    },
  ],

}



export default apiData;
