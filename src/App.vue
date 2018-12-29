<script>
import Api from "@/api/api";
export default {
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    console.log("app created and cache logs by setStorageSync");
  },
  // 初始化
  onLaunch() {
    console.log("onLaunch");
    // 自动登录
    Api.autoLogin().then(res => {
      console.log(res);
    });
  },
  // 当小程序启动，或从后台进入前台显示
  onShow() {},
  // 当小程序从前台进入后台
  onHide() {}
};
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
$fsp-16: 16px;
$fsp-14: 14px;
$fsp-12: 12px;
// 常用颜色
$fc-black: #000;
$fc-semi: #353535;
$fc-grey: #888;
$fc-light: #b2b2b2;
$fc-blue: #576b95;
$fc-green: #09bb07;
$fc-red: #e64340;
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
.fsp16 {
  font-size: $fsp-16; /*px*/
}
.fsp14 {
  font-size: $fsp-14; /*px*/
}
.fs12 {
  font-size: $fsp-12; /*px*/
}
.fc-black {
  color: $fc-black;
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
.fc-red {
  color: $fc-red;
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
</style>

