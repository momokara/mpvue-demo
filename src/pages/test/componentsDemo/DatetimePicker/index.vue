<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        选择日期（年月日）
      </div>
      <van-datetime-picker
        type="datetime"
        :loading="loading"
        :value="currentDate1"
        @change="onChange"
      />

      <div class="fsp16 fc-grey ">
        选择日期（年月）
      </div>
      <van-datetime-picker
        type="year-month"
        :value="currentDate3"
        :min-date=" minDate "
        @change="onChange"
      />

      <div class="fsp16 fc-grey ">
        选择时间
      </div>
      <van-datetime-picker
        type="time"
        :value="currentDate4"
        :min-hour="minHour"
        :max-hour="maxHour"
        @change="onChange"
      />
    </div>

    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">DatetimePicker API</div>
      <apiTable :tabledata="table_api_DatetimePicker"></apiTable>

      <div class="fsp14 fc-grey">DatetimePicker Event</div>
      <apiTable :tabledata="table_event_DatetimePicker"></apiTable>

      <div class="fsp14 fc-grey">Change 事件</div>
      <apiTable :tabledata="table_func_DatetimePicker"></apiTable>

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
      minHour: 10,
      maxHour: 20,
      minDate: new Date(2018, 0, 1).getTime(),
      maxDate: new Date(2019, 10, 1).getTime(),
      currentDate1: new Date(2018, 2, 1).getTime(),
      currentDate2: null,
      currentDate3: new Date(2018, 0, 1),
      currentDate4: "12:00",
      loading: false,
      table_api_DatetimePicker: apiData.api_DatetimePicker,
      table_event_DatetimePicker: apiData.event_DatetimePicker,
      table_func_DatetimePicker: apiData.func_DatetimePicker
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onChange(e) {
      console.log(e);
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
