<template>
  <div class="container">
    <div id="search_bar">
      <van-search
        :value="pageconfig.keyword"
        placeholder="请输入搜索关键词"
        use-action-slot
        @change="onChange"
        @search="onSearch"
      >
        <view
          slot="action"
          @tap="onSearch"
        >搜索</view>
        <!-- <view slot="left-action">左边</view> -->
      </van-search>
    </div>
    <div class="main-list-box">
      <infocardList
        :dataList="data"
        :config="config"
      ></infocardList>
    </div>
    <div
      class="ta-c fsp12 fc-grey more"
      v-if="isend"
    >
      ———— 没有更多了 ————
    </div>
    <div
      class="ta-c fsp12 fc-grey more"
      v-else
      @click="getpagedata"
    >
      ———— 加载更多 ————
    </div>
  </div>
</template>
<script>
import { getArticleList } from "@/api/api.article";
import infocardList from "@/components/homeAd/infoCardList";
// 页面记录
import { pagelogs } from "@/utils/logs";
import { error } from "util";
export default {
  data() {
    return {
      pageconfig: {
        id: "",
        keyword: "",
        page: 1,
        size: 10
      },
      data: [],
      // 是否终止
      isend: false
    };
  },

  components: {
    infocardList
  },
  watch: {},
  computed: {},

  methods: {
    // 搜索框改变事件
    onChange(e) {
      this.pageconfig.keyword = e.mp.detail;
    },
    // 搜索方法
    onSearch(event) {
      let _this = this;
      if (this.pageconfig.keyword) {
        wx.showToast({
          title: "搜索：" + this.pageconfig.keyword,
          icon: "none"
        });
      }
      _this.getPageData(true);
    },
    /**
     *
     * @param {Boolean} isReset 是否重新请求
     */
    getPageData(isReset) {
      let _this = this;
      if (isReset) {
        _this.pageconfig.page = 1;
        _this.data = [];
        _this.isend = false;
      }
      if (!_this.isend) {
        // let reqtype = _this.pageconfig.keyword ? 1 : 0;
        let reqtype = 1;
        getArticleList(_this.pageconfig, reqtype).then(res => {
          console.log("getArticleList res", res);
          if (res) {
            _this.data = _this.data.concat(...res.data);
            _this.pageconfig.page++;
            if (_this.data.length >= res.total) {
              _this.isend = true;
            }
          }
        });
      }
    }
  },

  // 原生钩子
  // 监听页面加载
  onLoad(options) {
    console.log(options);
    this.pageconfig.id = options.id;
    this.pageconfig.keyword = options.keyword;
  },
  // 监听页面显示
  onShow() {
    pagelogs();
    this.getPageData(true);
  },
  onHide() {
    pagelogs(true);
  },
  // 监听用户下拉动作
  onPullDownRefresh() {
    this.getPageData(true);
  },
  // 页面上拉触底事件的处理函数
  onReachBottom() {
    this.getPageData();
  }
};
</script>


<style lang="scss">
.main-list-box {
  width: 700rpx;
  margin: 0 auto;
  .ad-card-cell {
    margin-bottom: 10px;
    box-shadow: 0 0 3px #ddd;
    border-radius: 5px;
    overflow: hidden;
  }
}
.more {
  margin: 10px auto 30px auto;
}
</style>
