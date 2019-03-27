const apiData = {
  api: [{
    params: '参数',
    desc: '说明',
    type: '类型',
    default: '默认值'
  },
  {
    params: 'awardList',
    desc: '奖品列表',
    type: 'Array',
    default: '[]'
  },
  {
    params: 'defaultDeg',
    desc: '文字初始偏转的角度',
    type: 'Number',
    default: '0'
  },
  {
    params: 'resultId',
    desc: '中奖结果Id,如ID在awardList中存在,则执行动画转动到ID奖品位置 ',
    type: 'String',
    default: '-'
  },
  {
    params: 'rotateDeg',
    desc: '圆盘转动的角度',
    type: 'Number',
    default: '-'
  },
  {
    params: 'animate-duration',
    desc: '动画时间,为空或者0时候执行默认的时间3s',
    type: 'Number',
    default: '3s'
  },
  {
    params: 'bgImg',
    desc: '圆盘的背景图',
    type: 'String',
    default: '~'
  },
  {
    params: 'arrImg',
    desc: '指针图',
    type: 'String',
    default: '~'
  }
  ],
  event: [
    {
      params: '方法名',
      desc: '说明',
      return: '返回值'
    },
    {
      params: 'play',
      desc: '点击指针时触发',
      return: '-'
    },
    {
      params: 'over',
      desc: '动画结束时触发,返回被抽中的奖品信息',
      return: '{Array}[{中奖结果}]'
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
