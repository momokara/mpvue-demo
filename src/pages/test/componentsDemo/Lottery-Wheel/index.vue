<template>
  <div class="container">
    <wheel :isplay="false" :awardList="awardList" :defaultDeg="defaultDeg" :resultID="resultID" :rotateDeg="rotateDeg" :animateDuration="animateDuration" @play="play" @over="over"></wheel>
    <div class="control-box">
      <van-cell-group>
        <van-field :label="'动画时间'" :placeholder="'{Number}动画持续时间(单位秒)'" :border="true" data-name="animateDuration" @change="changeInput($event)" />
        <van-field :label="'初始偏转'" :placeholder="'{Number}文字初始偏转的角度(单位°)'" :border="true" data-name="defaultDeg" @change="changeInput($event)" />
        <van-field :label="'结果的ID'" :placeholder="'{String}中奖结果ID'" :border="true" data-name="resultID" @change="changeInput($event)" />
        <van-field :label="'转动角度'" :placeholder="'{Number}圆盘转动的角度(单位°)'" :border="true" data-name="rotateDeg" @change="changeInput($event)" />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "这里是消息",
      // 默认旋转的角度
      defaultDeg: 22.5,
      // 结果的id
      resultID: "",
      // 指定转动的角度
      rotateDeg: "",
      animateDuration: 0,
      // 奖品列表
      awardList: [
        {
          id: 156,
          name: "健程纳米补水仪HE6",
          img:
            "https://cdn.jiapeiyun.cn/haivit/public/image/20181006144042_262/9964_1.jpg"
        },
        {
          id: 157,
          name: "健程可视眼部按摩仪HY001",
          img:
            "https://cdn.jiapeiyun.cn/haivit/public/image/20181006144042_926/9945_主图1.jpg"
        },
        {
          id: 158,

          name: "双层玻璃杯",
          img:
            "https://cdn.jiapeiyun.cn/haivit/public/image/20180922084530_166/双层玻璃杯.jpg"
        },
        {
          id: 159,
          name: "研坤矿化杯",
          img:
            "https://cdn.jiapeiyun.cn/haivit/public/image/20181006144042_718/8664_133.jpg"
        },
        {
          id: 160,
          name: "AIMA艾玛蓝牙耳机运动入耳塞",
          img:
            "https://cdn.jiapeiyun.cn/haivit/public/image/20180907092155_867/8177_金.jpg"
        },
        {
          id: 161,
          name: "价值88元积分券",
          img:
            "https://cdn.jiapeiyun.cn/haivit/public/image/20180922084530_210/88元积分.png"
        },
        {
          id: 162,
          name: "价值88元积分券2",
          img:
            "https://cdn.jiapeiyun.cn/haivit/public/image/20180922084530_210/88元积分.png"
        },
        {
          id: 163,
          name: "价值88元积分券3",
          img:
            "https://cdn.jiapeiyun.cn/haivit/public/image/20180922084530_210/88元积分.png"
        }
      ]
    };
  },
  // 使用的 vue 组件
  components: {},
  // 页面中的方法
  methods: {
    // 输入信息
    changeInput: function(event) {
      this[event.currentTarget.dataset.name] = event.mp.detail;
    },
    // 转盘回调
    play: function(e) {
      console.log("play", e.mp.detail);
    },
    over: function(e) {
      console.log("over", e.mp.detail);
    }
  },

  // 页面创建时使用的钩子
  created() {
    console.log("demopage-created", this.msg);
  },
  // 页面数据更新之后  数据变更处理
  updated() {
    console.log("demopage-updated", this.msg);
  },
  // 页面隐藏
  onHide() {
    console.log("demopage-onHide", this.msg);
  },
  // 监听页面卸载
  onUnload() {
    console.log("demopage-onUnload", this.msg);
  },
  // 用户点击右上角分享
  onShareAppMessage() {
    console.log("demopage-onShareAppMessage", this.msg);
  }
};
</script>


<style lang="scss">
</style>
