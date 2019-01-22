import {
  VantComponent
} from '../common/component';

VantComponent({
  props: {
    percentage: {
      type: Number,
      value: 10
    },
    color: {
      type: String,
      value: "red"
    },
    bgColor: {
      type: String,
      value: '#eee'
    },
    linecolor: {
      type: String,
      value: "#3AC569"
    },
    radius: {
      type: String,
      value: 50
    },
    linewidth: {
      type: String,
      value: 10
    },
  },
  data: {
    deg: 0
  },
  watch: {
    percentage: "getDeg"
  },
  computed: {
    bgBorderStyle: function bgBorderStyle() {
      let radius = this.data.radius;
      let bgColor = this.data.bgColor;
      let _w = radius * 2;
      return `width:${_w}rpx;height:${_w}rpx;`
    },
    infoBoxStyle: function infoBoxStyle() {
      let radius = this.data.radius - this.data.linewidth;
      let _w = radius * 2;
      return `width:${_w}rpx;height:${_w}rpx;top:${this.data.linewidth}rpx;margin-left:-${radius}rpx`
    },
    halfLineStyle: function halfLineStyle() {
      let radius = this.data.radius;
      let _h = radius * 2;
      return `width:${radius}rpx;height:${_h}rpx;border-radius:0 ${radius}rpx ${radius}rpx 0;`
    },
    halfCoverStyle: function halfCoverStyle() {
      let radius = this.data.radius;
      let _h = radius * 2;
      return `width:${radius}rpx;height:${_h}rpx;border-radius:0 ${radius}rpx ${radius}rpx 0;`
    },
    halfCoverStyle_left: function halfCoverStyle_left() {
      let radius = this.data.radius;
      let _h = radius * 2;
      return `width:${radius}rpx;height:${_h}rpx;border-radius:${radius}rpx 0 0 ${radius}rpx;`

    }
  },
  mounted: function mounted() {
    this.getDeg();
  },
  methods: {
    getDeg: function getDeg() {
      let _deg = this.data.percentage * 3.6;
      this.setData({
        deg: _deg
      })
    }
  },

});