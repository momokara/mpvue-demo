<template>
  <div class="container">
    <div
      class="main-qinfo"
      v-if="arrShowQid.length>0"
    >
      <div class="fr">({{actIndex+1}}/{{sumQlength}})</div>
      <questionDetail
        :data="questionDetail"
        :answer="questionAnswer"
        @choose="choose"
        @fail="chooseFail"
        :canChoose="canChoose"
      ></questionDetail>
    </div>
    <div
      class="main-qinfo"
      v-else
    >
      加载中...
    </div>
    <van-popup
      v-if="arrShowQid.length>0"
      :show="isShowPop"
      custom-class="question-menu"
      @close="popToggle"
      position="bottom"
    >
      <questionMenu
        :data="arrShowQid"
        :active="actIndex"
        @goQuestion="goQuestion"
      ></questionMenu>
    </van-popup>
    <div class="footer-menu">
      <van-button
        custom-class="footer-btn"
        @clickbtn="goprev"
        type="primary"
        size="mini"
        :disabled="pageconfig.nChapter<=0&&pageconfig.nActive<=0"
      >上一题</van-button>

      <span @click="popToggle">选题目</span>
      <van-button
        custom-class="footer-btn fr"
        @clickbtn="gonext"
        type="primary"
        size="mini"
        :disabled="pageconfig.nChapter>=arrShowQid.length-1&&actIndex>=sumQlength-1"
      >下一题</van-button>
    </div>
  </div>
</template>
<script>
import { getQusetionList, getQuestionData } from "@/api/api.exam";
import questionDetail from "@/components/exam/questionDetail";
import questionMenu from "@/components/exam/questionMenu";
// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {
      pageconfig: {
        // 当前章节
        nChapter: 0,
        // 当前题号
        nActive: 0,
        sAcitveid: ""
      },
      data: {
        // 题目id 数组
        arrQid: [],
        // 题目数据
        objQData: {},
        // 用户答案
        objAnswer: {},
        // 收藏数据
        objCollect: {}
      },
      actIndex: 0,
      // 题目总长
      sumQlength: 0,
      isShowPop: false,
      // 当前显示内容
      questionDetail: {},
      questionAnswer: [],
      canChoose: true
    };
  },
  // 使用的 vue 组件
  components: { questionMenu, questionDetail },
  computed: {
    // 显示的题目数组
    arrShowQid() {
      let _showdata = this.data.arrQid;
      if (_showdata.length > 0) {
        let i = 0;
        _showdata.forEach(element => {
          element.data = element.data.map(e => {
            let isWrong;
            e = {
              data: e,
              index: i,
              isWrong
            };
            i++;
            return e;
          });
        });
        this.sumQlength = i;
      }
      return _showdata;
    }
  },
  watch: {
    "pageconfig.nActive": {
      handler: function(val, oldval) {}
    }
  },
  // 页面中的方法
  methods: {
    /**
     * 题目改变方法
     * @param {Number} num +1 上一题，-1 下一题
     * @return {String} 题目id
     */
    change: function(num) {
      let _this = this;
      let _nActive = _this.pageconfig.nActive + num;
      let _nChapter = _this.pageconfig.nChapter;
      if (
        _nActive > _this.arrShowQid[_nChapter].data.length - 1 ||
        _nActive < 0
      ) {
        _nChapter = _nChapter + num;
        _nActive = num < 0 ? _this.arrShowQid[_nChapter].data.length - 1 : 0;
      }
      return _this.goQuestion({ Chapter: _nChapter, Index: _nActive });
    },
    /**
     * 跳转到指定题目
     * @param {Number} Chapter 题目章节
     * @param {Number} Index 题目在章节中的序号
     */
    goQuestion: function({ Chapter, Index }) {
      this.pageconfig.nChapter = Chapter;
      this.pageconfig.nActive = Index;
      // this.canChoose = Math.random(0, 1) > 0.5 ? true : false;
      return this.freshActiveId();
    },
    // 更新当前显示的 题目id
    freshActiveId: function() {
      this.pageconfig.sAcitveid = this.arrShowQid[
        this.pageconfig.nChapter
      ].data[this.pageconfig.nActive].data;
      // 更新标记点
      this.actIndex = this.arrShowQid[this.pageconfig.nChapter].data[
        this.pageconfig.nActive
      ].index;
      this.getQdata(this.pageconfig.sAcitveid);
      return this.pageconfig.sAcitveid;
    },
    /**
     * 获取题目信息
     * @param {String} id 题目id
     */
    getQdata(id) {
      let _this = this;
      _this.questionDetail = _this.data.objQData[id]
        ? _this.data.objQData[id]
        : null;
      if (!_this.questionDetail) {
        return getQuestionData(id).then(res => {
          _this.data.objQData[id] = res;
          _this.questionDetail = _this.data.objQData[id];
        });
      }
    },
    // 上一题
    goprev: function(e) {
      let _this = this;
      console.log(_this.change(-1));
    },

    // 下一题
    gonext: function(e) {
      let _this = this;
      console.log(_this.change(+1));
    },
    // 选择答案
    choose: function(e) {
      console.log("choose", e, this.pageconfig.sAcitveid);
    },
    chooseFail: function(e) {
      console.log("chooseFail", e);
    },
    // 开关弹出层
    popToggle: function() {
      this.isShowPop = !this.isShowPop;
      if (this.isShowPop) {
        wx.stopPullDownRefresh();
      }
    },

    // 获取页面信息
    getPageData: function() {
      let _this = this;
      getQusetionList(0).then(res => {
        _this.data.arrQid = res.questionList;
        _this.goQuestion({ Chapter: 0, Index: 0 });
      });
    }
  },

  // 监听页面显示
  onShow() {
    pagelogs();
    this.getPageData();
  },

  // 监听页面隐藏
  onHide() {
    pagelogs(true);
  }
};
</script>


<style lang="scss">
.fr {
  float: right;
}
.container {
  padding: 0px 0px 50px 0px;
  .footer-menu {
    position: fixed;
    background-color: #ddd;
    bottom: 0;
    width: 100%;
  }
}
</style>
