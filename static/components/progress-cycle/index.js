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
      value: 15
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
      return `width:${_w}px;height:${_w}px;`
    },
    infoBoxStyle: function infoBoxStyle() {
      let radius = this.data.radius - this.data.linewidth;
      let _w = radius * 2;
      return `width:${_w}px;height:${_w}px;top:${this.data.linewidth}px;margin-left:-${radius}px`
    },
    halfLineStyle: function halfLineStyle() {
      let radius = this.data.radius;
      let _h = radius * 2;
      return `width:${radius}px;height:${_h}px;border-radius:0 ${radius}px ${radius}px 0;`
    },
    halfCoverStyle: function halfCoverStyle() {
      let radius = this.data.radius;
      let _h = radius * 2;
      return `width:${radius}px;height:${_h}px;`
    },
    halfCoverStyle_left: function halfCoverStyle_left() {
      let radius = this.data.radius;
      let _h = radius * 2;
      return `width:${radius}px;height:${_h}px;border-radius:${radius}px 0 0 ${radius}px;`

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
