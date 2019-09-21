const apiData = {
  api_icon: [{
    params: '参数',
    desc: '说明',
    type: '类型',
    default: '默认值'
  },
  {
    params: 'text',
    desc: '按钮文字',
    type: 'String',
    default: '-'
  },
  {
    params: 'icon',
    desc: '图标类型，可选值见icon组件,可以使用图片连接',
    type: 'String',
    default: '-'
  },
  {
    params: 'info',
    desc: '图标右上角提示信息',
    type: 'String| Number',
    default: '-'
  },
  {
    params: 'url',
    desc: '跳转链接',
    type: 'String',
    default: '-'
  },
  {
    params: 'link-type',
    desc: '链接跳转类型，可选值为 redirectTo switchTab reLaunch',
    type: 'String',
    default: 'navigateTo'
  },
  {
    params: 'id',
    desc: '标识符',
    type: 'String',
    default: '-'
  },
  {
    params: 'type',
    desc: '按钮类型，可选值为 primary warning danger',
    type: 'String',
    default: 'default'
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
  api_button: [{
    params: '参数',
    desc: '说明',
    type: '类型',
    default: '默认值'
  },
  {
    params: 'text',
    desc: '按钮文字',
    type: 'String',
    default: '-'
  },
  {
    params: 'url',
    desc: '跳转链接',
    type: 'String',
    default: '-'
  },
  {
    params: 'link-type',
    desc: '链接跳转类型，可选值为 redirectTo switchTab reLaunch',
    type: 'String',
    default: 'navigateTo'
  },
  {
    params: 'id',
    desc: '标识符',
    type: 'String',
    default: '-'
  },
  {
    params: 'type',
    desc: '按钮类型，可选值为 primary warning danger',
    type: 'String',
    default: 'default'
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
    desc: '按钮点击事件回调',
    return: '-'
  }
  ],
  slot: [{
    params: '插槽',
    desc: '说明'
  },
  {
    // params: '~',
    // desc: '图片插槽,自定义icon的图标'
  }
  ]
}

export default apiData
