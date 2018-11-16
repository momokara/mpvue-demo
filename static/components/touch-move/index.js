// common/component/touch-move/index.js
// 原生组件
let _startX = 0;
let _startY = 0;
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    touchstart: function (e) {

      _startX = e.touches[0].pageX;
      _startY = e.touches[0].pageY;
    },
    touchmove: function (e) {
      this.triggerEvent('move', {
        type: 'move',
        position: e.touches[0]
      })
    },
    touchend: function (e) {
      let _movedX = _startX - e.changedTouches[0].pageX;
      let _movedY = _startY - e.changedTouches[0].pageY;
      let _actionX = "";
      let _actionY = "";
      if (Math.abs(_movedX) > 50) {
        _actionX = _movedX > 0 ? 'slideleft' : 'slideright';
        this.triggerEvent(_actionX, {
          type: _actionX,
          position: e.changedTouches[0]
        })
      }
      if (Math.abs(_movedY) > 50) {
        _actionY = _movedY > 0 ? 'slideup' : 'slidedown';
        this.triggerEvent(_actionY, {
          type: _actionY,
          position: e.changedTouches[0]
        })
      }



    },
    tap: function (e) {

    }
  }
})