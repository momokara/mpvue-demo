const apiData = {
  api: [{
      "params": "参数",
      "desc": "说明",
      "type": "类型",
      "default": "默认值"
    },
    {
      "params": "left-width",
      "desc": "左侧滑动区域宽度",
      "type": "Number",
      "default": "0",
    },
    {
      "params": "right-width",
      "desc": "右侧滑动区域宽度",
      "type": "Number",
      "default": "0",
    },
    {
      "params": "async-close",
      "desc": "是否异步关闭",
      "type": "Boolean",
      "default": "false",
    },
    {
      "params": "disabled",
      "desc": "是否禁用滑动",
      "type": "Boolean",
      "default": "false",
    }
  ],
  event: [{
      "params": "方法名",
      "desc": "说明",
      "return": "参数"
    },
    {
      "params": "click",
      "desc": "点击时触发",
      "return": "关闭时的点击位置 (left right cell outside)"
    },
    {
      "params": "close",
      "desc": "点击时触发",
      "return": "整体是一个 Object，包含 position, instance 两个 key。"
    }
  ],
  slot: [{
      "params": "插槽",
      "desc": "说明"
    },
    {
      "params": "-",
      "desc": "自定义显示内容"
    },
    {
      "params": "left",
      "desc": "左侧滑动内容"
    },
    {
      "params": "right",
      "desc": "右侧滑动内容"
    },
  ],
  func: [{
      "params": "方法名",
      "desc": "参数",
      "type": "返回值",
      "default": "介绍"
    },
    {
      "params": "open",
      "desc": "position: left | right",
      "type": "-",
      "default": "打开单元格侧边栏"
    },
    {
      "params": "close",
      "desc": "-",
      "type": "-",
      "default": "收起单元格侧边栏"
    }
  ],
  close: [{
      "params": "参数",
      "desc": "类型",
      "type": "说明"
    }, {
      "params": "position",
      "desc": "String",
      "type": "关闭时的点击位置 (left right cell outside)"
    },
    {
      "params": "instance",
      "desc": "Object",
      "type": "SwipeCell 实例"
    }
  ]
}



export default apiData;
