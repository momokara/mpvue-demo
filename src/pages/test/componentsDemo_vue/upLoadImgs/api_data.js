const apiData = {
  api: [{
      params: "参数",
      desc: "说明",
      type: "类型",
      default: "默认值"
    },
    {
      params: "title",
      desc: "顶部的标题",
      type: "String",
      default: "-"
    },
    {
      params: "max",
      desc: "图片最大值,超过后会隐藏上传按钮",
      type: "Number",
      default: "6"
    },
    {
      params: "autoUpLoad",
      desc: "是否自动上传,true时添加图片会自动触发upLoadImgs",
      type: "Boolean",
      default: "false"
    },
    {
      params: "imageList",
      desc: "默认显示的图片列表",
      type: "Array",
      default: "[]"
    }
  ],
  event: [{
      params: "方法名",
      desc: "说明",
      return: "返回值"
    },
    {
      params: "addImg",
      desc: "添加图片时触发,返回当前的图片列表(res.imageList),当前选中的缓存列表(res.tempFilePaths)",
      return: "res.imageList / res.imageList"
    },
    {
      params: "deleteImg",
      desc: "删除图片时触发,返回当前的图片列表(res.imageList),当前选中的缓存列表(res.tempFilePaths)",
      return: "res.imageList / res.imageList"
    },
    {
      params: "upLoadImgs",
      desc: "上传图片时触发,返回当前的图片列表(imageList)",
      return: "imageList"
    }
  ]
}



export default apiData;
