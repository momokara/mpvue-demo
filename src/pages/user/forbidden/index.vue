<template>
  <div class="container">
    <div class="icon-box ta-c">
      <img
        class="img"
        src="https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/default/404.png"
        alt=""
        srcset=""
      >
    </div>
    <div
      id="msg"
      class="ta-c fsp14 fc-grey "
    >{{msg}}</div>
  </div>
</template>
<script>
// 页面记录
import { pagelogs } from '@/utils/logs'
export default {
  data () {
    return {
      msg: '小程序已经被禁用!'
    }
  },
  // 使用的 vue 组件
  components: {},

  // 页面中的方法
  methods: {},
  // VUE 钩子 常用

  onLoad () {
    wx.setNavigationBarTitle({
      title: '小马帮技术支持'
    })
  },
  // 监听页面显示
  onShow () {
    pagelogs()
  }
}
</script>


<style lang="scss">
.icon-box {
  width: 375px;
  margin: 50px auto 20px auto;
  .img {
    width: 300px;
  }
}
</style>
