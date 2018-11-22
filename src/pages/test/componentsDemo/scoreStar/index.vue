<template>
  <div class="container">
    <div class="title fz-17pt">
      Score-Star 得分五角星组件
    </div>
    <div class="demo-box">
      <score-star :score="score" :UseHalfStar="UseHalfStar" :halfStarImg="halfStarImg" :fullStarImg="fullStarImg" :emptyStarImg="emptyStarImg">
      </score-star>
    </div>

    <div class="control-box">
      <van-cell-group>
        <van-field :label="'得分'" :value="score" :placeholder="'{String}score'" :border="true" data-name="score" @change="changeInput($event)" />
        <van-field :label="'整个星星'" :value="fullStarImg" :placeholder="'{String}fullStarImg'" :border="true" data-name="fullStarImg" @change="changeInput($event)" />
        <van-field :label="'半个星星'" :value="halfStarImg"  :placeholder="'{String}halfStarImg'" :border="true" data-name="HalfStarImg" @change="changeInput($event)" />
        <van-field :label="'空星星'" :value="emptyStarImg" :placeholder="'{String}emptyStarImg'" :border="true" data-name="emptyStarImg" @change="changeInput($event)" />
        <van-cell>
          <div slot="title">
            <span class="van-cell-text">UseHalfStar(是否显示半个星星)</span>
          </div>
          <div>
            <van-switch :checked="UseHalfStar" @change="ChangeSwitch" />
          </div>
        </van-cell>
      </van-cell-group>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "这里是消息",
      score: 1.5,
      UseHalfStar: false,
      halfStarImg:
        "https://momokarapage.oss-cn-shenzhen.aliyuncs.com/static/%E6%98%9F%E6%98%9F.png",
      fullStarImg:
        "https://momokarapage.oss-cn-shenzhen.aliyuncs.com/static/%E6%B4%BB%E5%8A%A8%2C%E4%BA%94%E8%A7%92%E6%98%9F%2C%E6%98%9F.png",
      emptyStarImg:
        "https://momokarapage.oss-cn-shenzhen.aliyuncs.com/static/%E7%BB%8F%E5%85%B8%E6%A1%88%E4%BE%8B_%E7%A9%BA%E4%BA%94%E8%A7%92%E6%98%9F_%E6%94%B6%E8%97%8F.png"
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
    ChangeSwitch: function(event) {
      console.log(event.mp.detail);
      this.UseHalfStar = event.mp.detail;
    }
  },
  // VUE 钩子 常用
  // 页面初始化钩子 可以加载本地配置
  beforeCreate() {
    console.log("demopage-beforeCreate", this.msg);
  },
  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {
    console.log("demopage-created", this.msg);
  },
  // 页面节点挂载之前 对请求数据进行处理
  beforeMount() {
    console.log("demopage-beforeMount", this.msg);
  },
  // 页面节点挂载
  mounted() {
    console.log("demopage-mounted", this.msg);
  },
  // 页面跟新 之前 数据变更预处理
  beforeUpdate() {
    console.log("demopage-beforeUpdate", this.msg);
  },
  // 页面数据更新之后  数据变更处理
  updated() {
    console.log("demopage-updated", this.msg);
  },
  // 原生钩子
  // 监听页面加载
  onLoad() {
    console.log("demopage-onLoad", this.msg);
  },
  // 监听页面显示
  onShow() {
    console.log("demopage-onShow", this.msg);
  },
  // 监听页面初次渲染完成
  onReady() {
    console.log("demopage-onReady", this.msg);
  },
  // 监听页面隐藏
  onHide() {
    console.log("demopage-onHide", this.msg);
  },
  // 监听页面卸载
  onUnload() {
    console.log("demopage-onUnload", this.msg);
  },
  // 监听用户下拉动作
  onPullDownRefresh() {
    console.log("demopage-onPullDownRefresh", this.msg);
  },
  // 页面上拉触底事件的处理函数
  onReachBottom() {
    console.log("demopage-onReachBottom", this.msg);
  },
  // 用户点击右上角分享
  onShareAppMessage() {
    console.log("demopage-onShareAppMessage", this.msg);
  },
  // 页面滚动
  onPageScroll() {
    console.log("demopage-onPageScroll", this.msg);
  },
  // 当前是 tab 页时，点击 tab 时触发 （mpvue 0.0.16 支持）
  onTabItemTap() {
    console.log("demopage-onTabItemTap", this.msg);
  }
};
</script>


<style lang="scss">
.demo-box {
  padding: 15px;
}
</style>
