const apiData = {
  api: [{
    'params': '参数',
    'desc': '说明',
    'type': '类型',
    'default': '默认值'
  },
  {
    'params': 'title',
    'desc': '标题',
    'type': 'String',
    'default': "''"
  },
  {
    'params': 'left-text',
    'desc': '左侧文案',
    'type': 'String',
    'default': "''"
  },
  {
    'params': 'right-text',
    'desc': '右侧文案',
    'type': 'String',
    'default': "''"
  },
  {
    'params': 'left-arrow',
    'desc': '是否显示左侧箭头',
    'type': 'Boolean',
    'default': 'false'
  },
  {
    'params': 'fixed',
    'desc': '是否固定在顶部',
    'type': 'Boolean',
    'default': 'false'
  },
  {
    'params': 'border',
    'desc': '是否显示下边框',
    'type': 'Boolean',
    'default': 'true'
  },
  {
    'params': 'z-index',
    'desc': '元素 z-index',
    'type': 'Number',
    'default': '1'
  }
  ],
  event: [{
    'params': '方法名',
    'desc': '说明',
    'return': '返回值'
  },
  {
    'params': 'bind:click-left',
    'desc': '点击左侧按钮时触发',
    'return': '-'
  },
  {
    'params': 'bind:click-right',
    'desc': '点击右侧按钮时触发',
    'return': '-'
  }
  ],
  slot: [{
    'params': '插槽',
    'desc': '说明'
  },
  {
    'params': 'title',
    'desc': '自定义标题'
  },
  {
    'params': 'left',
    'desc': '自定义左侧区域内容'
  },
  {
    'params': 'right',
    'desc': '自定义右侧区域内容'
  }
  ],
  custom_class: [{
    'params': '类名',
    'desc': '说明'
  },
  {
    'params': 'custom-class',
    'desc': '根节点样式类'
  },
  {
    'params': 'title-class',
    'desc': '标题样式类'
  }
  ]
}

export default apiData
