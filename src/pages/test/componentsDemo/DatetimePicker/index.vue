<template>
  <div class="container">
    <div class="title ">
      DatetimePicker 时间选择
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-datetime-picker
        type="datetime"
        :loading="loading"
        :value="currentDate1"
        :min-date=" minDate "
        @change="onChange"
      />
    </div>
    
  </div>
</template>
<script>
import card from "@/components/card";
export default {
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(2018, 0, 1).getTime(),
      maxDate: new Date(2019, 10, 1).getTime(),
      currentDate1: new Date(2018, 2, 1).getTime(),
      currentDate2: null,
      currentDate3: new Date(2018, 0, 1),
      currentDate4: "12:00",
      loading: false
    };
  },
  // 使用的 vue 组件
  components: {
    card
  },
  // 页面中的方法
  methods: {
    onChange(e) {
      console.log(e);
    }
  },

  created() {
    console.log("demopage-created", this.msg);
  }
};
</script>


<style lang="scss">
</style>
