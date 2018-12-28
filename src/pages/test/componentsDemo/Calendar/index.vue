<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-calendar></van-calendar>

      <div class="fsp16 fc-grey ">
        高级用法
      </div>
      <van-calendar
        custom-class="date_box"
        :year="demodata.year"
        :mark-day="demodata.markDay"
        :month="demodata.month"
        :weekday="demodata.weekday"
        :monthname="demodata.monthname"
        @lastMonth="tapCalendar"
        @nextMonth="tapCalendar"
        @tapDay="tapCalendar"
      >
        <div>标题</div>
      </van-calendar>
    </div>

    <div class="control-box">
      <van-cell-group>
        <van-field
          :value="demodata.year"
          :label="'year'"
          :placeholder="'{Number}默认显示年份'"
          :border="true"
          data-name="year"
          @change="changeInput($event)"
        />
        <van-field
          :value="demodata.month"
          :label="'month'"
          :placeholder="'{Number}默认显示月份'"
          :border="true"
          data-name="month"
          @change="changeInput($event)"
        />
        <van-field
          :value="demodata.markDay"
          :label="'mark-day'"
          :placeholder="'{Number}标记到日期'"
          :border="true"
          data-name="markDay"
          @change="changeInputArray($event)"
        />
      </van-cell-group>
    </div>

    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_custom_class"></apiTable>

      <div class="fsp14 fc-grey">Cell Event</div>
      <apiTable :tabledata="table_event"></apiTable>

      <div class="fsp14 fc-grey">Slot</div>
      <apiTable :tabledata="table_slot"></apiTable>

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
      demodata: {
        year: "2017",
        month: "23",
        markDay: [20181009, 20181015],
        weekday: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"],
        monthname: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      },
      table_api: apiData.api,
      table_custom_class: apiData.custom_class,
      table_event: apiData.event,
      table_slot: apiData.slot
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    tapCalendar(event) {
      console.log(event);
    },
    // 输入信息
    changeInput: function(event) {
      this.demodata[event.currentTarget.dataset.name] = event.mp.detail;
    },
    changeInputArray: function(event) {
      this.demodata[event.currentTarget.dataset.name] = event.mp.detail.split(
        ","
      );
    }
  },
  onLoad(option) {
    if (option) {
      this.title = option.label;
    }
  }
};
</script>


<style>
.date_box {
  color: red !important;
}
.date_box .between {
  background-color: #ddd;
}
</style>
