const apiData = {
  func: [{
      "params": "方法名",
      "desc": "参数",
      "type": "返回值",
      "default": "介绍"
    },
    {
      "params": "Toast",
      "desc": "options | message",
      "type": "toast 实例",
      "default": "展示提示"
    },
    {
      "params": "Toast .loading",
      "desc": "options | message",
      "type": "toast 实例",
      "default": "展示加载提示"
    },
    {
      "params": "Toast .success",
      "desc": "options | message",
      "type": "toast 实例",
      "default": "展示成功提示"
    },
    {
      "params": "Toast .fail",
      "desc": "options | message",
      "type": "toast 实例",
      "default": "展示失败提示"
    },
    {
      "params": "Toast .clear",
      "desc": "clearAll",
      "type": "void",
      "default": "关闭提示"
    },
    {
      "params": "Toast .setDefaultOptions",
      "desc": "options",
      "type": "void",
      "default": "修改默认配置，对所有 Toast 生效"
    },
    {
      "params": "Toast .resetDefaultOptions",
      "desc": "-",
      "type": "void",
      "default": "重置默认配置，对所有 Toast 生效"
    }
  ],
  option: [{
      "params": "参数",
      "desc": "说明",
      "type": "类型",
      "default": "默认值"
    },
    {
      "params": "type",
      "desc": "提示类型，可选值为 loading success fail html",
      "type": "String",
      "default": "text"
    },
    {
      "params": "position",
      "desc": "位置，可选值为 top middle bottom",
      "type": "String",
      "default": "middle"
    },
    {
      "params": "message",
      "desc": "内容",
      "type": "String",
      "default": "''"
    },
    {
      "params": "mask",
      "desc": "是否显示背景蒙层",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "forbidClick",
      "desc": "是否禁止背景点击",
      "type": "Boolean",
      "default": "false"
    },
    {
      "params": "loadingType",
      "desc": "加载图标类型, 可选值为 spinner",
      "type": "String",
      "default": "circular"
    },
    {
      "params": "zIndex",
      "desc": "z-index 层级",
      "type": "Number",
      "default": "1000"
    },
    {
      "params": "duration",
      "desc": "展示时长(ms)，值为 0 时，toast 不会消失",
      "type": "Number",
      "default": "3000"
    },
    {
      "params": "selector",
      "desc": "自定义选择器",
      "type": "String",
      "default": "van-toast"
    },
    {
      "params": "context",
      "desc": "选择器的选择范围，可以传入自定义组件的 this 作为上下文",
      "type": "Object",
      "default": "当前页面"
    }
  ],
}



export default apiData;
