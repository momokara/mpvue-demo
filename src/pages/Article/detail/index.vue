<template>
  <div class="container">
    <div class="fsp20 fc-black header-title">{{data.name}}</div>
    <div class="fsp12 header-info">
      <span class="author fc-semi">{{data.author}}</span>
      <span class="fc-grey">{{data.creatTime}}</span>
    </div>
    <web-view
      v-if="data.isWechatUrl"
      :src="data.html"
    ></web-view>
    <wxParse
      v-else
      :content="data.html"
      @preview="preview"
      @navigate="navigate"
    ></wxParse>
    <div class="fsp12 fc-grey footer">阅读次数:{{data.viewtimes}}</div>
  </div>
</template>
<script>
import { getArticleDetail } from '@/api/api.article'
import wxParse from 'mpvue-wxparse'
// 页面记录
import { pagelogs } from '@/utils/logs'
export default {
  data () {
    return {
      pageconfig: {
        id: ''
      },
      data: {}
    }
  },
  // 使用的 vue 组件
  components: { wxParse },

  // 页面中的方法
  methods: {
    preview (src, e) {
      console.log(src, e)
      // do something
    },
    navigate (href, e) {
      console.log(href, e)
      // do something
    },
    getPageData (pageconfig) {
      let _this = this
      console.log(getArticleDetail)
      getArticleDetail(_this.pageconfig, 1)
        .then(res => {
          _this.data = res
          wx.stopPullDownRefresh()
          let reg = /^https:\/\//
          _this.data.isWechatUrl = reg.test(res.html)
        })
        .catch(err => {
          console.log('getPageDataerr', err)
        })
    }
  },

  // 监听页面加载
  onLoad (options) {
    this.pageconfig.id = options.id
    this.getPageData()
  },
  // 监听页面显示
  onShow () {
    pagelogs()
  },
  onHide () {
    pagelogs(true)
  },
  // 监听用户下拉动作
  onPullDownRefresh () {
    this.getPageData()
  },

  // 用户点击右上角分享
  onShareAppMessage () {}
}
</script>


<style lang="scss">
@import url("~mpvue-wxparse/src/wxParse.css");
.container {
  padding: 15px;
  .header-info {
    margin: 10px auto;
    .author {
      margin-right: 15px;
    }
  }
  .footer {
    margin: 10px auto;
  }
}
</style>
