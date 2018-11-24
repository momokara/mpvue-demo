<template>
  <div class="container">
    <div class="title ">
      Calendar 日历
    </div>
    <div class="demo">
      <!-- <div class="fsp16 fc-grey ">
        基础用法
      </div> -->
      <!-- <van-calendar> </van-calendar> -->

      <div class="fsp16 fc-grey ">
        高级用法
      </div>
      <van-calendar custom-class="date_box" year="2019" month="10" :weekday="demodata.weekday" :monthname="demodata.monthname" @lastMonth="tapCalendar"  @nextMonth="tapCalendar"  @tapDay="tapCalendar">
        <div>标题</div>
      </van-calendar>
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
      demodata: {
        weekday: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"],
        monthname: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
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
    tapCalendar(event){
      console.log(event)
    }
  },
  // VUE 钩子 常用

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {}
};
</script>


<style>
.date_box{
  color: red !important;
}
</style>
