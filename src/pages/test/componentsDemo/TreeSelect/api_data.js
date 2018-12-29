const apiData = {
  api: [{
      "params": "参数",
      "desc": "说明",
      "type": "类型",
      "default": "默认值"
    },

  ],
  event: [{
      "params": "方法名",
      "desc": "说明",
      "return": "返回值"
    },
    {
      "params": "click",
      "desc": "按钮点击事件回调",
      "return": "-"
    }
  ],
  slot: [{
      "params": "插槽",
      "desc": "说明"
    },
    {
      "params": "~",
      "desc": "图片插槽,自定义icon的图标"
    }
  ],
  custom_class: [{
      "params": "类名",
      "desc": "说明"
    },
    {
      "params": "custom-class",
      "desc": "根节点样式类"
    },
  ],

  pro1Name: '浙江',
  pro1: [{
    text: '杭州',
    id: 1
  }, {
    text: '温州',
    id: 2
  }, {
    text: '宁波',
    id: 3,
    disabled: true
  }, {
    text: '义乌',
    id: 4
  }],
  pro2Name: '江苏',
  pro2: [{
    text: '南京',
    id: 5
  }, {
    text: '无锡',
    id: 6
  }, {
    text: '徐州',
    id: 7
  }, {
    text: '苏州',
    id: 8
  }],
  pro3Name: '福建',
  pro3: [{
    text: '泉州',
    id: 9
  }, {
    text: '厦门',
    id: 10
  }]
}



export default apiData;
