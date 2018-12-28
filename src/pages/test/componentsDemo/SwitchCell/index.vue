<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-cell-group>
        <van-switch-cell
          title="标题"
          :checked="checked"
          @change="onChange"
        />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        禁用状态
      </div>
      <van-cell-group>
        <van-switch-cell
          disabled
          title="标题"
          :checked="checked"
          @change="onChange"
        />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        加载状态
      </div>
      <van-cell-group>
        <van-switch-cell
          loading
          title="标题"
          :checked="checked"
          @change="onChange"
        />
      </van-cell-group>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">Event</div>
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
      title: "",
      checked: true,
      table_api: apiData.api,
      table_event: apiData.event,
      table_class: apiData.class
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onChange(e) {
      this.checked = e.mp.detail;
    }
  },

  onLoad(option) {
    if (option) {
      this.title = option.label;
    }
  }
};
</script>


<style lang="scss">
</style>
