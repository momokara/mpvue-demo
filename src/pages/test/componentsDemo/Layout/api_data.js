const apiData = {
  api_row: [{
      params: "参数",
      desc: "说明",
      type: "类型",
      default: "默认值"
    },
    {
      params: "gutter",
      desc: "列元素之间的间距（单位为px）",
      type: "String | Number",
      default: "-"
    }
  ],
  api_col: [{
      params: "参数",
      desc: "说明",
      type: "类型",
      default: "默认值"
    },
    {
      params: "span",
      desc: "列元素宽度",
      type: "String | Number",
      default: "-"
    },
    {
      params: "offset",
      desc: "列元素偏移距离",
      type: "String | Number",
      default: "-"
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
  ]
}



export default apiData;
