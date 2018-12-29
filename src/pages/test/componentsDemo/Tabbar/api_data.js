const apiData = {
  api_tabbar: [{
      "params": "参数",
      "desc": "说明",
      "type": "类型",
      "default": "默认值"
    },
    {
      "params": "active",
      "desc": "当前选中标签的索引",
      "type": "Number",
      "default": "-"
    },
    {
      "params": "active-color",
      "desc": "选中标签的颜色",
      "type": "String",
      "default": "#1989fa"
    },
    {
      "params": "fixed",
      "desc": "是否固定在底部",
      "type": "Boolean",
      "default": "true"
    },
    {
      "params": "z-index",
      "desc": "元素 z-index",
      "type": "Number",
      "default": "1"
    },
    {
      "params": "safe-area-inset-bottom",
      "desc": "是否适配iPhoneX",
      "type": "Boolean",
      "default": "true"
    }
  ],
  api_item: [{
      "params": "参数",
      "desc": "说明",
      "type": "类型",
      "default": "默认值"
    },
    {
      "params": "icon",
      "desc": "图标名称或图片链接，可选值见 Icon 组件",
      "type": "String",
      "default": "-"
    },
    {
      "params": "dot",
      "desc": "是否显示小红点",
      "type": "Boolean",
      "default": "-"
    },
    {
      "params": "info",
      "desc": "图标右上角提示信息",
      "type": "String | Number",
      "default": "-"
    }
  ],
  event: [{
      "params": "方法名",
      "desc": "说明",
      "return": "返回值"
    },
    {
      "params": "bind:change",
      "desc": "切换标签时触发",
      "return": "event.detail: 当前选中标签的索引-"
    }
  ],
  slot: [{
      "params": "插槽",
      "desc": "说明"
    },
    {
      "params": "icon",
      "desc": "未选中时的图标"
    },
    {
      "params": "icon-active",
      "desc": "选中时的图标"
    }
  ],
  custom_class: [{
      "params": "类名",
      "desc": "说明"
    },
    {
      "params": "custom-class",
      "desc": "根节点样式类"
    },
  ]
}



export default apiData;
