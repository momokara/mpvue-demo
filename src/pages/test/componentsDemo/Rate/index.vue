<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-rate
        custom-class="van-rate"
        data-key="value1"
        :value="value1"
      />

      <div class="fsp16 fc-grey ">
        自定义图标
      </div>
      <van-rate
        custom-class="van-rate"
        icon="like"
        void-icon="like-o"
        data-key="value2"
        :value="value2"
      />

      <div class="fsp16 fc-grey ">
        自定义样式
      </div>
      <van-rate
        custom-class="van-rate"
        data-key="value3"
        :value="value3"
        :size="25"
        :count="6"
        :color="'#2ba'"
        void-color="#ceefe8"
        @change="onChange"
      />

      <div class="fsp16 fc-grey ">
        禁用状态
      </div>
      <van-rate
        custom-class="van-rate"
        data-key="value4"
        :value="value4"
        disabled
      />
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">Rate API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">Rate Event</div>
      <apiTable :tabledata="table_event"></apiTable>

      <div class="fsp14 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_class"></apiTable>

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
      value1: 3,
      value2: 3,
      value3: 4,
      value4: 2,
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
    onChange(event) {
      const { key } = event.currentTarget.dataset;
      this[key] = event.detail;
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
