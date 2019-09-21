<template>
  <div class="html-box-contant">
    <block v-if="isShowVideo">
      <block v-for="(item, index) in showHtml"
             :key="index">
        <block v-if="item.data">
          <video class="video"
                 v-if="item.isVideo"
                 :style="item.style"
                 :src="item.data"></video>
          <block v-else>
            <rich-text v-if="useWechatRichText"
                       :nodes="item.data"></rich-text>
            <wxParse v-else
                     :content="item.data"
                     noData=""
                     @preview="preview"
                     @navigate="navigate"></wxParse>

          </block>
        </block>
      </block>
    </block>

    <wxParse v-else
             :content="htmlData"
             @preview="preview"
             @navigate="navigate"></wxParse>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import { golink } from '@/utils/tools'
export default {
  props: {
    htmlData: {
      type: String
    },
    isShowVideo: {
      type: Boolean,
      default: false
    },
    useWechatRichText: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showHtml () {
      let _html = []
      let _this = this
      if (_this.isShowVideo) {
        let isHtml = /^</
        if (_this.htmlData) {
          // 切割video标签
          _html = _this.htmlData.split(/<video|<\/video>/)
          _html = _html.map(e => {
            if (isHtml.test(_this.htmlData)) {
              e = {
                data: e,
                isVideo: !/<[^>]+>/g.test(e)
              }
              console.log(e)
              if (e.isVideo) {
                if (e.data) {
                  let regSrc = /src="(.*?)"/g
                  let regStyle = /style="(.*?)"/g
                  e.style = regStyle.exec(e.data)
                  e.style = e.style ? e.style[1] : ''
                  e.data = regSrc.exec(e.data)
                  e.data = e.data[1].replace(/"/g, '')
                }
              }
            } else {
              e = {
                data: e,
                isVideo: false
              }
            }
            return e
          })
        }
      }
      console.log('htmlArr', _html)
      return _html
    }
  },
  components: { wxParse },
  // 页面中的方法
  methods: {
    preview (src, e) {
      console.log(src, e)
    },
    navigate (href, e) {
      console.log(href, e)
      golink(href)
    }
  }
}
</script>

<style lang='scss'>
@import url('~mpvue-wxparse/src/wxParse.css');
.html-box-contant {
  // position: relative;
}
</style>
