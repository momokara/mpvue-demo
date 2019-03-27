const apiData = {
  api: [{
      "params": "参数",
      "desc": "说明",
      "type": "类型",
      "default": "默认值"
    },
    {
      "params": "price",
      "desc": "价格（单位分）",
      "type": "Number",
      "default": "-"
    },
    {
      "params": "label",
      "desc": "价格文案",
      "type": "String",
      "default": "合计："
    },
    {
      "params": "button-text",
      "desc": "按钮文字",
      "type": "String",
      "default": "-"
    },
    {
      "params": "button-type",
      "desc": "按钮type",
      "type": "String",
      "default": "danger"
    },
    {
      "params": "tip",
      "desc": "提示文案",
      "type": "String / Boolean",
      "default": "-"
    },
    {
      "params": "disabled",
      "desc": "是否禁用按钮",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "loading",
      "desc": "是否显示加载中的按钮",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "currency",
      "desc": "货币符号",
      "type": "String",
      "default": "¥"
    }
  ],
  event: [{
      params: "方法名",
      desc: "说明",
      return: "返回值"
    },
    {
      params: "submit",
      desc: "按钮点击事件回调",
      return: "-"
    }
  ],
  slot: [{
      params: "插槽",
      desc: "说明"
    },
    {
      "params": "-",
      "desc": "自定义订单栏左侧内容"
    },
    {
      "params": "top",
      "desc": "自定义订单栏上方内容"
    },
    {
      "params": "tip",
      "desc": "提示文案中的额外操作和说明，tip 不为空时才显示"
    }
  ],
  custom_class: [{
      params: "类名",
      desc: "说明"
    },
    {
      "params": "custom-class",
      "desc": "根节点样式类"
    },
    {
      "params": "price-class",
      "desc": "价格样式类"
    },
    {
      "params": "button-class",
      "desc": "按钮样式类"
    },
    {
      "params": "bar-class",
      "desc": "订单栏样式类"
    }
  ]
}



export default apiData;
