<template>
  <div class="container">
    <div class="main-qinfo"
         v-if="arrShowQid.length>0">
      <div class="fr fc-grey"> <span @click="toggleCollect(pageconfig.sAcitveid)">
          <van-icon v-if="data.objCollect[pageconfig.sAcitveid]"
                    custom-class="foot-icon"
                    name="https://cdn.jiapeiyun.cn/haivit/public/image/20181218145810_379/已收藏星星.png"
                    size="16px" />
          <van-icon v-else
                    custom-class="foot-icon"
                    name="https://cdn.jiapeiyun.cn/haivit/public/image/20181218145810_379/未收藏.png"
                    size="16px" /></span>
        <span class="fc-green">{{actIndex+1}}</span>/{{sumQlength}}
      </div>
      <questionDetail v-if="questionDetail"
                      :data="questionDetail"
                      :answer="questionAnswer"
                      :qnum="actIndex+1"
                      @choose="choose"
                      @fail="chooseFail"
                      :canChoose="canChoose"></questionDetail>
      <div v-else>什么都没有</div>
    </div>
    <div class="main-qinfo"
         v-else>
      加载中...
    </div>
    <van-popup v-if="arrShowQid.length>0"
               :show="isShowPop"
               custom-class="question-menu"
               @close="popToggle"
               position="bottom">
      <questionMenu v-if="isShowPop"
                    :data="arrShowQid"
                    :answerData="data.objAnswer"
                    :active="actIndex"
                    @goQuestion="goQuestion"></questionMenu>
    </van-popup>
    <div class="footer-menu">
      <van-button custom-class="footer-btn fl"
                  @clickbtn="goprev"
                  type="primary"
                  :disabled="pageconfig.nChapter<=0&&pageconfig.nActive<=0">
        <van-icon custom-class="foot-icon"
                  name="arrow-left"
                  size="28px" />
      </van-button>
      <div class="footer-middle">
        <div class="menu-box">
          <div class="info-cell">
            <van-icon custom-class="foot-icon"
                      name="checked"
                      size="20px"
                      color="#3AC569" />
            <span class="num">{{dolength-wrongNum}}</span>
          </div>

          <div class="info-cell">
            <van-icon custom-class="foot-icon"
                      name="clear"
                      size="20px"
                      color="#F64C4C" />
            <span class="num">{{wrongNum}}</span>
          </div>
          <div class="info-cell">
            <span class="menu">
              <van-icon @click="popToggle"
                        custom-class="foot-icon"
                        name="https://cdn.jiapeiyun.cn/haivit/public/image/20181218145810_379/菜单栏.png"
                        size="20px"
                        color="#3AC569" />
            </span>
          </div>
        </div>
      </div>
      <van-button custom-class="footer-btn fr"
                  @clickbtn="gonext"
                  type="primary"
                  :disabled="pageconfig.nChapter>=arrShowQid.length-1&&actIndex>=sumQlength-1">
        <van-icon custom-class="foot-icon"
                  name="arrow"
                  size="28px" />
      </van-button>
    </div>
  </div>
</template>
<script>
import { getQusetionList, getQuestionData } from '@/api/api.exam'
import questionDetail from '@/components/exam/questionDetail'
import questionMenu from '@/components/exam/questionMenu'

import questionType from '@/store/questionType.js'
// 页面记录
import { pagelogs } from '@/utils/logs'
export default {
  data () {
    return {
      pageconfig: {
        // 当前章节
        nChapter: 0,
        // 当前题号
        nActive: 0,
        sAcitveid: ''
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
      wrongNum: 0,
      dolength: 0,
      // 题目总长
      sumQlength: 0,
      // 是否显示弹出层
      isShowPop: false,
      // 当前显示内容
      actIndex: 0,
      questionDetail: '',
      questionAnswer: [],
      canChoose: true
    }
  },
  // 使用的 vue 组件
  components: { questionMenu, questionDetail },
  computed: {
    // 显示的题目数组
    arrShowQid () {
      let _this = this
      let _showdata
      // eslint-disable-next-line eqeqeq
      if (_this.pageconfig.options.mode == 4) {
        _showdata = _this.findErr()
        // eslint-disable-next-line eqeqeq
      } else if (_this.pageconfig.options.mode == 5) {
        _showdata = _this.getCollect()
      } else {
        _showdata = _this.data.arrQid
      }
      if (_showdata.length > 0) {
        let i = 0
        _showdata.forEach(element => {
          if (element.data.length > 0) {
            element.data = element.data.map(e => {
              const _e = {
                id: e.id ? e.id : e,
                index: i
              }
              i++
              return _e
            })
          }
        })
        _this.sumQlength = i
      }
      return _showdata
    }
  },
  watch: {
    'pageconfig.nActive': {
      handler: function (val, oldval) {}
    }
  },
  // 页面中的方法
  methods: {
    /**
     * 题目改变方法
     * @param {Number} num +1 上一题，-1 下一题
     * @return {String} 题目id
     */
    change: function (num) {
      let _this = this
      let _nActive = _this.pageconfig.nActive + num
      let _nChapter = _this.pageconfig.nChapter
      if (
        _nActive > _this.arrShowQid[_nChapter].data.length - 1 ||
        _nActive < 0
      ) {
        _nChapter = _nChapter + num
        _nActive = num < 0 ? _this.arrShowQid[_nChapter].data.length - 1 : 0
      }
      return _this.goQuestion({ Chapter: _nChapter, Index: _nActive })
    },
    /**
     * 跳转到指定题目
     * @param {Number} Chapter 题目章节
     * @param {Number} Index 题目在章节中的序号
     */
    goQuestion: function ({ Chapter, Index }) {
      this.pageconfig.nChapter = Chapter
      this.pageconfig.nActive = Index
      // this.canChoose = Math.random(0, 1) > 0.5 ? true : false;
      return this.freshActiveId()
    },
    // 更新当前显示的 题目id
    freshActiveId: function () {
      // eslint-disable-next-line standard/computed-property-even-spacing
      this.pageconfig.sAcitveid = this.arrShowQid[
        this.pageconfig.nChapter
      ].data[this.pageconfig.nActive].id
      // 更新标记点
      // eslint-disable-next-line standard/computed-property-even-spacing
      this.actIndex = this.arrShowQid[this.pageconfig.nChapter].data[
        this.pageconfig.nActive
      ].index
      this.getQdata(this.pageconfig.sAcitveid)
      this.conutScore()
      this.questionAnswer = this.loadChoose(this.pageconfig.sAcitveid)
      return this.pageconfig.sAcitveid
    },
    /**
     * 获取题目信息
     * @param {String} id 题目id
     */
    getQdata (id) {
      let _this = this
      _this.questionDetail = _this.data.objQData[id]
        ? _this.data.objQData[id]
        : null
      if (!_this.questionDetail) {
        return getQuestionData(id).then(res => {
          _this.data.objQData[id] = res
          _this.questionDetail = _this.data.objQData[id]
        })
      }
    },
    // 上一题
    goprev: function (e) {
      let _this = this
      console.log(_this.change(-1))
    },

    // 下一题
    gonext: function (e) {
      let _this = this
      console.log(_this.change(+1))
    },
    // 选择答案
    choose: function (e) {
      this.questionAnswer = e.answer
      this.saveChoose(this.pageconfig.sAcitveid, e)
      this.conutScore()
    },
    chooseFail: function (e) {
      console.log('chooseFail', e)
    },
    // 保存选择
    saveChoose: function (id, data) {
      this.data.objAnswer[id] = data
    },
    // 获取错题
    findErr: function () {
      let err = [{ data: [] }]
      let answerData = this.data.objAnswer
      let i = 0
      for (const key in answerData) {
        if (answerData.hasOwnProperty(key)) {
          const element = answerData[key]
          if (element.isWrong) {
            let row = {
              id: key,
              index: i
            }
            i++
            err[0].data.push(row)
          }
        }
      }
      return err
    },
    /**
     * 切换收藏状态
     * @param {String} id 题目id
     */
    toggleCollect: function (id) {
      this.data.objCollect[id] = !this.data.objCollect[id]
      console.log(id, this.data.objCollect[id])
    },
    // 获取收藏
    getCollect: function () {
      let collect = [{ data: [] }]
      let collectData = this.data.objCollect
      let i = 0
      for (const key in collectData) {
        if (collectData.hasOwnProperty(key)) {
          const element = collectData[key]
          if (element) {
            let row = {
              id: key,
              index: i
            }
            i++
            collect[0].data.push(row)
          }
        }
      }
      console.log('collect', collect)
      return collect
    },
    // 加载选择
    loadChoose: function (id) {
      let _answer = this.data.objAnswer[id]
        ? this.data.objAnswer[id].answer
        : {}
      return _answer
    },
    // 保存文件名
    getsaveName: function () {
      return `oQdata_${questionType.state.tag}_${questionType.state.subject}`
    },
    // 全局保存记录
    saveQdata: function () {
      let fileName = this.getsaveName()
      wx.setStorageSync(fileName, this.data)
    },
    // 加载缓存记录
    loadQdata: function () {
      let fileName = this.getsaveName()
      return new Promise((resolve, reject) => {
        wx.getStorage({
          key: fileName,
          success: function (res) {
            resolve(res.data)
          },
          fail: function (err) {
            reject(err)
          }
        })
      })
    },
    // 统计成绩
    conutScore: function (e) {
      let _objAnswer = this.data.objAnswer
      let wrongNum = 0
      let dolength = 0
      for (const key in _objAnswer) {
        if (_objAnswer.hasOwnProperty(key)) {
          const element = _objAnswer[key]
          if (element.answer) {
            dolength++
          }
          if (element.isWrong) {
            wrongNum++
          }
        }
      }
      this.wrongNum = wrongNum
      this.dolength = dolength
      this.saveQdata()
      return { wrongNum, dolength }
    },
    // 开关弹出层
    popToggle: function () {
      this.isShowPop = !this.isShowPop
      if (this.isShowPop) {
        wx.stopPullDownRefresh()
      }
    },

    // 获取页面信息
    getPageData: function () {
      let _this = this
      getQusetionList(_this.pageconfig.options.mode).then(res => {
        _this.data.arrQid = res.questionList
        _this.goQuestion({ Chapter: 0, Index: 0 })
      })
    }
  },
  onLoad (options) {
    this.pageconfig.options = options
  },
  // 监听页面显示
  onShow () {
    pagelogs()
    let _this = this
    this.loadQdata()
      .then(res => {
        _this.data = res
        if (
          // eslint-disable-next-line eqeqeq
          _this.pageconfig.options.mode == 2 ||
          // eslint-disable-next-line eqeqeq
          _this.pageconfig.options.mode == 3
        ) {
          _this.getPageData()
        } else {
          _this.goQuestion({ Chapter: 0, Index: 0 })
        }
      })
      .catch(err => {
        console.log(err)
        _this.getPageData()
      })
  },

  // 监听页面隐藏
  onHide () {
    pagelogs(true)
  }
}
</script>


<style lang="scss">
@mixin line-height($height) {
  height: $height;
  line-height: $height;
  margin: 0;
  padding: 0;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
.container {
  padding: 0px 0px 50px 0px;
  .fr {
    margin: 3px 5px;
  }
  .footer-menu {
    position: fixed;
    background: #fff;
    box-shadow: 0 0 5px #333;
    bottom: 0;
    width: 100%;
    @include line-height(50px);
    .footer-btn {
      @include line-height(50px);
      position: relative;
      width: 50px;
      .foot-icon {
        position: absolute;
        top: 5px;
        left: 8px;
      }
    }
    .footer-middle {
      display: inline-block;
      width: 245px;
      padding: 0 15px;
      position: relative;
      .menu-box {
        display: flex;
        .info-cell {
          flex: 1;
          .foot-icon {
            position: absolute;
            top: 12px;
          }
          .menu {
            .foot-icon {
              right: 10px;
            }
          }
          .num {
            margin-left: 25px;
          }
        }
      }
    }
  }
}
</style>
