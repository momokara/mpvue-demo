<template>
  <div class="container">
    <div class="title">{{pagedata.name}}</div>
    <div class="fsp12">
      <span>{{pagedata.author}}</span>
      <span>{{pagedata.creatTime}}</span>
    </div>
    <wxParse
      :content="pagedata.data"
      @preview="preview"
      @navigate="navigate"
    ></wxParse>
     <div class="fsp12">阅读次数:{{pagedata.viewtimes}}</div>
  </div>
</template>
<script>
import { getArticleDetail } from "@/api/api";
import wxParse from "mpvue-wxparse";
// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {
      pageconfig: {
        id: ""
      },
      pagedata: {}
    };
  },
  // 使用的 vue 组件
  components: { wxParse },

  // 页面中的方法
  methods: {
    preview(src, e) {
      console.log(src, e);
      // do something
    },
    navigate(href, e) {
      console.log(href, e);
      // do something
    },
    getPageData(pageconfig) {
      let _this = this;
      getArticleDetail(_this.pageconfig, 1)
        .then(res => {
          _this.pagedata = res;
        })
        .catch(err => {
          console.log("getPageDataerr", err);
        });
    }
  },

  // 监听页面加载
  onLoad(options) {
    this.pageconfig.id = options.id;
  },
  // 监听页面显示
  onShow() {
    pagelogs();
    this.getPageData();
  },

  // 监听页面卸载
  onUnload() {},
  // 监听用户下拉动作
  onPullDownRefresh() {},

  // 用户点击右上角分享
  onShareAppMessage() {}
};
</script>


<style lang="scss">
@import url("~mpvue-wxparse/src/wxParse.css");
</style>
