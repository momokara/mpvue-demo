<template>
  <div class="container">
    <div class="header-info">
      <div class="title">{{qdata.cName}}({{qdata.tag}})</div>
      <div class="fsp14 fc-grey info">{{qdata.info}}</div>
    </div>
    <div class="menu-box">
      <div class="drive-list">
        <div class="title">驾驶证</div>
        <selectClassNav
          :config="navconfig"
          :data="data.dataDrive"
          :is-link="false"
          :actived="qdata.cName"
          @golink="selectClass"
        >
        </selectClassNav>
      </div>
      <div class="license-list">
        <div class="title">资格证</div>
        <selectClassNav
          :config="navconfig"
          :data="data.dataLicense"
          :is-link="false"
          :actived="qdata.cName"
          @golink="selectClass"
        >
        </selectClassNav>
      </div>
      <div class="button-box ta-c">
        <van-button
          type="primary"
          size="large"
          @click="confirm"
        >确定</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import selectClassNav from "@/components/exam/selectClassNav";
import { getClassList, loadqType } from "@/api/api.exam";
import { golink } from "@/utils/tools";
import questionType from "@/store/questionType.js";

// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {
      pageconfig: {},
      navconfig: {
        rowsize: 4,
        isShowNotice: false
      },
      data: {},
      qdata: {}
    };
  },
  // 使用的 vue 组件
  components: {
    selectClassNav
  },

  computed: {},
  // 页面中的方法
  methods: {
    getPageData: function() {
      let _this = this;
      getClassList().then(res => {
        _this.data = res;
      });
    },
    selectClass: function(e) {
      let qdata = {
        id: e.id,
        tag: e.tag,
        cName: e.name,
        info: e.info
      };
      this.qdata = qdata;
      console.log(qdata);
    },
    confirm: function() {
      let _this = this;
      questionType.commit("updataByKey", _this.qdata);
      wx.setStorageSync("qType", _this.qdata);
      golink("pages/mockExam/examHome/main");
    }
  },

  // 监听页面加载
  onLoad() {
    loadqType();
  },
  // 监听页面显示
  onShow() {
    pagelogs();
    this.getPageData();
    this.qdata = questionType.state;
  
  },

  // 监听页面隐藏
  onHide() {
    pagelogs(true);
  }
};
</script>


<style lang="scss">
@mixin mainbox($mtop, $mbutton) {
  width: 350px;
  margin: $mtop auto $mbutton auto;
}
.header-info {
  .info {
    @include mainbox(0, 0);
    height: 120px;
  }
}
.button-box {
  @include mainbox(10px, 30px);
}
</style>
