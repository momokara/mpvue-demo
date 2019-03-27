const apiData = {
  api_Field: [{
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
      "params": "label",
      "desc": "输入框左侧文本",
      "type": "String",
      "default": "-"
    },
    {
      "params": "value",
      "desc": "当前输入的值",
      "type": "String | Number",
      "default": "-"
    },
    {
      "params": "type",
      "desc": "可设置为任意原生类型, 如 number idcard textarea digit",
      "type": "String",
      "default": "text"
    },
    {
      "params": "fixed",
      "desc": "如果 type 为 textarea 且在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "focus",
      "desc": "获取焦点",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "border",
      "desc": "是否显示内边框",
      "type": "Boolean",
      "default": "true"
    },
    {
      "params": "disabled",
      "desc": "是否禁用输入框",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "readonly",
      "desc": "是否只读",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "clearable",
      "desc": "是否启用清除控件",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "required",
      "desc": "是否显示表单必填星号",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "title-width",
      "desc": "标题宽度",
      "type": "String",
      "default": "90px"
    },
    {
      "params": "maxlength",
      "desc": "最大输入长度，设置为 -1 的时候不限制最大长度",
      "type": "Number",
      "default": "-1"
    },
    {
      "params": "placeholder",
      "desc": "输入框为空时占位符",
      "type": "String",
      "default": "-"
    },
    {
      "params": "placeholder-style",
      "desc": "指定 placeholder 的样式",
      "type": "String",
      "default": "-"
    },
    {
      "params": "is-link",
      "desc": "是否展示右侧箭头并开启点击反馈",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "error",
      "desc": "是否将输入内容标红",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "error-message",
      "desc": "底部错误提示文案，为空时不展示",
      "type": "String",
      "default": "''"
    },
    {
      "params": "input-align",
      "desc": "输入框内容对齐方式，可选值为 center right",
      "type": "String",
      "default": "left"
    },
    {
      "params": "autosize",
      "desc": "自适应内容高度，只对 textarea 有效",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "icon",
      "desc": "输入框尾部图标名称或图片链接，可选值见 Icon 组件",
      "type": "String",
      "default": "-"
    },
    {
      "params": "left-icon",
      "desc": "输入框左侧图标名称或图片链接，可选值见 Icon 组件",
      "type": "String",
      "default": "-"
    },
    {
      "params": "confirm-type",
      "desc": "设置键盘右下角按钮的文字，仅在 type='text' 时生效",
      "type": "String",
      "default": "done"
    },
    {
      "params": "confirm-hold",
      "desc": "点击键盘右下角按钮时是否保持键盘不收起，在 type='textarea' 时无效",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "cursor-spacing",
      "desc": "输入框聚焦时底部与键盘的距离",
      "type": "Number",
      "default": "50"
    },
    {
      "params": "adjust-position",
      "desc": "键盘弹起时，是否自动上推页面",
      "type": "Boolean",
      "default": "true"
    },
    {
      "params": "use-icon-slot",
      "desc": "是否使用 icon slot",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "use-button-slot",
      "desc": "是否使用 button slot",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "show-confirm-bar",
      "desc": "是否显示键盘上方带有”完成“按钮那一栏，只对 textarea 有效",
      "type": "Boolean",
      "default": "true"
    }
  ],

  event_Field: [{
      params: "事件",
      desc: "说明",
      return: "回调参数"
    },
    {
      params: "bind:input",
      desc: "输入内容时触发",
      return: "value: 当前输入值"
    },
    {
      params: "bind:change",
      desc: "输入内容时触发",
      return: "value: 当前输入值"
    },
    {
      params: "bind:confirm",
      desc: "点击完成按钮时触发	",
      return: "value: 当前输入值"
    },
    {
      params: "bind:click-icon",
      desc: "点击尾部图标时触发",
      return: "-"
    },
    {
      params: "bind:focus",
      desc: "输入框聚焦时触发",
      return: "value: 当前输入值; height: 键盘高度(在基础库 1.9.90 起支持)"
    },
    {
      params: "bind:blur",
      desc: "输入框失焦时触发",
      return: "value: 当前输入值; cursor: 游标位置(如果 type 不为 textarea，值为 0)"
    },
    {
      params: "bind:clear",
      desc: "点击清空控件时触发",
      return: "-"
    },
  ],
  class_Field: [{
      params: "类名",
      desc: "说明"
    },
    {
      params: "input-class",
      desc: "输入框样式类"
    },
    {
      params: "icon-class",
      desc: "右侧图标样式类"
    }
  ],
  slot_Field: [{
      params: "名称",
      desc: "说明"
    },
    {
      params: "label",
      desc: "自定义输入框标签，如果设置了label属性则不生效"
    },
    {
      params: "left-icon",
      desc: "自定义输入框头部图标，如果设置了left-icon属性则不生效"
    },
    {
      params: "icon",
      desc: "自定义输入框尾部图标，需要设置use-icon-slot属性，如果设置了icon属性则不生效"
    },
    {
      params: "button",
      desc: "自定义输入框尾部按钮，需要设置use-button-slot属性"
    }
  ]
}



export default apiData;
