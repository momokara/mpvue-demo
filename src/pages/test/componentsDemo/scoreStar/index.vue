<template>
  <div class="container">
    <div class="title fz-17pt">
      Score-Star 得分五角星组件
    </div>
    <div class="demo">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <score-star :custom-class="'testclass'" :width="width" :height="height" :score="score" :use-half-star="UseHalfStar" :half-star-img="halfStarImg" :full-star-img="fullStarImg" :emptyStarImg="emptyStarImg" @tapstar="clickstar">
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
      <div class="title fc-semi">API 说明</div>
      <div class="fsp16 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="tfsp16 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_custom_class"></apiTable>

      <div class="fsp16 fc-grey">Event</div>
      <apiTable :tabledata="table_event"></apiTable>
    </div>
  </div>
</template>
<script>
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";
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
      table_api: apiData.api,
      table_event: apiData.event,
      table_custom_class: apiData.custom_class
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
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
