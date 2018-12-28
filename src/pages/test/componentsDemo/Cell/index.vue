<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-cell-group>
        <van-cell
          title="单元格"
          value="内容"
        />
        <van-cell
          title="单元格"
          value="内容"
          label="描述信息"
          :border="false"
        />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        单元格大小
      </div>
      <van-cell-group>
        <van-cell
          title="单元格"
          value="内容"
          size="large"
        />
        <van-cell
          title="单元格"
          value="内容"
          label="描述信息"
          size="large"
          :border="false"
        />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        展示图标
      </div>
      <van-cell-group>
        <van-cell
          title="单元格"
          icon="location"
          :border="false"
        />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        展示箭头
      </div>
      <van-cell-group>
        <van-cell
          title="单元格"
          is-link
        />
        <van-cell
          title="单元格"
          value="内容"
          is-link
        />
        <van-cell
          title="单元格"
          is-link
          :arrow-direction="'down'"
          value="内容"
          :border="false"
          :url="'/pages/dashboard/index'"
        />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        高级用法
      </div>
      <van-cell-group>
        <van-cell
          value="内容"
          icon="shop"
          is-link
        >
          <view slot="title">
            <view class="cell-title">单元格</view>
            <van-tag type="danger">标签</van-tag>
          </view>
        </van-cell>
        <van-cell
          title="单元格"
          icon="location"
          is-link
        />
        <van-cell
          title="单元格"
          :border="false"
        >
          <van-icon
            :slot="right-icon"
            :name="search"
          />
        </van-cell>
      </van-cell-group>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">CellGroup API</div>
      <apiTable :tabledata="table_api_cellgroup"></apiTable>

      <div class="fsp14 fc-grey">CellGroup 外部样式类</div>
      <apiTable :tabledata="table_custom_class_cellgroup"></apiTable>

      <div class="fsp14 fc-grey">Cell API</div>
      <apiTable :tabledata="table_api_cell"></apiTable>

      <div class="fsp14 fc-grey">Cell Event</div>
      <apiTable :tabledata="table_event_cell"></apiTable>

      <div class="fsp14 fc-grey">Cell Slot</div>
      <apiTable :tabledata="table_slot_cell"></apiTable>

      <div class="fsp14 fc-grey">Cell 外部样式类</div>
      <apiTable :tabledata="table_custom_class_cell"></apiTable>
    </div>
  </div>
</template>
<script>
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";

export default {
  data() {
    return {
      title: "",
      table_api_cellgroup: apiData.api_CellGroup,
      table_custom_class_cellgroup: apiData.custom_class_CellGroup,
      table_api_cell: apiData.api_Cell,
      table_event_cell: apiData.event_Cell,
      table_slot_cell: apiData.slot_Cell,
      table_custom_class_cell: apiData.custom_class_Cell
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {},
  onLoad(option) {
    if (option) {
      this.title = option.label;
    }
  }
};
</script>


<style lang="scss" scoped>
</style>
