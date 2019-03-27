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
      "desc": "当前输入的值",
      "type": "String | Number",
      "default": "-"
    },
    {
      "params": "background",
      "desc": "搜索框背景色",
      "type": "String",
      "default": "#f2f2f2"
    },
    {
      "params": "show-action",
      "desc": "是否在搜索框右侧显示取消按钮",
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
      "params": "error",
      "desc": "是否将输入内容标红",
      "type": "Boolean",
      "default": "false"
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
      "params": "maxlength",
      "desc": "最大输入长度，设置为 -1 的时候不限制最大长度",
      "type": "Number",
      "default": "-1"
    },
    {
      "params": "use-action-slot",
      "desc": "是否使用 action slot",
      "type": "Boolean",
      "default": "false"
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
      "params": "input-align",
      "desc": "输入框内容对齐方式，可选值为 center right",
      "type": "String",
      "default": "left"
    }
  ],

  event: [{
      params: "事件",
      desc: "说明",
      return: "回调参数"
    },
    {
      "params": "bind:search",
      "desc": "确定搜索时触发",
      "return": "event.detail: 当前输入值"
    },
    {
      "params": "bind:change",
      "desc": "输入内容变化时触发",
      "return": "event.detail: 当前输入值"
    },
    {
      "params": "bind:cancel",
      "desc": "取消搜索搜索时触发",
      "return": "-"
    },
    {
      "params": "bind:focus",
      "desc": "输入框聚焦时触发",
      "return": "-"
    },
    {
      "params": "bind:blur",
      "desc": "输入框失焦时触发",
      "return": "-"
    },
    {
      "params": "bind:clear",
      "desc": "点击清空控件时触发",
      "return": "-"
    }
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
      "params": "field-class",
      "desc": "搜索框样式类"
    },
    {
      "params": "input-class",
      "desc": "输入框样式类"
    },
    {
      "params": "cancel-class",
      "desc": "取消按钮样式类"
    }
  ],
  slot: [{
      params: "名称",
      desc: "说明"
    },
    {
      "params": "action",
      "desc": "自定义搜索框右侧按钮，需要在showAction为 true 时才会显示"
    },
    {
      "params": "left-action",
      "desc": "左侧的插槽"
    }
  ],

}

export default apiData;
