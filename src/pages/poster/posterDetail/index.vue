<template>
  <div class="home-container">
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
      <posterList :data="data.array"></posterList>
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
import { getPosterList } from "@/api/api.poster";
import posterList from "@/components/poster/posterList";
// 页面记录
import { pagelogs } from "@/utils/logs";

export default {
  data() {
    return {
      pageconfig: {
        id: "",
        keyword: "",
        page: 1,
        size: 10
      },
      data: {
        array: []
      },
      // 是否终止
      isend: false
    };
  },

  components: { posterList },

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
     * 获取页面信息
     * @param {Boolean} isReset 是否重新请求
     */
    getPageData(isReset) {
      let _this = this;
      if (isReset) {
        _this.pageconfig.page = 1;
        _this.data.array = [];
        _this.isend = false;
      }
      if (!_this.isend) {
        // let reqtype = _this.pageconfig.keyword ? 1 : 0;
        getPosterList(_this.pageconfig).then(res => {
          console.log("getPosterList res", res);
          if (res.array) {
            _this.data.array = _this.data.array.concat(...res.array);
            _this.pageconfig.page++;
            if (_this.data.array.length >= res.total) {
              _this.isend = true;
            }
          }
        });
      }
    }
  },
  onLoad(options) {
    console.log(options);
    this.pageconfig.id = options.id;
    this.pageconfig.keyword = options.keyword;
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
  },
  // 页面上拉触底事件的处理函数
  onReachBottom() {
    this.getPageData();
  }
};
</script>

<style lang="scss">
@mixin main-box {
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
.main-list-box {
  @include main-box;
  padding: 15px;
  .poster-list .link .image-box {
    height: 210px;
  }
}
.more{
  margin-bottom: 50px;
}
</style>
