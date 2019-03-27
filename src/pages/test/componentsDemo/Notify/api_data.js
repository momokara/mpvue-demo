const apiData = {
  api: [{
    'params': '参数',
    'desc': '说明',
    'type': '类型',
    'default': '默认值'
  },
  {
    'params': 'text',
    'desc': '展示文案',
    'type': 'String',
    'default': '-'
  },
  {
    'params': 'duration',
    'desc': '持续时间',
    'type': 'Number',
    'default': '3000'
  },
  {
    'params': 'selector',
    'desc': '自定义选择器',
    'type': 'String',
    'default': 'van-notify'
  },
  {
    'params': 'color',
    'desc': '字体颜色',
    'type': 'String',
    'default': '#fff'
  },
  {
    'params': 'backgroundColor',
    'desc': '背景色',
    'type': 'String',
    'default': '#f44'
  },
  {
    'params': 'context',
    'desc': '选择器的选择范围，可以传入自定义组件的 this 作为上下文',
    'type': 'Object',
    'default': '当前页面'
  }
  ],
  custom_class: [{
    'params': '类名',
    'desc': '说明'
  },
  {
    'params': 'custom-class',
    'desc': '根节点样式类'
  }
  ]
}

export default apiData
