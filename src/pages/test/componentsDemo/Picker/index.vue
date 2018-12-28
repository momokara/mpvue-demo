<template>
  <div class="container">
    <div class="title ">
      Picker 选择器
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-picker
        :columns="column1"
        @change="onChange1"
        class="basic-picker"
      />
      <div class="fsp16 fc-grey ">
        禁用选项
      </div>
      <van-picker :columns="column2" />

      <div class="fsp16 fc-grey ">
        展示顶部栏
      </div>
      <van-picker
        show-toolbar
        title="标题"
        :columns="column1"
        @change="onChange1"
        @confirm="onConfirm"
        @cancel="onCancel"
      />

      <div class="fsp16 fc-grey ">
        多列联动
      </div>
      <van-picker
        :columns="column4"
        @change="onChange2"
      />

      <div class="fsp16 fc-grey ">
        加载状态
      </div>
      <van-picker
        loading
        :columns="column4"
      />
    </div>

    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">Picker API</div>
      <apiTable :tabledata="table_api_Picker"></apiTable>

      <div class="fsp14 fc-grey">Picker Event</div>
      <apiTable :tabledata="table_event_Picker"></apiTable>

      <div class="fsp14 fc-grey">Columns 数据结构</div>
      <apiTable :tabledata="table_columns_Picker"></apiTable>

      <div class="fsp14 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_class_Picker"></apiTable>

      <div class="fsp14 fc-grey">方法</div>
      <div class="fs12 fc-grey">通过 selectComponent 可以获取到 picker 实例并调用实例方法</div>
      <apiTable :tabledata="table_func_Picker"></apiTable>

    </div>

    <van-toast id="van-toast" />
  </div>
</template>
<script>
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";
import Toast from "@/../static/components/toast/toast";

export default {
  data() {
    return {
      column1: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      column2: [
        { text: "杭州", disabled: true },
        { text: "宁波" },
        { text: "温州" }
      ],
      column3: {
        浙江: [
          "杭州",
          { text: "宁波" },
          { text: "温州", disabled: true },
          "嘉兴",
          "湖州"
        ],
        福建: ["福州", "厦门", "莆田", "三明", "泉州"]
      },
      column4: [
        {
          values: ["浙江", "福建"],
          className: "column1"
        },
        {
          values: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
          className: "column2",
          defaultIndex: 2
        }
      ],
      table_api_Picker: apiData.api,
      table_event_Picker: apiData.event,
      table_columns_Picker: apiData.columns,
      table_class_Picker: apiData.class,
      table_func_Picker: apiData.func
    };
  },
  methods: {
    onChange1(event) {
      console.log(event);
      const { value, index } = event.mp.detail;
      Toast(`Value: ${value}, Index：${index}`);
    },

    onConfirm(event) {
      const { value, index } = event.mp.detail;
      Toast(`Value: ${value}, Index：${index}`);
    },

    onCancel() {
      Toast("取消");
    },

    onChange2(event) {
      const { picker, value } = event.mp.detail;
      picker.setColumnValues(1, this.column3[value[0]]);
    },
    // 设置picker方法
    setPicker() {
      let basicpaicker = this.$mp.page.selectComponent(".basic-picker");
      basicpaicker.setValues(["温州"]);
    }
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {
    console.log("demopage-created", this.msg);
  },
  mounted() {
    this.setPicker();
  }
};
</script>


<style lang="scss">
</style>
