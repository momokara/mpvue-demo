<template>
  <div class="container">
    <div class="title ">
      Area 省市区选择
    </div>
    <div class="demo">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-area :loading="loading" :area-list="areaList" />

      <div class="fsp16 fc-grey ">
        选中省市县
      </div>
      <van-area :value="value" :loading="loading" :area-list="areaList" />

      <div class="fsp16 fc-grey ">
        配置显示列
      </div>
      <van-area title="标题" :columns-num="2" :loading="loading" :area-list="areaList" @change="onChange" @confirm="onChange" />
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_custom_class"></apiTable>

      <div class="fsp14 fc-grey">Cell Event</div>
      <apiTable :tabledata="table_event"></apiTable>

      <div class="fsp14 fc-grey">方法</div>
      <div class="fs12 fc-grey">
        通过 ref 可以获取到 area 实例并调用实例方法
      </div>
      <apiTable :tabledata="table_func"></apiTable>

      <div class="fsp14 fc-grey">点击完成时返回的数据格式</div>
      <div class="fs12 fc-grey">
        返回的数据整体为一个 Object，包含 values, indexs 两个 key
      </div>
      <div class="fs12 fc-grey">
        values 整体为一个数组，数组内包含 columnsNum 个数据， 每个数据对应一列选项中被选中的数据。
      </div>
      <div class="fs12 fc-grey">
        code 代表被选中的地区编码， name 代表被选中的地区名称
      </div>
      <div class="fs12 fc-grey">
        indexs 为一个数组，数组内包含 columnsNum 个数据， 每个数据对应一列选项中被选中项的序号。
      </div>

    </div>
  </div>
</template>
<script>
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";
import WxPromis from "@/utils/Wxrequest";

export default {
  data() {
    return {
      areaList: {},
      loading: true,
      value: 330302,
      table_api: apiData.api,
      table_custom_class: apiData.custom_class,
      table_event: apiData.event,
      table_func: apiData.func
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onChange(event) {
      console.log(event);
    }
  },
  // VUE 钩子 常用

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {
    WxPromis.ajax(
      "https://momokarapage.oss-cn-shenzhen.aliyuncs.com/static/getAllRegion.json"
    ).then(res => {
      this.areaList = res.data;
      this.loading = false;
    });
  }
};
</script>


<style lang="scss">
</style>
