const apiData = {
  api: [{
      params: "参数",
      desc: "说明",
      tpye: "类型",
      default: "默认值"
    },
    {
      params: "awardList",
      desc: "奖品列表",
      tpye: "Array",
      default: "[]"
    },
    {
      params: "arrImg",
      desc: "指针图",
      tpye: "String",
      default: "~"
    }
  ],
  event: [{
      params: "方法名",
      desc: "说明",
      return: "返回值"
    },
    {
      params: "play",
      desc: "点击指针时触发,点击之后即开始执行动画,没有得到结果时会一直执行",
      return: "-"
    },
    {
      params: "over",
      desc: "动画结束时触发,返回被抽中的奖品信息",
      return: "{Array}[{中奖结果}]"
    }
  ],
  slot: [{
      params: "插槽",
      desc: "说明"
    },
    {
      params: "~",
      desc: "图片插槽,自定义icon的图标"
    }
  ],
  custom_class: [{
      params: "类名",
      desc: "说明"
    },
    {
      params: "custom-class",
      desc: "根节点样式类"
    },
  ]
}

export default apiData;
