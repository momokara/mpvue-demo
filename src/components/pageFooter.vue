<template>
  <div class="footer ta-c fsp12 fc-grey">
    <span class="footer-text"
          @click="goMiniProgram"> {{footer}}</span>
    <slot></slot>
  </div>
</template>

<script>
import cloudConfig from '@/store/cloudConfig.js'
export default {
  computed: {
    footer () {
      let _footer = ''
      if (cloudConfig.state.defaultData.footer) {
        _footer = cloudConfig.state.defaultData.footer
      }
      return _footer
    }
  },
  methods: {
    goMiniProgram () {
      if (cloudConfig.state.footerAppid) {
        wx.navigateToMiniProgram({
          appId: cloudConfig.state.footerAppid,
          extraData: {
            wxid: cloudConfig.state.mpid
          }
        })
      } else {
        console.info('没有APPID')
      }
    }
  }
}
</script>

<style lang="scss">
.footer {
  padding-bottom: 25px;
  .footer-text {
    position: relative;
  }
}
</style>
