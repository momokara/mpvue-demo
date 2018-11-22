<template>
  <div class="container">
    <div class="title fz-17pt">
      Score-Star 得分五角星组件
    </div>
    <div class="demo">
      <score-star 
      :custom-class="'testclass'" 
      :width="width" 
      :height="height" 
      :score="score" 
      :UseHalfStar="UseHalfStar" 
      :halfStarImg="halfStarImg" 
      :fullStarImg="fullStarImg" 
      :emptyStarImg="emptyStarImg" 
      @tapstar="clickstar">
      </score-star>
    </div>

    <div class="control-box">
      <van-cell-group>
        <van-field :label="'得分'" :value="score" :placeholder="'{String}score'" :border="true" data-name="score" @change="changeInput($event)" />
        <van-field :label="'整个星星'" :value="fullStarImg" :placeholder="'{String}fullStarImg'" :border="true" data-name="fullStarImg" @change="changeInput($event)" />
        <van-field :label="'半个星星'" :value="halfStarImg" :placeholder="'{String}halfStarImg'" :border="true" data-name="HalfStarImg" @change="changeInput($event)" />
        <van-field :label="'空星星'" :value="emptyStarImg" :placeholder="'{String}emptyStarImg'" :border="true" data-name="emptyStarImg" @change="changeInput($event)" />
        <van-field :label="'width'" :value="width" :placeholder="'{String}width'" :border="true" data-name="width" @change="changeInput($event)" />
        <van-field :label="'height'" :value="height" :placeholder="'{String}height'" :border="true" data-name="height" @change="changeInput($event)" />
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
    <!-- info -->
    <div class="info">
      <div class="title fz-17pt color-35">API 说明</div>
      <div class="title fz-15pt color-888">API</div>
      <van-row class="fsp14" v-for="tabrow in table_scoreStar_api" v-bind:key="tabrow">
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

      <div class="title fz-17pt color-35">外部样式类</div>
      <van-row class="fsp14" v-for="tabrow in custom_class_data" v-bind:key="tabrow">
        <van-col span="6" custom-class="table-col">
          {{tabrow.params}}
        </van-col>
        <van-col span="18" custom-class="table-col">
          {{tabrow.desc}}
        </van-col>
      </van-row>

      <div class="title fz-17pt color-35">Event</div>
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
      msg: "这里是消息",
      score: 1.5,
      UseHalfStar: false,
      width: "",
      height: "",
      halfStarImg:
        "https://momokarapage.oss-cn-shenzhen.aliyuncs.com/static/%E6%98%9F%E6%98%9F.png",
      fullStarImg:
        "https://momokarapage.oss-cn-shenzhen.aliyuncs.com/static/%E6%B4%BB%E5%8A%A8%2C%E4%BA%94%E8%A7%92%E6%98%9F%2C%E6%98%9F.png",
      emptyStarImg:
        "https://momokarapage.oss-cn-shenzhen.aliyuncs.com/static/%E7%BB%8F%E5%85%B8%E6%A1%88%E4%BE%8B_%E7%A9%BA%E4%BA%94%E8%A7%92%E6%98%9F_%E6%94%B6%E8%97%8F.png",
      table_scoreStar_api: [
        {
          params: "参数",
          desc: "说明",
          tpye: "类型",
          default: "默认值"
        },
        {
          params: "score",
          desc: "得分	",
          tpye: "String",
          default: "-"
        },
        {
          params: "fullStarImg",
          desc: "整个星星到图片路径	",
          tpye: "String",
          default: "-"
        },
        {
          params: "halfStarImg",
          desc: "半个星星到图片路径	",
          tpye: "String",
          default: "-"
        },
        {
          params: "emptyStarImg",
          desc: "空星星到图片路径	",
          tpye: "String",
          default: "-"
        },
        {
          params: "UseHalfStar",
          desc: "是否在有小数到时候显示半个星星	",
          tpye: "Boolean",
          default: "false"
        },
        {
          params: "width",
          desc: "星星宽度",
          tpye: "String",
          default: "-"
        },
        {
          params: "height",
          desc: "星星高度",
          tpye: "String",
          default: "-"
        },
        {
          params: "fontsize",
          desc: "字体大小",
          tpye: "String",
          default: "-"
        }
      ],
      table_func_data: [
        {
          params: "方法名",
          desc: "说明",
          return: "返回值"
        },
        {
          params: "tapstar",
          desc: "点击星星回调事件",
          return: ".detail 点击到序号"
        }
      ],
      custom_class_data: [
        {
          params: "类名",
          desc: "说明"
        },
        {
          params: "custom-class",
          desc: "根节点样式类"
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
    ChangeSwitch: function(event) {
      console.log(event.mp.detail);
      this.UseHalfStar = event.mp.detail;
    },
    clickstar: function(event) {
      console.log(event.mp.detail);
    }
  }
};
</script>


<style lang="scss">

</style>
