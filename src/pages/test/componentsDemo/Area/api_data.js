const apiData = {
  api: [{
    params: '参数',
    desc: '说明',
    type: '类型',
    default: '默认值'
  },
  {
    params: 'value',
    desc: '当前选中的省市区code',
    type: 'String',
    default: '-'
  },
  {
    params: 'title',
    desc: '顶部栏标题',
    type: 'String',
    default: '-'
  },
  {
    params: 'area-list',
    desc: '省市区数据, 见 getAllRegion.json',
    type: 'Object',
    default: '-'
  },
  {
    params: 'columns-num',
    desc: '省市区显示列数，3-省市区，2-省市，1-省',
    type: 'String | Number',
    default: '3'
  },
  {
    params: 'loading',
    desc: '是否显示加载状态',
    type: 'Boolean',
    default: 'false'
  },
  {
    params: 'item-height',
    desc: '选项高度',
    type: 'Number',
    default: '44'
  },
  {
    params: 'visible-item-count',
    desc: '可见的选项个数',
    type: 'Number',
    default: '2'
  }

  ],
  event: [{
    params: '事件',
    desc: '说明',

    return: '返回值'
  },
  {
    params: 'confirm',
    desc: '点击右上方完成按钮',
    return: '返回的数据整体为一个 Object '
  },
  {
    params: 'cancel',
    desc: '点击取消按钮时',
    return: '-'
  },
  {
    params: 'change',
    desc: '选项改变时触发',
    return: 'Picker 实例，所有列选中值，当前列对应的索引'
  }
  ],
  func: [{
    params: '方法名',
    desc: '参数',
    default: '介绍',
    return: '返回值'
  },
  {
    params: 'reset',
    desc: '-',
    default: '重置所有选项到第一项',
    return: '-'
  }
  ],
  slot: [{
    params: '插槽',
    desc: '说明'
  },
  {
    params: '~',
    desc: '图片插槽,自定义icon的图标'
  }
  ],
  custom_class: [{
    params: '类名',
    desc: '说明'
  },
  {
    params: 'custom-class',
    desc: '根节点样式类'
  }
  ]
}

export default apiData
