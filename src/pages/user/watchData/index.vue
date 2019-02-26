<template>
  <div class="container demo">

    <div class="title">basicInfo_store 的内容:</div>
    <div class="fsp12 databox">
      <van-collapse
        :value="storeTag"
        @change="onChange"
        data-key="storeTag"
      >
        <block
          v-for="(item, index) in storeData"
          :key="index"
        >
          <van-collapse-item
            :title="item.key"
            :name="index"
          >
            <div class="databox">
              <jsonTable :data="item.data"></jsonTable>
            </div>

          </van-collapse-item>

        </block>

      </van-collapse>
    </div>
    <div class="title">storageData 概况:</div>
    <div class="fsp12 databox">
      <van-collapse
        :value="storageDataTag"
        @change="onChange"
        data-key="storageDataTag"
      >
        <block
          v-for="(item, index) in storageData"
          :key="index"
        >
          <van-collapse-item
            :title="item.key"
            :name="index"
          >
            <div class="databox">
              <jsonTable :data="item.data"></jsonTable>
              <!-- {{item.data}} -->
            </div>
          </van-collapse-item>
        </block>

      </van-collapse>
    </div>
    <div class="title">storage 详情:</div>
    <div class="fsp12 databox">
      <van-collapse
        :value="storageDataDTag"
        @change="onChange"
        data-key="storageDataDTag"
      >
        <block
          v-for="(item, index) in storageDataDetail"
          :key="index"
        >
          <van-collapse-item
            :title="item.key"
            :name="index"
          >
            <div class="databox">
              <jsonTable :data="item.data"></jsonTable>
            </div>
          </van-collapse-item>
        </block>

      </van-collapse>
    </div>
  </div>
</template>
<script>
import basicInfo from "../../../store/basicInfo.js";
import jsonTable from "@/components/jsonTable";

// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {
      storageData: [],
      storeTag: [],
      storageData: [],
      storageDataTag: [],
      storageDataDetail: [],
      storageDataDTag: []
    };
  },
  // 使用的 vue 组件
  components: { jsonTable },

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
      let showdata = [];
      let socuredata = wx.getStorageInfoSync();
      for (const key in socuredata) {
        if (key) {
          let saveData = socuredata[key];
          saveData = JSON.stringify(saveData);
          let rowdata = {
            key,
            data: saveData
          };
          showdata.push(rowdata);
        }
      }
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
    },
    onChange(e) {
      const { key } = e.mp.currentTarget.dataset;
      this[key] = e.mp.detail;
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
  overflow: scroll;
}
</style>
