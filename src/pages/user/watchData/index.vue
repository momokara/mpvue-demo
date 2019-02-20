<template>
  <div class="container demo">
    <div class="title">basicInfo_store 的内容:</div>
    <div class="fsp12 databox">
      <div
        v-for="(item, index) in storeData"
        :key="index"
      >
        <div class="fsp14">{{item.key}}:</div>
        <div class="fsp12">{{item.data}}</div>
      </div>
    </div>
    <div class="title">storageData 概况:</div>
    <div class="fsp12 databox">{{storageData}}</div>
    <div class="title">storage 详情:</div>
    <div class="fsp12 databox">
      <div
        v-for="(item, index) in storageDataDetail"
        :key="index"
      >
        <div class="fsp14">{{item.key}}:</div>
        <div class="fsp12">{{item.data}}</div>
      </div>

    </div>
  </div>
</template>
<script>
import basicInfo from "../../../store/basicInfo.js";

// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {
      storageData: "",
      storageDataDetail: ""
    };
  },
  // 使用的 vue 组件
  components: {},

  computed: {
    storeData: function() {
      let showdata = [];
      for (const key in basicInfo.state) {
        if (key) {
          let saveData = basicInfo.state[key];
          saveData = JSON.stringify(saveData);
          let rowdata = {
            key,
            data: saveData
          };
          showdata.push(rowdata);
        }
      }
      return showdata;
    }
  },
  // 页面中的方法
  methods: {
    // 获取信息
    getstorageData: function() {
      let showdata = wx.getStorageInfoSync("openid");
      showdata = JSON.stringify(showdata);
      return showdata;
    },
    // 遍历storage
    getstorageDataDetail: function() {
      let showdatakey = wx.getStorageInfoSync("openid");
      let showdata = [];
      showdatakey.keys.forEach(key => {
        let saveData = wx.getStorageSync(key);
        saveData = JSON.stringify(saveData);
        let rowdata = {
          key: key,
          data: saveData
        };
        showdata.push(rowdata);
      });

      return showdata;
    }
  },

  // 监听页面显示
  onShow() {
    this.storageData = this.getstorageData();
    this.storageDataDetail = this.getstorageDataDetail();
    pagelogs();
  }
};
</script>


<style lang="scss">
.databox {
  width: 350px;
  white-space: normal;
  overflow: scroll;
}
</style>
