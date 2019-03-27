const apiData = {
  api_RadioGroup: [{
    params: '参数',
    desc: '说明',
    type: '类型',
    default: '默认值'
  },
  {
    params: 'name',
    desc: '在表单内提交时的标识符',
    type: 'String',
    default: '-'
  },
  {
    params: 'value',
    desc: '所有选中项的 name',
    type: 'Array',
    default: '-'
  },
  {
    params: 'disabled',
    desc: '是否禁用所有单选框',
    type: 'Boolean',
    default: 'false'
  }
  ],
  api_Radio: [{
    params: '参数',
    desc: '说明',
    type: '类型',
    default: '默认值'
  },
  {
    params: 'name',
    desc: '在表单内提交时的标识符',
    type: 'String',
    default: '-'
  },
  {
    params: 'value',
    desc: '所有选中项的 name',
    type: 'Array',
    default: '-'
  },
  {
    params: 'disabled',
    desc: '是否禁用所有单选框',
    type: 'Boolean',
    default: 'false'
  },
  {
    params: 'label-disabled',
    desc: '是否禁用单选框内容点击',
    type: 'Boolean',
    default: 'false'
  },
  {
    params: 'label-position',
    desc: '文本位置，可选值为 left',
    type: 'String',
    default: 'right'
  },
  {
    params: 'checked-color',
    desc: '选中状态颜色',
    type: 'String',
    default: '#1989fa'
  },
  {
    params: 'use-icon-slot',
    desc: '是否使用 icon slot',
    type: 'Boolean',
    default: 'false'
  }

  ],
  event_Radio: [{
    params: '方法名',
    desc: '说明',
    return: '返回值'
  },
  {
    params: 'bind:change',
    desc: '当绑定值变化时触发的事件',
    return: '当前选中项的 name'
  }

  ],
  event_RadioGroup: [{
    params: '方法名',
    desc: '说明',
    return: '返回值'
  },
  {
    params: 'bind:change',
    desc: '当绑定值变化时触发的事件',
    return: '当前选中项的 name'
  }
  ],
  slot_Radio: [{
    params: '名称',
    desc: '说明',
    default: 'slot-scope'
  },
  {
    params: '-',
    desc: '自定义显示内容',
    default: '-'
  },
  {
    params: 'icon',
    desc: '自定义图标',
    default: 'checked: 是否为选中状态'
  },
  {
    params: 'icon-default',
    desc: '未选中状态的自定义图标',
    default: '-'
  },
  {
    params: 'icon-active',
    desc: '选中状态的自定义图标',
    default: '-'
  },
  {
    params: 'icon-disabled',
    desc: '禁用状态的自定义图标',
    default: '-'
  }
  ],
  custom_class_Radio: [{
    params: '类名',
    desc: '说明'
  },
  {
    params: 'custom-class',
    desc: '根节点样式类'
  },
  {
    params: 'icon-class',
    desc: '图标样式类'
  },
  {
    params: 'label-class',
    desc: '描述信息样式类'
  }
  ],
  custom_class_RadioGroup: [{
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
