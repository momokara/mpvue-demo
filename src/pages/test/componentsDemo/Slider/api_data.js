const apiData = {
  api: [{
      params: "参数",
      desc: "说明",
      type: "类型",
      default: "默认值"
    },
    {
      "params": "value",
      "desc": "当前进度百分比，取值范围为 0-100",
      "type": "Number",
      "default": "0"
    },
    {
      "params": "disabled",
      "desc": "是否禁用滑块",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "max",
      "desc": "最大值",
      "type": "Number",
      "default": "100"
    },
    {
      "params": "min",
      "desc": "最小值",
      "type": "Number",
      "default": "0"
    },
    {
      "params": "step",
      "desc": "步长",
      "type": "Number",
      "default": "1"
    },
    {
      "params": "bar-height",
      "desc": "进度条高度",
      "type": "String",
      "default": "2px"
    },
    {
      "params": "active-color",
      "desc": "进度条激活态颜色",
      "type": "String",
      "default": "#1989fa"
    },
    {
      "params": "inactive-color",
      "desc": "进度条默认颜色",
      "type": "String",
      "default": "#e5e5e5"
    }
  ],

  event: [{
      params: "事件",
      desc: "说明",
      return: "回调参数"
    },
    {
      "params": "bind:drag",
      "desc": "拖动进度条时触发",
      "return": "event.detail.value: 当前进度"
    },
    {
      "params": "bind:change",
      "desc": "进度值改变后触发",
      "return": "event.detail: 当前进度"
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
  ],
}



export default apiData;
