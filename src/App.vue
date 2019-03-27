<script>
import { getUserInfoSer } from '@/api/api'
import { checkIsForbidden } from '@/api/dataTools'

import config from '@/config.js'

export default {
  created () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      // 云函数使用的环境
      wx.cloud.init({
        env: config.env,
        traceUser: true
      })
    }
    console.log(
      `运行环境：${
        process.env.NODE_ENV === 'production' ? '生产环境' : '开发环境'
      }(${process.env.NODE_ENV}/${config.env}/${config.host}/)`
    )
  },
  // 初始化
  onLaunch (options) {
    console.log('启动参数：', options)
    if (options.query.shareId) {
      wx.showToast({
        title: `邀请id是${options.query.shareId}`
      })
    }
  },
  // 当小程序启动，或从后台进入前台显示
  onShow () {
    console.log('App onShow OK!')
    checkIsForbidden()
    getUserInfoSer().then(res => {
      console.log('login ok!:', res)
    })
  },
  // 当小程序从前台进入后台
  onHide () {
    console.log('app on hide!')
  },
  onError (err) {
    console.log('err', err)
  }
}
</script>

<style lang="scss">
@import "@/../static/index.wxss";
/* 微信设计规范中的字体大小 */
$fs-40: 40pt;
$fs-20: 20pt;
$fs-18: 18pt;
$fs-17: 17pt;
$fs-14: 14pt;
$fs-13: 13pt;
$fs-11: 11pt;
$fs-11: 11pt;

$fsp-32: 32px;
$fsp-24: 24px;
$fsp-20: 20px;
$fsp-18: 18px;
$fsp-16: 16px;
$fsp-14: 14px;
$fsp-12: 12px;
// 常用颜色
$fc-black: #333;
$fc-semi: #8c959f;
$fc-grey: #888;
$fc-light: #f0f0f0;
$fc-blue: #576b95;
$fc-green: #6bb72d;
$fc-igreen: #3ac569;
$fc-red: #f66e6e;
$fc-hred: #e61f19;

// 背景色
$fc-bgc: #f0f4f6;
// 常用透明度
$opacity-normal: 100%;
$opacity-press: 20%;
$opacity-disable: 10%;
// 基本字体大小
// 基于pt
.fs40 {
  font-size: $fs-40;
}
.fs20 {
  font-size: $fs-20;
}
.fs18 {
  font-size: $fs-18;
}
.fs17 {
  font-size: $fs-17;
}
.fs14 {
  font-size: $fs-14;
}
.fs13 {
  font-size: $fs-13;
}
// 基于px
.fsp32 {
  font-size: $fsp-32; /*px*/
}
.fsp24 {
  font-size: $fsp-24; /*px*/
}
.fsp20 {
  font-size: $fsp-20; /*px*/
}
.fsp18 {
  font-size: $fsp-18; /*px*/
}
.fsp16 {
  font-size: $fsp-16; /*px*/
}
.fsp14 {
  font-size: $fsp-14; /*px*/
}
.fs12,
.fsp12 {
  font-size: $fsp-12; /*px*/
}
.fc-black {
  color: $fc-black;
}
.fc-fff {
  color: #fff;
}
.fc-semi {
  color: $fc-semi;
}
.fc-grey {
  color: $fc-grey;
}
.fc-light {
  color: $fc-light;
}
.fc-blue {
  color: $fc-blue;
}
.fc-green {
  color: $fc-green;
}
.fc-igreen {
  color: $fc-igreen;
}
.fc-red {
  color: $fc-red;
}
.fc-hred {
  color: $fc-hred;
}
.fc-bgc {
  color: $fc-bgc;
}

.bg-green {
  background: $fc-green;
}

.title {
  padding: 15px;
  font-size: $fs-17;
}
.ta-c {
  text-align: center;
}
@mixin line-clamp($lineNumber) {
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $lineNumber;
  -webkit-box-orient: vertical;
}
.line-clamp_1 {
  @include line-clamp(1);
}
.line-clamp_2 {
  @include line-clamp(2);
}
.line-clamp_3 {
  @include line-clamp(3);
}
.line-clamp_4 {
  @include line-clamp(4);
}
.line-clamp_5 {
  @include line-clamp(5);
}
.scroll-x {
  width: 100%;
  white-space: nowrap;
}
.demo-relative-box {
  position: relative;
}

page {
  background-color: $fc-bgc;
}
</style>

