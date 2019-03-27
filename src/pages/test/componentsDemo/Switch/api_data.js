const apiData = {
  api: [{
      params: "参数",
      desc: "说明",
      type: "类型",
      default: "默认值"
    },
    {
      "params": "name",
      "desc": "在表单内提交时的标识符",
      "type": "String",
      "default": "-"
    },
    {
      "params": "checked",
      "desc": "开关选中状态",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "loading",
      "desc": "是否为加载状态",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "disabled",
      "desc": "是否为禁用状态",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "size",
      "desc": "开关尺寸",
      "type": "String",
      "default": "30px"
    },
    {
      "params": "active-color",
      "desc": "打开时的背景色",
      "type": "String",
      "default": "#1989fa"
    },
    {
      "params": "inactive-color",
      "desc": "关闭时的背景色",
      "type": "String",
      "default": "#fff"
    }
  ],

  event: [{
      params: "事件",
      desc: "说明",
      return: "回调参数"
    },
    {
      "params": "bind:change",
      "desc": "开关状态切换回调",
      "return": "event.detail: 是否选中开关"
    },
  ],
  class: [{
      params: "类名",
      desc: "说明"
    },
    {
      "params": "custom-class",
      "desc": "根节点样式类"
    },
    {
      "params": "node-class",
      "desc": "圆点样式类"
    },
  ],
}

export default apiData;
