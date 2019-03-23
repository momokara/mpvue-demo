<template>
  <div class="home-container">
    海报详情
  </div>
</template>

<script>
import { getPosterDetail } from "@/api/api.poster";
// 页面记录
import { pagelogs } from "@/utils/logs";

export default {
  data() {
    return {
      pageconfig: {
        id: ""
      },
      data: {}
    };
  },

  components: {},

  methods: {
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
