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
      "params": "value",
      "desc": "当前分值",
      "type": "Number",
      "default": "-"
    },
    {
      "params": "count",
      "desc": "图标总数",
      "type": "Number",
      "default": "5"
    },
    {
      "params": "size",
      "desc": "图标大小 (px)",
      "type": "Number",
      "default": "20"
    },
    {
      "params": "color",
      "desc": "选中时的颜色",
      "type": "String",
      "default": "#ffd21e"
    },
    {
      "params": "void-color",
      "desc": "未选中时的颜色",
      "type": "String",
      "default": "#c7c7c7"
    },
    {
      "params": "icon",
      "desc": "选中时的图标名称或图片链接，可选值见 Icon 组件",
      "type": "String",
      "default": "star"
    },
    {
      "params": "void-icon",
      "desc": "未选中时的图标名称或图片链接，可选值见 Icon 组件",
      "type": "String",
      "default": "star-o"
    },
    {
      "params": "readonly",
      "desc": "是否为只读状态",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "disabled",
      "desc": "是否禁用评分",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "disabled-color",
      "desc": "禁用时的颜色",
      "type": "String",
      "default": "#bdbdbd"
    }
  ],

  event: [{
      params: "事件",
      desc: "说明",
      return: "回调参数"
    },
    {
      "params": "change",
      "desc": "当前分值变化时触发的事件",
      "return": "当前分值"
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
      "params": "icon-class",
      "desc": "图标样式类"
    },
  ]
}



export default apiData;
