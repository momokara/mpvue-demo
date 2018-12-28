const apiData = {
  api_DatetimePicker: [{
      params: "参数",
      desc: "说明",
      tpye: "类型",
      default: "默认值"
    },
    {
      params: "value",
      desc: "当前选中值",
      tpye: "String | Number",
      default: "-"
    },
    {
      params: "type",
      desc: "类型，可选值为 date time year-month 不建议动态修改",
      tpye: "String",
      default: "datetime"
    },
    {
      params: "min-date",
      desc: "可选的最小时间，精确到分钟",
      tpye: "Number",
      default: "十年前"
    },
    {
      params: "max-date",
      desc: "可选的最大时间，精确到分钟",
      tpye: "Number",
      default: "十年后"
    },
    {
      params: "min-hour",
      desc: "可选的最小小时，针对 time 类型",
      tpye: "Number",
      default: "0"
    },
    {
      params: "max-hour",
      desc: "可选的最大小时，针对 time 类型",
      tpye: "Number",
      default: "23"
    },
    {
      params: "min-minute",
      desc: "可选的最小分钟，针对 time 类型",
      tpye: "Number",
      default: "0"
    },
    {
      params: "max-minute",
      desc: "可选的最大分钟，针对 time 类型",
      tpye: "Number",
      default: "59"
    },
    {
      params: "title",
      desc: "顶部栏标题",
      tpye: "String",
      default: "-"
    },
    {
      params: "show-toolbar",
      desc: "是否显示顶部栏",
      tpye: "Boolean",
      default: "false"
    },
    {
      params: "loading",
      desc: "是否显示加载状态",
      tpye: "Boolean",
      default: "false"
    },
    {
      params: "item-height",
      desc: "选项高度",
      tpye: "Number",
      default: "44"
    },
    {
      params: "confirm-button-text",
      desc: "确认按钮文字",
      tpye: "String",
      default: "确认"
    },
    {
      params: "cancel-button-text",
      desc: "取消按钮文字",
      tpye: "String",
      default: "取消"
    },
    {
      params: "visible-item-count",
      desc: "可见的选项个数",
      tpye: "Number",
      default: "5"
    },
  ],

  event_DatetimePicker: [{
      params: "方法名",
      desc: "说明",
      return: "返回值"
    },
    {
      params: "input",
      desc: "当值变化时触发的事件",
      return: "当前 value"
    },
    {
      params: "change",
      desc: "当值变化时触发的事件",
      return: "	组件实例"
    },
    {
      params: "confirm",
      desc: "点击完成按钮时触发的事件",
      return: "当前 value"
    },
    {
      params: "cancel",
      desc: "点击取消按钮时触发的事件",
      return: "-"
    },
  ],
  func_DatetimePicker: [{
      params: "函数",
      desc: "说明"
    },
    {
      params: "getColumnValue(index)",
      desc: "获取对应列中选中的值"
    },
    {
      params: "setColumnValue(index, value)",
      desc: "设置对应列中选中的值"
    },
    {
      params: "getColumnValues(index)",
      desc: "获取对应列中所有的备选值"
    },
    {
      params: "setColumnValues(index, values)",
      desc: "设置对应列中所有的备选值"
    },
    {
      params: "getValues()",
      desc: "获取所有列中被选中的值，返回一个数组"
    },
    {
      params: "setValues(values)",
      desc: "values为一个数组，设置所有列中被选中的值"
    },
  ]
}



export default apiData;
