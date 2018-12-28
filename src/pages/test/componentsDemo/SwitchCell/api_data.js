const apiData = {
  api: [{
      params: "参数",
      desc: "说明",
      type: "类型",
      default: "默认值"
    },
    {
      "params": "columns",
      "desc": "对象数组，配置每一列显示的数据",
      "type": "Array",
      "default": "[]"
    },
    {
      "params": "show-toolbar",
      "desc": "是否显示顶部栏",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "title",
      "desc": "顶部栏标题",
      "type": "String",
      "default": "''"
    },
    {
      "params": "loading",
      "desc": "是否显示加载状态",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "value-key",
      "desc": "选项对象中，文字对应的 key",
      "type": "String",
      "default": "text"
    },
    {
      "params": "item-height",
      "desc": "选项高度",
      "type": "Number",
      "default": "44"
    },
    {
      "params": "confirm-button-text",
      "desc": "确认按钮文字",
      "type": "String",
      "default": "确认"
    },
    {
      "params": "cancel-button-text",
      "desc": "取消按钮文字",
      "type": "String",
      "default": "取消"
    },
    {
      "params": "visible-item-count",
      "desc": "可见的选项个数",
      "type": "Number",
      "default": "5"
    }
  ],

  event: [{
      params: "事件",
      desc: "说明",
      return: "回调参数"
    },
    {
      "params": "confirm",
      "desc": "点击完成按钮时触发",
      "return": "单列：选中值，选中值对应的索引"
    },
    {
      "params": "cancel",
      "desc": "点击取消按钮时触发",
      "return": "单列：选中值，选中值对应的索引"
    },
    {
      "params": "change",
      "desc": "选项改变时触发",
      "return": "单列：Picker 实例，选中值，选中值对应的索引"
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
      "params": "active-class",
      "desc": "选中项样式类"
    },
    {
      "params": "toolbar-class",
      "desc": "顶部栏样式类"
    },
    {
      "params": "column-class",
      "desc": "列样式类"
    }
  ],
  columns: [{
      params: "key",
      desc: "说明"
    },
    {
      "params": "values",
      "desc": "列中对应的备选值"
    },
    {
      "params": "defaultIndex",
      "desc": "初始选中项的索引，默认为 0"
    }
  ],
  func: [{
      params: "方法名",
      desc: "参数",
      type: "返回值",
      return: "介绍",
    },
    {
      "params": "getValues",
      "desc": "-",
      "type": "values",
      "return": "获取所有列选中的值"
    },
    {
      "params": "setValues",
      "desc": "values",
      "type": "-",
      "return": "设置所有列选中的值"
    },
    {
      "params": "getIndexes",
      "desc": "-",
      "type": "indexes",
      "return": "获取所有列选中值对应的索引"
    },
    {
      "params": "setIndexes",
      "desc": "indexes",
      "type": "-",
      "return": "设置所有列选中值对应的索引"
    },
    {
      "params": "getColumnValue",
      "desc": "columnIndex",
      "type": "value",
      "return": "获取对应列选中的值"
    },
    {
      "params": "setColumnValue",
      "desc": "columnIndex, value",
      "type": "-",
      "return": "设置对应列选中的值"
    },
    {
      "params": "getColumnIndex",
      "desc": "columnIndex",
      "type": "optionIndex",
      "return": "获取对应列选中项的索引"
    },
    {
      "params": "setColumnIndex",
      "desc": "columnIndex, optionIndex",
      "type": "-",
      "return": "设置对应列选中项的索引"
    },
    {
      "params": "getColumnValues",
      "desc": "columnIndex",
      "type": "values",
      "return": "获取对应列中所有选项"
    },
    {
      "params": "setColumnValues",
      "desc": "columnIndex, values",
      "type": "-",
      "return": "设置对应列中所有选项"
    }
  ]
}



export default apiData;
