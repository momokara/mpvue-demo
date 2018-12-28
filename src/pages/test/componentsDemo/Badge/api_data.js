const apiData = {
  api_BadgeGroup: [{
      params: "参数",
      desc: "说明",
      type: "类型",
      default: "默认值"
    },
    {
      "params": "active",
      "desc": "选中badge的索引",
      "type": "String | Number",
      "default": "0"
    },

  ],
  api_Badge: [{
      params: "参数",
      desc: "说明",
      type: "类型",
      default: "默认值"
    },
    {
      "params": "title",
      "desc": "内容",
      "type": "String",
      "default": " "
    },
    {
      "params": "info",
      "desc": "提示消息	",
      "type": "String | Number",
      "default": " "
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

  ],
}



export default apiData;
