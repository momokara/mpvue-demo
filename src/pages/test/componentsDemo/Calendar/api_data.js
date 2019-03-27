const apiData = {
  api: [{
      "params": "参数",
      "desc": "说明",
      "type": "类型",
      "default": "默认值"
    },
    {
      "params": "year",
      "desc": "默认显示的年份",
      "type": "Number",
      "default": "当年年份"
    },
    {
      "params": "month",
      "desc": "默认显示的月份",
      "type": "Number",
      "default": "当年月份"
    },
    {
      "params": "markDay",
      "desc": "标记选中的时间 可以在info 中标记内容， {day:Number 日期 ,info:String 消息内容} ",
      "type": "Array",
      "default": "-"
    },
    {
      "params": "isShowDayInfo",
      "desc": "是否显示day 下面到info",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "lastMonth",
      "desc": "上一月按钮显示到文字",
      "type": "String",
      "default": "上一月"
    },
    {
      "params": "nextMonth",
      "desc": "下一月按钮显示到文字",
      "type": "String",
      "default": "下一月"
    },
    {
      "params": "weekday",
      "desc": "星期显示到内容",
      "type": "Array",
      "default": "['日', '一', '二', '三', '四', '五', '六']"
    },
    {
      "params": "monthname",
      "desc": "月份显示到内容",
      "type": "Array",
      "default": "['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']"
    },
  ],
  event: [{
      "params": "方法名",
      "desc": "说明",
      "return": "返回值"
    },
    {
      "params": "lastMonth",
      "desc": "点击上个月按钮的回调",
      "return": "type:lastMonth, year:年份 ,month:点击后到月份"
    },
    {
      "params": "nextMonth",
      "desc": "点击下个月按钮的回调",
      "return": "type:nextMonth, year:年份, month:点击后到月份"
    },
    {
      "params": "tapDay",
      "desc": "点击日期到回调",
      "return": "type:方式, tapid:点击日期到id, date:点击到日期"
    }
  ],
  slot: [{
      "params": "插槽",
      "desc": "说明"
    },
    {
      "params": "~",
      "desc": "标题到插槽"
    }
  ],
  custom_class: [{
      "params": "类名",
      "desc": "说明"
    },
    {
      "params": "custom-class",
      "desc": "根节点样式类"
    },
  ]
}



export default apiData;
