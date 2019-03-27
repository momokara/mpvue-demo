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
      "desc": "输入值",
      "type": "String | Number",
      "default": "最小值"
    },
    {
      "params": "min",
      "desc": "最小值",
      "type": "String | Number",
      "default": "1"
    },
    {
      "params": "max",
      "desc": "最大值",
      "type": "String | Number",
      "default": "-"
    },
    {
      "params": "step",
      "desc": "步数",
      "type": "String | Number",
      "default": "1"
    },
    {
      "params": "integer",
      "desc": "是否只允许输入整数",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "disabled",
      "desc": "是否禁用",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "disable-input",
      "desc": "是否禁用input框",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "async-change",
      "desc": "异步变更，为 true 时input值不变化，仅触发事件",
      "type": "Boolean",
      "default": "false"
    }
  ],

  event: [{
      params: "事件",
      desc: "说明",
      return: "回调参数"
    },
    {
      "params": "bind:change",
      "desc": "当绑定值变化时触发的事件",
      "return": "event.detail: 当前输入的值"
    },
    {
      "params": "bind:overlimit",
      "desc": "点击不可用的按钮时触发",
      "return": "-"
    },
    {
      "params": "bind:plus",
      "desc": "点击增加按钮时触发",
      "return": "-"
    },
    {
      "params": "bind:minus",
      "desc": "点击减少按钮时触发",
      "return": "-"
    },
    {
      "params": "bind:blur",
      "desc": "输入框失焦时触发",
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
      "params": "input-class",
      "desc": "输入框样式类"
    },
    {
      "params": "plus-class",
      "desc": "加号按钮样式类"
    },
    {
      "params": "minus-class",
      "desc": "减号按钮样式类"
    }
  ],

}



export default apiData;
