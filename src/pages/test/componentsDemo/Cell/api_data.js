const apiData = {
  api_CellGroup: [{
      params: "参数",
      desc: "说明",
      tpye: "类型",
      default: "默认值"
    },
    {
      params: "border",
      desc: "是否显示外边框",
      tpye: "Boolean",
      default: "true"
    }
  ],
  custom_class_CellGroup: [{
      params: "类名",
      desc: "说明"
    },
    {
      params: "custom-class",
      desc: "根节点样式类"
    }
  ],
  api_Cell: [{
      params: "参数",
      desc: "说明",
      tpye: "类型",
      default: "默认值"
    },
    {
      params: "icon",
      desc: "左侧图标，可选值见 Icon 组件",
      tpye: "String",
      default: "-"
    },
    {
      params: "title",
      desc: "左侧标题",
      tpye: "String | Number",
      default: "-"
    },
    {
      params: "title-width",
      desc: "标题宽度，须包含单位",
      tpye: "String",
      default: "-"
    },
    {
      params: "value",
      desc: "右侧内容",
      tpye: "String | Number",
      default: "-"
    },
    {
      params: "label",
      desc: "标题下方的描述信息",
      tpye: "String",
      default: "-"
    },
    {
      params: "border",
      desc: "是否显示下边框",
      tpye: "Boolean",
      default: "true"
    },
    {
      params: "center",
      desc: "是否使内容垂直居中",
      tpye: "Boolean",
      default: "false"
    },
    {
      params: "url",
      desc: "跳转链接",
      tpye: "String",
      default: "-"
    },
    {
      params: "link-type",
      desc: "链接跳转类型，可选值为redirectTo switchTab reLaunch",
      tpye: "String",
      default: "navigateTo"
    },
    {
      params: "clickable",
      desc: "是否开启点击反馈",
      tpye: "Boolean",
      default: "false"
    },
    {
      params: "is-link",
      desc: "是否展示右侧箭头并开启点击反馈	",
      tpye: "Boolean",
      default: "false"
    },
    {
      params: "required",
      desc: "是否显示表单必填星号",
      tpye: "Boolean",
      default: "false"
    },
    {
      params: "arrow-direction",
      desc: "箭头方向，可选值为 left up down",
      tpye: "String",
      default: "-"
    },
  ],
  event_Cell: [{
      params: "方法名",
      desc: "说明",
      return: "返回值"
    },
    {
      params: "click",
      desc: "点击 cell 时触发",
      return: "-"
    },

  ],
  slot_Cell: [{
      params: "名称",
      desc: "说明"
    },
    {
      params: "-",
      desc: "自定义显示内容"
    },
    {
      params: "icon",
      desc: "自定义icon，如果设置了icon属性则不生效"
    },
    {
      params: "title",
      desc: "自定义title，如果设置了title属性则不生效"
    },
    {
      params: "right-icon",
      desc: "自定义右侧按钮，默认是arrow，如果设置了is-link属性则不生效"
    },
  ],
  custom_class_Cell: [{
      params: "类名",
      desc: "说明"
    },
    {
      params: "custom-class",
      desc: "根节点样式类"
    },
    {
      params: "loading-class",
      desc: "加载图标样式类"
    }
  ]
}



export default apiData;
