const apiData = {
  api: [{
      params: "参数",
      desc: "说明",
      tpye: "类型",
      default: "默认值"
    },
    {
      params: "show",
      desc: "是否显示弹出层",
      tpye: "Boolean",
      default: "false"
    },
    {
      params: "z-index",
      desc: "z-index 层级",
      tpye: "Number",
      default: "100"
    },
    {
      params: "overlay",
      desc: "是否显示背景蒙层",
      tpye: "Boolean",
      default: "true"
    },
    {
      params: "position",
      desc: "可选值为 top bottom right left",
      tpye: "String",
      default: "-"
    },
    {
      params: "duration",
      desc: "动画时长，单位为毫秒",
      tpye: "Number",
      default: "300"
    },
    {
      params: "custom-style",
      desc: "自定义弹出层样式",
      tpye: "String",
      default: "-"
    },
    {
      params: "overlay-style",
      desc: "自定义背景蒙层样式",
      tpye: "String",
      default: "-"
    },
    {
      params: "close-on-click-overlay",
      desc: "点击蒙层是否关闭 Popup",
      tpye: "Boolean",
      default: "true"
    },
  ],
  event: [{
      params: "方法名",
      desc: "说明",
      return: "返回值"
    },
    {
      params: "close",
      desc: "蒙层关闭时触发",
      return: "-"
    },
    {
      params: "click-overlay",
      desc: "点击蒙层时触发",
      return: "-"
    }
  ],
  slot: [{
      params: "插槽",
      desc: "说明"
    },
    {
      params: "-",
      desc: "弹出显示到内容"
    }
  ],
  custom_class: [{
      params: "类名",
      desc: "说明"
    },
    {
      params: "custom-class",
      desc: "根节点样式类"
    }
  ],
}

export default apiData;
