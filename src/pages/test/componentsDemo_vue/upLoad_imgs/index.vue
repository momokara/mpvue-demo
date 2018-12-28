<template>
  <div class="container">
    <upLoadImages :title="'图片上传组件'" :autoUpLoad="autoUpLoad" :imageList="imgArr" @addImg="addImg" @deleteImg="deleteImg" @upLoadImgs="upLoadImgs"></upLoadImages>
    <div class="control-box">
      <van-cell-group>
        <van-cell>
          <div slot="title">
            <span class="van-cell-text">autoUpLoad(开启自动上传)</span>
          </div>
          <div>
            <van-switch :checked="autoUpLoad" @change="onChange" />
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="api-info">
      <div class="title color-35">API 说明</div>
      <div class="title color-888">接收参数</div>
      <van-row class="fsp14" v-for="tabrow in table_info_data" v-bind:key="tabrow">
        <van-col span="7" custom-class="table-col">
          {{tabrow.params}}
        </van-col>
        <van-col span="8" custom-class="table-col">
          {{tabrow.desc}}
        </van-col>
        <van-col span="6" custom-class="table-col ta-c ">
          {{tabrow.type}}
        </van-col>
        <van-col span="3" custom-class="table-col ta-c ">
          {{tabrow.default}}
        </van-col>
      </van-row>
      <div class="title color-888">回调方法</div>
      <van-row class="fsp14" v-for="tabrow in table_func_data" v-bind:key="tabrow">
        <van-col span="6" custom-class="table-col">
          {{tabrow.params}}
        </van-col>
        <van-col span="10" custom-class="table-col">
          {{tabrow.desc}}
        </van-col>
        <van-col span="8" custom-class="table-col ta-c ">
          {{tabrow.return}}
        </van-col>
      </van-row>
    </div>

  </div>
</template>
<script>
import upLoadImages from "@/components/upLoad-images";
export default {
  data() {
    return {
      msg: "这里是消息",
      autoUpLoad: false,
      imgArr: [
        "https://cdn.huibaoming.com/haivit/public/image/20181112155409_979/wx7e28d99c40baf7a8.o6zAJs0VYBlymN8fYVEUKSPcEawI.DSXlZRmdFiq153b8b378d15905c5ed2e65c281061b91.jpg",
        "https://cdn.huibaoming.com/haivit/public/image/20181112155409_979/wx7e28d99c40baf7a8.o6zAJs0VYBlymN8fYVEUKSPcEawI.DSXlZRmdFiq153b8b378d15905c5ed2e65c281061b91.jpg",
        "https://cdn.huibaoming.com/haivit/public/image/20181112155409_979/wx7e28d99c40baf7a8.o6zAJs0VYBlymN8fYVEUKSPcEawI.DSXlZRmdFiq153b8b378d15905c5ed2e65c281061b91.jpg"
      ],
      table_info_data: [
        {
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
      table_func_data: [
        {
          params: "方法名",
          desc: "说明",
          return: "返回值"
        },
        {
          params: "addImg",
          desc:
            "添加图片时触发,返回当前的图片列表(res.imageList),当前选中的缓存列表(res.tempFilePaths)",
          return: "res.imageList / res.imageList"
        },
        {
          params: "deleteImg",
          desc:
            "删除图片时触发,返回当前的图片列表(res.imageList),当前选中的缓存列表(res.tempFilePaths)",
          return: "res.imageList / res.imageList"
        },
        {
          params: "upLoadImgs",
          desc: "上传图片时触发,返回当前的图片列表(imageList)",
          return: "imageList"
        }
      ]
    };
  },
  // 使用的 vue 组件
  components: {
    upLoadImages
  },
  // 页面中的方法
  methods: {
    addImg: function(event) {
      console.log("addImg", event);
    },
    deleteImg: function(event) {
      console.log("deleteImg", event);
    },
    upLoadImgs: function(event) {
      console.log("upLoadImgs", event);
    },
    onChange: function(event) {
      console.log(event.mp.detail);
      this.autoUpLoad = event.mp.detail;
    }
  }
};
</script>


<style lang="scss">
.api-info {
  padding: 10rpx 10rpx 60rpx 10rpx;
}
.table-col {
  font-size: 11pt;
  border-top: 1px solid #333;
}
</style>
