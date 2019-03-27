const apiData = {
  api: [{
    params: '参数',
    desc: '说明',
    type: '类型',
    default: '默认值'
  },
  {
    params: 'id',
    desc: '标识符',
    type: 'String',
    default: '-'
  },
  {
    params: 'type',
    desc: '按钮类型，可选值为primary warning danger',
    type: 'String',
    default: 'default'
  },
  {
    params: 'size',
    desc: '按钮尺寸，可选值为 normal large small mini',
    type: 'String',
    default: 'normal'
  },
  {
    params: 'plain',
    desc: '是否为朴素按钮',
    type: 'Boolean',
    default: 'false'
  },
  {
    params: 'disabled',
    desc: '是否禁用按钮',
    type: 'Boolean',
    default: 'false'
  },
  {
    params: 'loading',
    desc: '是否显示为加载状态',
    type: 'Boolean',
    default: 'false'
  },
  {
    params: 'block',
    desc: '是否为块级元素',
    type: 'Boolean',
    default: 'false'
  },
  {
    params: 'round',
    desc: '是否为圆形按钮',
    type: 'Boolean',
    default: 'false'
  },
  {
    params: 'square',
    desc: '是否为方形按钮',
    type: 'Boolean',
    default: 'false'
  },
  {
    params: 'open-type',
    desc: '微信开放能力，具体支持可参考 微信官方文档',
    type: 'String',
    default: '-'
  },
  {
    params: 'app-parameter',
    desc: '打开 APP 时，向 APP 传递的参数',
    type: 'String',
    default: '-'
  },
  {
    params: 'lang',
    desc: '指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文',
    type: 'String',
    default: 'en'
  },
  {
    params: 'session-from',
    desc: '会话来源',
    type: 'String',
    default: '-'
  },
  {
    params: 'send-message-title',
    desc: '会话内消息卡片标题',
    type: 'String',
    default: '当前标题'
  },
  {
    params: 'send-message-path',
    desc: '会话内消息卡片点击跳转小程序路径',
    type: 'String',
    default: '当前分享路径'
  },
  {
    params: 'send-message-img',
    desc: 'sendMessageImg',
    type: 'String',
    default: '截图'
  },
  {
    params: 'show-message-card',
    desc: '显示会话内消息卡片',
    type: 'String',
    default: 'false'
  }
  ],
  event: [{
    params: '方法名',
    desc: '说明',
    return: '返回值'
  },
  {
    params: 'click',
    desc: '点击按钮且按钮状态不为加载或禁用时触发',
    return: '-'
  },
  {
    params: 'getuserinfo',
    desc: '用户点击该按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值同 wx.getUserInfo',
    return: '-'
  },
  {
    params: 'contact',
    desc: '客服消息回调',
    return: '-'
  },
  {
    params: 'error',
    desc: '当使用开放能力时，发生错误的回调',
    return: '-'
  },
  {
    params: 'opensetting',
    desc: '在打开授权设置页后回调',
    return: '-'
  }
  ],
  custom_class: [{
    params: '类名',
    desc: '说明'
  },
  {
    params: 'custom-class',
    desc: '根节点样式类'
  },
  {
    params: 'loading-class',
    desc: '加载图标样式类'
  }
  ]
}

export default apiData
