/* jshint esversion: 6 */
import {
  VantComponent
} from '../common/component';
let _perdeg = 0;
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
    // 初始的偏移角度
    defaultDeg: {
      type: Number,
      value: 0
    },
    // 圆盘的背景图
    bgImg: {
      type: String,
      value: "https://cdn.huibaoming.com/haivit/public/image/20181108164431_588/dial.png"
    },
    // 旋转的角度
    rotateDeg: {
      type: Number,
      value: 0,
    },
    // 指针图
    arrImg: {
      type: String,
      value: "https://cdn.huibaoming.com/haivit/public/image/20181108164431_588/dial_pointer.png"
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
    // 旋转角度
    perCelldeg: []
  },
  watch: {
    defaultDeg: "_setCelldeg",
    resultId: "gores",
    rotateDeg: "goDeg",
    awardList: "_setCelldeg"
  },
  methods: {
    // 点击转动按钮发送的事件
    onstart: function () {
      this.$emit('play', this.data);
    },
    // 转动到结果 根据 data.resultId
    gores: function () {
      let _this = this;
      _this.reset();
      _this.setData({
        isAnimate: true
      });
      let id = _this.data.resultId;
      let _res = [];
      if (id) {
        _res = _this.data.awardList.filter((e, i) => {
          if (e.id == id) {
            let resdeg = (360 - _this.data.perCelldeg[i]) + 360 * 20;
            _this.setData({
              rotateDeg: resdeg
            });
            return true;
          }
        });
        if (_res.length < 1) {
          _this.reset();
        } else {
          let _delaytime = _this.data.animateDuration ? _this.data.animateDuration * 1000 : 3000;
          setTimeout(() => {
            _this.$emit('over', _res);
          }, _delaytime);
        }
      } else {
        console.log('网络错误');
      }

    },
    // 转动到指定角度 data.rotateDeg
    goDeg() {
      this.$emit('rotate', this.data.rotateDeg);
    },
    // 重置转盘
    reset: function () {
      this.setData({
        isAnimate: false,
        rotateDeg: 0
      });
    },
    // 设置单元的角度
    _setCelldeg: function () {
      this.setData({
        perCelldeg: this._getCellDeg(this.data.awardList)
      });
    },
    /**
     * 获取每个奖品的角度
     * @param {Array} awardList 奖品列表
     */
    _getCellDeg: function (awardList) {
      let _degArr = [];
      let _length = awardList.length ? awardList.length : 0;
      if (_length > 1) {
        _perdeg = 360 / _length;
        for (let index = 0; index < _length; index++) {
          let _deg = this.data.defaultDeg + _perdeg * index;
          _degArr.push(_deg);
        }
      }
      return _degArr;
    }
  },
  mounted: function () {
    this._setCelldeg();
  },

});
