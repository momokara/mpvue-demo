/* jshint esversion: 6 */
import {
  VantComponent
} from '../common/component';
let _perdeg = 0;
let autoStep;
VantComponent({
  props: {
    // 是否播放过度动画
    isAnimate: {
      type: Boolean,
      value: true,
    },
    // 动画播放时间
    animateDuration: {
      type: Number,
      value: 0,
    },
    // 按钮图
    btnImg: {
      type: String
    },
    // 奖品列表
    awardList: {
      type: Array,
      value: []
    },
    // 结果的ID
    resultId: {
      type: String
    },
  },
  data: {
    // 旋转的序号
    showindex: [0, 1, 2, 5, 8, 7, 6, 3],
    now_step: null,
    act_step: null,
    awardListShow: []
  },
  watch: {
    awardList: "_setAwardList",
    resultId: "goRes"
  },
  methods: {
    // 点击转动按钮发送的事件
    onStart: function () {
      let _this = this;
      _this.$emit('play', _this.data);
      clearInterval(autoStep);
      autoStep = setInterval(() => {
        _this.goStep();
      }, 100);
    },
    // 转动到结果 根据 data.resultId
    goRes: function () {
      let _this = this;
      let id = _this.data.resultId;
      clearInterval(autoStep);
      autoStep = setInterval(() => {
        _this.goStep();
      }, 80);
      if (id) {
        let _awardList = _this.data.awardListShow;
        let _resindex = _awardList.findIndex(function (event) {
          return event.id == id;
        });
        console.log(_resindex);
        if (_resindex < 0) {
          console.info('没有奖品');
          _this.$emit("over", {
            err: "empty",
            msg: "没有此奖品"
          });
          _this.setData({
            act_step: null
          });
          return false;
        } else {
          let delaytime = 100;
          let _fn = function () {
            if (_this.data.act_step != _resindex) {
              _this.goStep();
              delaytime = delaytime * 1.2;
              clearInterval(autoStep);
              autoStep = setInterval(_fn, delaytime);
            } else {
              _this.$emit("over", _this.data.awardListShow[_resindex]);
              clearInterval(autoStep);
            }
          };
          clearInterval(autoStep);
          autoStep = setInterval(_fn, delaytime);
        }
      } else {
        console.info('网络错误');
        clearInterval(autoStep);
        this.setData({
          act_step: null
        });
      }
    },
    // 步进
    goStep: function () {
      let _step = this.data.now_step;
      if (_step != null) {
        _step = _step + 1;
      } else {
        _step = 0;
      }
      this.setData({
        act_step: this.data.showindex[_step % 8],
        now_step: _step,
      });
    },
    // 处理奖品显示数组
    _setAwardList: function () {
      let _awardList = this.data.awardList;
      for (let index = _awardList.length; index < 8; index++) {
        _awardList.splice(index, 0, {
          id: `empty${index}`,
          name: "谢谢参与"
        });
      }
      _awardList.splice(4, 0, 'button');
      this.setData({
        awardListShow: _awardList
      });
    }
  },
  // 组件挂载
  mounted: function () {
    this._setAwardList();
  },

});