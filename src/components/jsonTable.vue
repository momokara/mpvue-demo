<template>
  <div class="custom-class demo-block ">

    <block v-if="isJson">
      <van-row
        v-for="(item, index) in tableData"
        :key="index"
      >
        <van-col span="8">
          {{item.key}}:
        </van-col>
        <van-col span="16">
          {{item.data}}
        </van-col>
      </van-row>
    </block>
    <block v-else>
      {{tableData}}
    </block>
  </div>
</template>

<script>
import { isJsonString } from "@/utils/tools";

export default {
  data() {
    return {
      isJson: false
    };
  },
  props: {
    data: {
      type: String
    }
  },
  components: {},
  computed: {
    tableData: function() {
      let _this = this;
      let showdata = [];
      if (isJsonString(_this.data)) {
        _this.isJson = true;
        let jsondata = JSON.parse(_this.data);
        for (const key in jsondata) {
          if (jsondata.hasOwnProperty(key)) {
            const element = jsondata[key];
            let rowdata = {
              key,
              data: JSON.stringify(element)
            };
            showdata.push(rowdata);
          }
        }
      } else {
        showdata = _this.data;
      }
      return showdata;
    }
  }
};
</script>

<style>

</style>
