const apiData = {
  api: [{
      params: "参数",
      desc: "说明",
      tpye: "类型",
      default: "默认值"
    },
    {
      params: "score",
      desc: "得分	",
      tpye: "String",
      default: "-"
    },
    {
      params: "full-star-img",
      desc: "整个星星到图片路径	",
      tpye: "String",
      default: "-"
    },
    {
      params: "halfStarImg",
      desc: "半个星星到图片路径	",
      tpye: "String",
      default: "-"
    },
    {
      params: "empty-star-img",
      desc: "空星星到图片路径	",
      tpye: "String",
      default: "-"
    },
    {
      params: "use-half-star",
      desc: "是否在有小数到时候显示半个星星	",
      tpye: "Boolean",
      default: "false"
    },
    {
      params: "width",
      desc: "星星宽度",
      tpye: "String",
      default: "-"
    },
    {
      params: "height",
      desc: "星星高度",
      tpye: "String",
      default: "-"
    },
    {
      params: "fontsize",
      desc: "字体大小",
      tpye: "String",
      default: "-"
    }
  ],
  event: [{
      params: "方法名",
      desc: "说明",
      return: "返回值"
    },
    {
      params: "tapstar",
      desc: "点击星星回调事件",
      return: ".detail 点击到序号"
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
