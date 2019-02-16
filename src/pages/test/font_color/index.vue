<template>
  <div class="container">
    <div class="title">
      pt单位
    </div>
    <div class="row">
      <div class="fs40 fc-semi">40pt</div>
      <div class="fs11 fc-red">只能为数字信息,如日期,金额,时间等</div>
    </div>
    <div class="row">
      <div class="fs20 fc-semi">页面大标题,20pt</div>
      <div class="fs11 fc-grey">页面大标题,一般用于结果、空状态等信息单一页面</div>
    </div>
    <div class="row">
      <div class="fs18 fc-semi">大按钮字体,18pt</div>
      <div class="fs11 fc-grey">页面内大按钮字体,与按钮搭配使用</div>
    </div>
    <div class="row">
      <div class="fs17 fc-semi">连续列表标题,17pt</div>
      <div class="fs11 fc-grey">页面内首要层级信息,基准的,可以连续的,如列表标题、消息气泡</div>
    </div>
    <div class="row">
      <div class="fs14 fc-grey">次要描述信息,14pt</div>
      <div class="fs11 fc-grey">页面次要描述信息,服务用于首要信息并与只关联,如列表摘要</div>
    </div>
    <div class="row">
      <div class="fs13 fc-blue">页面辅助信息,13pt</div>
      <div class="fs11 fc-blue">页面辅助信息,需要弱化的内容,如连接,小按钮</div>
    </div>
    <div class="row">
      <div class="fs11 fc-light">11pt</div>
      <div class="fs11 fc-light">说明文本,如版权信息等不需要用户关注的信息</div>
    </div>
    <div class="title">
      px单位
    </div>
    <div class="row">
      <div class="fsp32 fc-semi">页面大标题,32px</div>
      <div class="fsp12 fc-grey">页面大标题,一般用于结果、空状态等信息单一页面</div>
    </div>
    <div class="row">
      <div class="fsp24 fc-semi">大按钮字体,24px</div>
      <div class="fsp12 fc-grey">页面内大按钮字体,与按钮搭配使用</div>
    </div>
    <div class="row">
      <div class="fsp20 fc-semi">连续列表标题,20px</div>
      <div class="fsp12 fc-grey">页面内首要层级信息,基准的,可以连续的,如列表标题、消息气泡</div>
    </div>
    <div class="row">
      <div class="fsp16 fc-grey">次要描述信息,16px</div>
      <div class="fsp12 fc-grey">页面次要描述信息,服务用于首要信息并与只关联,如列表摘要</div>
    </div>
    <div class="row">
      <div class="fsp14 fc-blue">页面辅助信息,描述文字,14px</div>
      <div class="fs12 fc-blue">页面辅助信息,描述文字,需要弱化的内容,如连接,小按钮</div>
    </div>
    <div class="row">
      <div class="fs12 fc-light">非重要信息,12px</div>
      <div class="fs12 fc-light">说明文本,如版权信息等不需要用户关注的信息</div>
    </div>
  </div>
</template>
<script>
// 页面记录
import { pagelogs } from "@/utils/logs";

export default {
  data() {
    return {};
  },

  components: {},

  methods: {},

  created() {},
  onShow() {
    pagelogs();
  }
};
</script>
<style lang="scss" scoped>
.row {
  padding: 15px;
}
</style>
