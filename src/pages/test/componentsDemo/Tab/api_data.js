const apiData = {
  api_tabs: [{
    'params': '参数',
    'desc': '说明',
    'type': '类型',
    'default': '默认值'
  },
  {
    'params': 'active',
    'desc': '当前激活标签的索引',
    'type': 'Number',
    'default': '0'
  },
  {
    'params': 'color',
    'desc': '标签颜色',
    'type': 'String',
    'default': '#f44'
  },
  {
    'params': 'z-index',
    'desc': 'z-index 层级',
    'type': 'Number',
    'default': '1'
  },
  {
    'params': 'type',
    'desc': '样式风格，可选值为card',
    'type': 'String',
    'default': 'line'
  },
  {
    'params': 'border',
    'desc': '是否展示外边框，仅在line风格下生效',
    'type': 'Boolean',
    'default': 'true'
  },
  {
    'params': 'duration',
    'desc': '动画时间 (单位秒)',
    'type': 'Number',
    'default': '0.3'
  },
  {
    'params': 'line-width',
    'desc': '底部条宽度 (px)',
    'type': 'Number',
    'default': '与当前标签等宽'
  },
  {
    'params': 'swipe-threshold',
    'desc': '滚动阈值，设置标签数量超过多少个可滚动',
    'type': 'Number',
    'default': '4'
  },
  {
    'params': 'animated',
    'desc': '是否使用动画切换 Tabs',
    'type': 'Boolean',
    'default': 'false'
  },
  {
    'params': 'swipeable',
    'desc': '是否开启手势滑动切换',
    'type': 'Boolean',
    'default': 'false'
  },
  {
    'params': 'sticky',
    'desc': '是否使用粘性定位布局',
    'type': 'Boolean',
    'default': 'false'
  },
  {
    'params': 'offset-top',
    'desc': '粘性定位布局下与顶部的最小距离，单位 px',
    'type': 'Number',
    'default': '0'
  },
  {
    'params': 'scroll-top',
    'desc': '页面的scrollTop，粘性布局下必须要传入，单位 px',
    'type': 'Number',
    'default': '0'
  }
  ],
  api_tab: [{
    'params': '参数',
    'desc': '说明',
    'type': '类型',
    'default': '默认值'
  }, {
    'params': 'title',
    'desc': '标题',
    'type': 'String',
    'default': '-'
  },
  {
    'params': 'disabled',
    'desc': '是否禁用标签',
    'type': 'Boolean',
    'default': 'false'
  }
  ],
  event: [{
    'params': '方法名',
    'desc': '说明',
    'return': '返回值'
  },
  {
    'params': 'bind:click',
    'desc': '点击标签时触发',
    'return': 'index：标签索引，title：标题'
  },
  {
    'params': 'bind:change',
    'desc': '当前激活的标签改变时触发',
    'return': 'index：标签索引，title：标题'
  },
  {
    'params': 'bind:disabled',
    'desc': '点击被禁用的标签时触发',
    'return': 'index：标签索引，title：标题'
  },
  {
    'params': 'bind:scroll',
    'desc': '滚动时触发',
    'return': '{ scrollTop: 距离顶部位置, isFixed: 是否吸顶 }'
  }
  ],
  slot: [{
    'params': '插槽',
    'desc': '说明'
  },
  {
    'params': '-',
    'desc': '标签页内容'
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
