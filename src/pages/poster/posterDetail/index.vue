<template>
  <div class="home-container">
    <div v-if="data.type==1">
      <customDetail
        :id="pageconfig.id"
        :adMsg="data.adMsg"
        :bgUrl="data.bgUrl"
        @downPoster="downLoadPoster"
      ></customDetail>

    </div>
    <div v-else>
      <traditionDetail
        :adMsg="data.adMsg"
        :bgUrl="data.bgUrl"
        @downPoster="downLoadPoster"
      >
      </traditionDetail>
    </div>
    <posterPopup
      :isShow="popupData.isShow"
      :imgUrl="popupData.imgUrl"
      @close="onclose"
    ></posterPopup>
  </div>
</template>

<script>
import traditionDetail from "@/components/poster/traditionDetail";
import customDetail from "@/components/poster/customDetail";

import posterPopup from "@/components/poster/posterPopup";

import { getPosterDetail, downLoadPoster } from "@/api/api.poster";
// 页面记录
import { pagelogs } from "@/utils/logs";

export default {
  data() {
    return {
      pageconfig: {
        id: ""
      },
      data: {
        adMsg: [],
        bgUrl: []
      },
      popupData: {
        isShow: false,
        imgUrl: ""
      }
    };
  },

  components: {
    traditionDetail,
    customDetail,
    posterPopup
  },

  methods: {
    // 下载海报
    downLoadPoster: function(e) {
      let _this = this;
      downLoadPoster(e).then(res => {
        console.log("downLoadPoster", res);
        if (res.imgUrl) {
          _this.popupData.isShow = true;
          _this.popupData.imgUrl = res.imgUrl;
        }
      });
    },
    onclose: function(e) {
      console.log(e);
      this.popupData.isShow = !e;
    },
    /**
     * 获取页面信息
     */
    getPageData() {
      let _this = this;
      if (!_this.isend) {
        // let reqtype = _this.pageconfig.keyword ? 1 : 0;
        getPosterDetail(_this.pageconfig).then(res => {
          console.log("getPosterDetail res", res);
          _this.data = res;
        });
      }
    }
  },
  onLoad(options) {
    this.pageconfig.id = options.id;
  },
  onShow() {
    pagelogs();
    this.getPageData();
  },
  onHide() {
    pagelogs(true);
  },

  onPullDownRefresh() {
    this.getPageData(true);
  }
};
</script>

<style lang="scss">
</style>
