const apiData = {
  api: [{
      params: "参数",
      desc: "说明",
      tpye: "类型",
      default: "默认值"
    },
    {
      params: "name",
      desc: "类型",
      tpye: "String",
      default: "fade"
    },
    {
      params: "show",
      desc: "是否展示组件",
      tpye: "Boolean",
      default: "true"
    },
    {
      params: "duration",
      desc: "动画时长，单位为毫秒",
      tpye: "Number",
      default: "300"
    },
    {
      params: "custom-style",
      desc: "自定义样式",
      tpye: "String",
      default: "-"
    },
  ],
  animation: [{
      params: "名称",
      desc: "说明"
    },
    {
      params: "fade",
      desc: "淡入"
    },
    {
      params: "fade-up",
      desc: "上滑淡入"
    },
    {
      params: "fade-down",
      desc: "下滑淡入"
    },
    {
      params: "fade-left",
      desc: "左滑淡入"
    },
    {
      params: "fade-right",
      desc: "右滑淡入"
    },
    {
      params: "slide-up",
      desc: "上滑进入"
    },
    {
      params: "slide-down",
      desc: "下滑进入"
    },
    {
      params: "slide-left",
      desc: "左滑进入"
    },
    {
      params: "slide-right",
      desc: "右滑进入"
    },
  ],
  custom_class: [{
      params: "类名",
      desc: "说明"
    },
    {
      params: "custom-class",
      desc: "根节点样式类"
    },
  ],
}

export default apiData;
