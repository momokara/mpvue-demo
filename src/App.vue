<script>
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
  },
  // 当小程序启动，或从后台进入前台显示
  onShow() {},
  // 当小程序从前台进入后台
  onHide() {}
};
</script>

<style lang="scss">
/* 微信设计规范中的字体大小 */
$fs-40: 40pt;
$fs-20: 20pt;
$fs-18: 18pt;
$fs-17: 17pt;
$fs-14: 14pt;
$fs-13: 13pt;
$fs-11: 11pt;
// $fs-40: 40pt;
// $fs-20: 20pt;
// $fs-18: 18pt;
// $fs-17: 17pt;
// $fs-14: 14pt;
// $fs-13: 14px;
// $fs-11: 12px;
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
// 全局样式
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
  margin: 0;
  padding: 0;
}
// 基本字体大小
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
.fs11 {
  font-size: $fs-11;
}
.fc-black{
  color: $fc-black;
}
.fc-semi{
  color: $fc-semi;
}
.fc-grey{
  color: $fc-grey;
}
.fc-light{
  color: $fc-light;
}
.fc-blue{
  color: $fc-blue;
}
.fc-green{
  color: $fc-green;
}
.fc-red{
  color: $fc-red;
}
</style>
