<template>
  <div class="container">
    <div class="title fz-17pt">
      Lottery-Table 九宫格抽奖
    </div>
    <wheel :isplay="false" :btnImg="btnImg" :awardList="awardList" :resultID="resultID" @play="play" @over="over"></wheel>
    <div class="control-box">
      <van-cell-group>
        <van-field :label="'结果的ID'" :placeholder="'{String}中奖结果ID'" :border="true" data-name="resultID" @change="changeInput($event)" />
        <van-field :value="btnImg" :label="'按钮的图片'" :placeholder="'{String}按钮的图片'" :border="true" data-name="btnImg" @change="changeInput($event)" />
      </van-cell-group>
    </div>
    <div class="api-info">
      <div class="title color-35">API 说明</div>
      <div class="title color-888">接收参数</div>
      <van-row class="fsp14" v-for="tabrow in table_info_data" v-bind:key="tabrow">
        <van-col span="7" custom-class="table-col">
          {{tabrow.params}}
        </van-col>
        <van-col span="8" custom-class="table-col">
          {{tabrow.desc}}
        </van-col>
        <van-col span="6" custom-class="table-col ta-c ">
          {{tabrow.tpye}}
        </van-col>
        <van-col span="3" custom-class="table-col ta-c ">
          {{tabrow.default}}
        </van-col>
      </van-row>
      <div class="title color-888">回调方法</div>
      <van-row class="fsp14" v-for="tabrow in table_func_data" v-bind:key="tabrow">
        <van-col span="6" custom-class="table-col">
          {{tabrow.params}}
        </van-col>
        <van-col span="10" custom-class="table-col">
          {{tabrow.desc}}
        </van-col>
        <van-col span="8" custom-class="table-col ta-c ">
          {{tabrow.return}}
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 结果的id
      resultID: "",
      animateDuration: 0,
      // 开始按钮的图片
      btnImg:"https://cdn.huibaoming.com/haivit/public/image/20181108164431_588/dial_pointer.png",
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
        }
      ],
      table_info_data: [
        {
          params: "参数",
          desc: "说明",
          tpye: "类型",
          default: "默认值"
        },
        {
          params: "awardList",
          desc: "奖品列表",
          tpye: "Array",
          default: "[]"
        },
        {
          params: "arrImg",
          desc: "指针图",
          tpye: "String",
          default: "~"
        }
      ],
      table_func_data: [
        {
          params: "方法名",
          desc: "说明",
          return: "返回值"
        },
        {
          params: "play",
          desc: "点击指针时触发,点击之后即开始执行动画,没有得到结果时会一直执行",
          return: "-"
        },
        {
          params: "over",
          desc: "动画结束时触发,返回被抽中的奖品信息",
          return: "{Array}[{中奖结果}]"
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
.api-info {
  padding: 10rpx 10rpx 60rpx 10rpx;
}
</style>
