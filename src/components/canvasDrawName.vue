<template>
  <div class="draw-box-comp">
    <div class="draw-box">

      <canvas canvas-id="draw-box"
              class="canvas"
              @touchmove="touchmove"
              @touchstart="touchstart"></canvas>
      <!-- <img class="bgImg"
           src="http://s4.sinaimg.cn/large/572b4da2g72408eec4173&690"
           alt="">
      <div class="font-cover">朱</div> -->
    </div>
    <button @click="getCanvasData">getCanvasData</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      point: '',
      startPoint: {}
    }
  },
  props: {},
  components: {},
  computed: {},
  methods: {
    touchmove: function (e) {
      this.drawPoint(e.x, e.y)
      console.log('touchmove', e.x, e.y)
    },
    touchstart: function (e) {
      this.startPoint = {
        x: e.x,
        y: e.y
      }
      console.log('touchmove', this.startPoint)
    },
    drawPoint (x, y) {
      let point = this.point
      if (!this.startPoint.x) {
        this.startPoint = {
          x,
          y
        }
      }
      point.moveTo(this.startPoint.x, this.startPoint.y)
      point.lineTo(x, y)
      point.stroke()
      point.draw(true)
      this.startPoint = {
        x,
        y
      }
    },
    getCanvasData () {
      wx.canvasToTempFilePath(
        {
          canvasId: 'draw-box',
          success: res => {
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: res => {
                console.log(res)
              },
              fail: err => {
                console.error(err)
              }
            })
          },
          fail: err => {
            console.error(err)
          }
        },
        this
      )
    },
    clearCanvas: function () {
      let point = this.point
      point.clearRect(0, 0, 305, 305)
      point.draw()
    }
  },
  onReady () {
    this.point = wx.createCanvasContext('draw-box')
    console.log(this.point)
  }
}
</script>

<style lang="scss">
@mixin filled-box($width, $height) {
  height: $height;
  width: $width;
  text-align: center;
  line-height: $height;
  position: absolute;
  top: 0;
  right: 0;
}
.draw-box {
  position: relative;
  height: 400px;
  width: 305px;
  margin: 10px auto;
  .bgImg {
    z-index: -2;
    @include filled-box(305px, 400px);
  }
  .font-cover {
    z-index: -1;
    @include filled-box(305px, 400px);
    font-size: 250px;
    color: #ddd;
  }
  .canvas {
    z-index: 1;
    @include filled-box(305px, 400px);
  }
}
</style>

