<template>
  <div class="container">
    <div class="title fz-17pt">
      Layout 布局组件
    </div>
    <div>
      <div class="title fz-17pt color-35">使用demo</div>
      <div class="title fz-15pt color-35">基本用法</div>
      <div class="title fz-11pt color-888">Layout 组件提供了24列栅格，通过在Col上添加span属性设置列所占的宽度百分比
        此外，添加offset属性可以设置列的偏移宽度，计算方式与 span 相同</div>
      <van-row>
        <van-col span="8">
          <div class="innerbox">
            span: 8
          </div>
        </van-col>
        <van-col span="8">
          <div class="innerbox">
            span: 8
          </div>
        </van-col>
        <van-col span="8">
          <div class="innerbox">
            span: 8
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="4">
          <div class="innerbox">
            span: 4
          </div>
        </van-col>
        <van-col span="10" offset="4">
          <div class="innerbox">offset: 4, span: 10</div>
        </van-col>
      </van-row>

      <van-row>
        <van-col offset="12" span="12">
          <div class="innerbox">offset: 12, span: 12</div>
        </van-col>
      </van-row>
    </div>

    <div>
      <div class="title fz-15pt color-35">设置列元素间距</div>
      <div class="title fz-11pt color-888">通过gutter属性可以设置列元素之间的间距，默认间距为 0</div>
      <van-row gutter="20">
        <van-col span="8">
          <div class="innerbox">
            span: 8
          </div>
        </van-col>
        <van-col span="8">
          <div class="innerbox">
            span: 8
          </div>
        </van-col>
        <van-col span="8">
          <div class="innerbox">
            span: 8
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="info">
      <div class="title fz-17pt color-35">API 说明</div>
      <div class="title fz-15pt color-888">Row</div>

      <van-row v-for="tabrow in table_info_Row" v-bind:key="tabrow">
        <van-col span="4" custom-class="table-col">
          {{tabrow.params}}
        </van-col>
        <van-col span="10" custom-class="table-col">
          {{tabrow.desc}}
        </van-col>
        <van-col span="7" custom-class="table-col">
          {{tabrow.tpye}}
        </van-col>
        <van-col span="3" custom-class="table-col ta-c">
          {{tabrow.default}}
        </van-col>
      </van-row>

      <div class="title fz-15pt color-888">Col</div>
      <van-row v-for="tabrow in table_info_Col" v-bind:key="tabrow">
        <van-col span="4" custom-class="table-col">
          {{tabrow.params}}
        </van-col>
        <van-col span="10" custom-class="table-col">
          {{tabrow.desc}}
        </van-col>
        <van-col span="7" custom-class="table-col">
          {{tabrow.tpye}}
        </van-col>
        <van-col span="3" custom-class="table-col ta-c">
          {{tabrow.default}}
        </van-col>
      </van-row>

      <div class="title fz-17pt color-35">外部样式类</div>
      <van-row>
        <van-col span="8" custom-class="table-col">
          类名
        </van-col>
        <van-col span="16" custom-class="table-col">
          说明
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8" custom-class="table-col">
          custom-class
        </van-col>
        <van-col span="16" custom-class="table-col">
          根节点样式类
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import demoBlock from "@/components/demo-block";
export default {
  data() {
    return {
      table_info_Row: [
        {
          params: "参数",
          desc: "说明",
          tpye: "类型",
          default: "默认值"
        },
        {
          params: "gutter",
          desc: "列元素之间的间距（单位为px）",
          tpye: "String | Number",
          default: "-"
        }
      ],
      table_info_Col: [
        {
          params: "参数",
          desc: "说明",
          tpye: "类型",
          default: "默认值"
        },
        {
          params: "span",
          desc: "列元素宽度",
          tpye: "String | Number",
          default: "-"
        },
        {
          params: "offset",
          desc: "列元素偏移距离",
          tpye: "String | Number",
          default: "-"
        }
      ]
    };
  },

  components: {
    demoBlock
  },

  methods: {},

  created() {}
};
</script>

<style>
.container .innerbox {
  border: 1px solid #ddd;
  font-size: 11pt;
}
.table-col {
  font-size: 11pt;
  border-top: 1px solid #333;
}
</style>
