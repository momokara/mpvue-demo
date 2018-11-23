<template>
  <div class="container">
    <div class="title ">
      Cell 单元格
    </div>
    <div class="demo">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" :border="false" />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        单元格大小
      </div>
      <van-cell-group>
        <van-cell title="单元格" value="内容" size="large" />
        <van-cell title="单元格" value="内容" label="描述信息" size="large" :border="false" />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        展示图标
      </div>
      <van-cell-group>
        <van-cell title="单元格" icon="location" :border="false" />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        展示箭头
      </div>
      <van-cell-group>
        <van-cell title="单元格" is-link />
        <van-cell title="单元格" value="内容" is-link />
        <van-cell title="单元格" is-link :arrow-direction="'down'" value="内容" :border="false" :url="'/pages/dashboard/index'" />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        高级用法
      </div>
      <van-cell-group>
        <van-cell value="内容" icon="shop" is-link>
          <view slot="title">
            <view class="cell-title">单元格</view>
            <van-tag type="danger">标签</van-tag>
          </view>
        </van-cell>
        <van-cell title="单元格" icon="location" is-link />
        <van-cell title="单元格" :border="false">
          <van-icon :slot="right-icon" :name="search" />
        </van-cell>
      </van-cell-group>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">CellGroup API</div>
      <apiTable :tabledata="CellGroup_api_info"></apiTable>

      <div class="fsp14 fc-grey">CellGroup 外部样式类</div>
      <apiTable :tabledata="CellGroup_custom_class"></apiTable>

      <div class="fsp14 fc-grey">Cell API</div>
      <apiTable :tabledata="Cell_api_info"></apiTable>

      <div class="fsp14 fc-grey">Cell Event</div>
      <apiTable :tabledata="Cell_event_info"></apiTable>

      <div class="fsp14 fc-grey">Cell Slot</div>
      <apiTable :tabledata="Cell_slot_info"></apiTable>

      <div class="fsp14 fc-grey">Cell 外部样式类</div>
      <apiTable :tabledata="Cell_custom_class_info"></apiTable>
    </div>
  </div>
</template>
<script>
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";

export default {
  data() {
    return {
      CellGroup_api_info: apiData.api_CellGroup,
      CellGroup_custom_class: apiData.custom_class_CellGroup,
      Cell_api_info: apiData.api_Cell,
      Cell_event_info: apiData.event_Cell,
      Cell_slot_info: apiData.slot_Cell,
      Cell_custom_class_info: apiData.custom_class_Cell,
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {},
  // VUE 钩子 常用

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {
    console.log("demopage-created", this.msg);
  },
  // 页面节点挂载
  mounted() {
    console.log("demopage-mounted", this.msg);
  }
};
</script>


<style lang="scss" scoped>
</style>
