<template>
  <div class="container">
    <div class="title">
      Layout 布局组件
    </div>
    <div class="demo">
      <div class="fsp14 fc-grey">基本用法</div>
      <div class="fs12 fc-grey">Layout 组件提供了24列栅格，通过在Col上添加span属性设置列所占的宽度百分比
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

      <div class="fsp14 fc-grey">设置列元素间距</div>
      <div class="fs12 fc-grey">通过gutter属性可以设置列元素之间的间距，默认间距为 0</div>
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
      <div class="4 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">Row</div>
      <apiTable :tabledata="table_api_Row"></apiTable>

      <div class="fsp14 fc-grey">Col</div>
      <apiTable :tabledata="table_api_Col"></apiTable>

      <div class="fsp16 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_custom_class"></apiTable>
    </div>
  </div>
</template>

<script>
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";
export default {
  data() {
    return {
     table_api_Row:apiData.api_row,
     table_api_Col:apiData.api_col,
     table_custom_class:apiData.custom_class
    };
  },

  components: {
    apiTable
  },

  methods: {},
};
</script>

<style>
.container .innerbox {
  border: 1px solid #ddd;
  font-size: 12px;
}
</style>
