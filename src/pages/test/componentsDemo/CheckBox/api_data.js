const apiData = {
  api_CheckboxGroup: [{
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
    params: 'max',
    desc: '设置最大可选数',
    type: 'Number',
    default: '0（无限制）'
  }
  ],
  api_Checkbox: [{
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
    params: 'shape',
    desc: '形状，可选值为 round square',
    type: 'String',
    default: 'round'
  },
  {
    params: 'use-icon-slot',
    desc: '是否使用 icon slot',
    type: 'Boolean',
    default: 'false'
  },
  {
    params: 'checked-color',
    desc: '选中状态颜色',
    type: 'String',
    default: '#1989fa'
  }
  ],
  event_Checkbox: [{
    params: '方法名',
    desc: '说明',
    return: '返回值'
  },
  {
    params: 'bind:change',
    desc: '当绑定值变化时触发的事件',
    return: '当前组件的值'
  }

  ],
  event_CheckboxGroup: [{
    params: '方法名',
    desc: '说明',
    return: '返回值'
  },
  {
    params: 'bind:change',
    desc: '当绑定值变化时触发的事件',
    return: '当前组件的值'
  }
  ],
  slot_Checkbox: [{
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
  func_Checkbox: [{
    params: '方法名',
    desc: '参数',
    type: '返回值',
    default: '介绍'
  },
  {
    params: 'toggle',
    desc: '-',
    type: '-',
    default: '切换选中状态'
  }
  ],
  custom_class_Checkbox: [{
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
  custom_class_CheckboxGroup: [{
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
