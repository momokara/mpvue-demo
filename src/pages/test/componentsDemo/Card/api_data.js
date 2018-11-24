const apiData = {
  api: [{
      "params": "参数",
      "desc": "说明",
      "tpye": "类型",
      "default": "默认值"
    },
    {
      "params": "thumb",
      "desc": "左侧图片",
      "tpye": "String",
      "default": "-"
    },
    {
      "params": "thumb-mode",
      "desc": "左侧图片裁剪、缩放的模式，可选值参考小程序 image 组件 mode 属性值",
      "tpye": "String",
      "default": "scaleToFill"
    },
    {
      "params": "title",
      "desc": "标题",
      "tpye": "String",
      "default": "-"
    },
    {
      "params": "desc",
      "desc": "描述",
      "tpye": "String",
      "default": "-"
    },
    {
      "params": "tag",
      "desc": "标签",
      "tpye": "String",
      "default": "-"
    },
    {
      "params": "num",
      "desc": "商品数量",
      "tpye": "String | Number",
      "default": "-"
    },
    {
      "params": "price",
      "desc": "商品价格",
      "tpye": "String | Number",
      "default": "-"
    },
    {
      "params": "origin-price",
      "desc": "商品划线原价",
      "tpye": "String | Number",
      "default": "-"
    },
    {
      "params": "centered",
      "desc": "内容是否垂直居中",
      "tpye": "String",
      "default": "false"
    },
    {
      "params": "currency",
      "desc": "货币符号",
      "tpye": "String",
      "default": "¥"
    },
    {
      "params": "thumb-link",
      "desc": "点击左侧图片后的跳转链接",
      "tpye": "String",
      "default": "-"
    },
    {
      "params": "link-type",
      "desc": "链接跳转tpye，可选值为 redirectTo switchTab reLaunch",
      "tpye": "String",
      "default": "navigateTo"
    },
    {
      "params": "lazy-load",
      "desc": "是否开启图片懒加载",
      "tpye": "String",
      "default": "false"
    },
    {
      "params": "height",
      "desc": "card 的高度",
      "tpye": "String",
      "default": "100px"
    },
    {
      "params": "imgwidth",
      "desc": "左侧图片容器宽度",
      "tpye": "String",
      "default": "115px"
    },
    {
      "params": "imgheight",
      "desc": "图片容器高度",
      "tpye": "String",
      "default": "90px"
    }
  ],
  slot: [{
      "params": "插槽",
      "desc": "说明"
    },
    {
      "params": "header",
      "desc": "自定顶部到插槽"
    },
    {
      "params": "title",
      "desc": "自定义标题栏，如果设置了title属性则不生效"
    },
    {
      "params": "desc",
      "desc": "自定义描述栏，如果设置了desc属性则不生效"
    },
    {
      "params": "thumb",
      "desc": "自定义 thumb，如果设置了thumb属性则不生效"
    },
    {
      "params": "right-slot",
      "desc": "自定义 右侧插槽"
    },
    {
      "params": "footer",
      "desc": "自定义 footer"
    },
    {
      "params": "tags",
      "desc": "自定义 tags"
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
    {
      "params": "thumb-class",
      "desc": "左侧图片样式类"
    },
    {
      "params": "title-class",
      "desc": "标题样式类"
    },
    {
      "params": "price-class",
      "desc": "价格样式类"
    },
    {
      "params": "origin-price-class",
      "desc": "划线原价样式类"
    },
    {
      "params": "desc-class",
      "desc": "描述样式类"
    },
    {
      "params": "num-class",
      "desc": "数量样式类"
    }
  ]
}



export default apiData;
