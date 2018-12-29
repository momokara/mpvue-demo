<template>
  <div class="home-container">
    <div class="header-swiper-box">
      <headerSwiper
        :swiperList="swiperList"
        :config="swiperConfig"
        @change="swiperChange"
        @animationfinish="swiperChange"
      >
      </headerSwiper>
    </div>
    <div class="header-nav-box">
      <div class="notice-box">
        <noticeSwiper
          :swiperList="noticeList"
          icon-url="https://cdn.huibaoming.com/haivit/public/image/20181105181545_89/公告.png"
        ></noticeSwiper>
      </div>
      <div class="nav-box">
        <div
          v-for="item in navList"
          :key="item"
          class="nav-cell fs12 ta-c"
        >
          <van-tabbar-item>
            <div slot="icon">
              <img
                class="nav-icon"
                :src="item.pic_path"
              >
            </div>
            {{item.description}}
          </van-tabbar-item>
        </div>

      </div>
    </div>

    <div class="main-ad-box">
      <adTitle title="学车班别"></adTitle>
      <scroll-view
        class="scroll-x border-bottom"
        scroll-x="true"
      >
        <adCard
          v-for="item in deal_list"
          :key="item"
          :image_url="item.index_img"
          width="300rpx"
          imgHeight="170rpx"
          :title="item.name"
          :price="'￥'+item.price"
        >
        </adCard>
      </scroll-view>
      <adTitle
        title="粤安特色"
        url="/content/content/article/articleList/articleList"
      ></adTitle>
      <scroll-view
        class="scroll-x border-bottom"
        scroll-x="true"
      >
        <adCard
          v-for="item in article"
          :key="item"
          :image_url="item.icon"
          width="300rpx"
          imgHeight="170rpx"
          :title="item.name"
        >
        </adCard>
      </scroll-view>

      <adTitle
        title="场地导航"
        url="/store/store/storeList/storeList"
      ></adTitle>
      <scroll-view
        class="scroll-x"
        scroll-x="true"
      >
        <adCard
          v-for="item in storeList"
          :key="item"
          :image_url="item.index_img"
          width="300rpx"
          imgHeight="170rpx"
          :title="item.name"
        >
        </adCard>
      </scroll-view>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import headerSwiper from "@/components/header-swipers";
import noticeSwiper from "@/components/notice-swipers";
import adTitle from "@/components/home-main-title";
import adCard from "@/components/img-ad-card";
import Api from "@/api/api";

export default {
  data() {
    return {
      swiperList: [],
      noticeList: [],
      navList: [],
      deal_list: [],
      article: [],
      storeList: [],
      pagedata: {},
      currentItemId: "",
      swiperConfig: {
        autoplay: false
      }
    };
  },

  components: {
    headerSwiper,
    noticeSwiper,
    adCard,
    adTitle
  },

  methods: {
    getHomeInfo() {
      return Api.gethomeInfo().then(res => {
        return res;
      });
    },
    swiperChange(e) {
      console.log("swiperChange:", e.mp.detail);
    },
    getDetail_11000: function(event) {
      wx.navigateTo({
        url:
          app.m_config.json.domain_url +
          "/11000/11000/haivitDeal/getDealDetail/getDealDetail?deal_id=" +
          event.currentTarget.dataset.flag
      });
    },
    getDetail_article: function(event) {
      wx.navigateTo({
        url:
          app.m_config.json.domain_url +
          "/content/content/article/articleDetail/articleDetail?id=" +
          event.currentTarget.dataset.flag
      });
    },
    getDetail_store: function(event) {
      wx.navigateTo({
        url:
          app.m_config.json.domain_url +
          "/store/store/getStoreDetail/getStoreDetail?id=" +
          event.currentTarget.dataset.flag
      });
    }
  },

  created() {
    this.getHomeInfo().then(res => {
      this.swiperList = res.swiper;
      this.noticeList = res.notice;
      this.navList = res.nav;
      this.deal_list = res.deal_list;
      this.article = res.article;
      this.storeList = res.storeList;
    });
  }
};
</script>

<style lang="scss">
page {
  background-color: #f2f7fb;
}
@mixin main-box {
  width: 640rpx;
  margin: 40rpx auto;
  border-radius: 16px;
  padding: 20rpx 30rpx;
  background-color: #fff;
}
.header-swiper-box {
  height: 403.35rpx;
  margin: 25rpx 0;
  .swiper {
    width: 750rpx;
    a {
      width: 700rpx;
      margin: 0 25rpx;
      border-radius: 8px;
      overflow: hidden;
    }
  }
}
.header-nav-box {
  @include main-box;
  .notice-box {
    height: 40rpx;
    line-height: 40rpx;
    padding-bottom: 20rpx;
    border-bottom: 1px solid #f2f2f2;
  }
  .nav-box {
    display: flex;
    flex-wrap: wrap;
    .nav-cell {
      width: 25%;
      margin: 15rpx auto;
    }
    .nav-icon {
      width: 128rpx;
      height: 128rpx;
    }
  }
}
.main-ad-box {
  @include main-box;

  .ad-card {
    padding-right: 40rpx;
    .ad_img {
      border-radius: 8px;
    }
  }
  .ad-card:last-child {
    padding-right: 0;
  }
  .price {
    color: #cf5463;
  }
  .border-bottom {
    padding-bottom: 30rpx;
    border-bottom: 1px solid #6bb72d;
  }
}
</style>
