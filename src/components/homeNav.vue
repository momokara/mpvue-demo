
<template>
  <!-- 首页的导航 -->
  <div>
    <div
      class="notice-box"
      v-if="config.isShowNotice"
    >
      <noticeSwipers
        :swiperList="noticeData"
        icon-url="https://cdn.huibaoming.com/haivit/public/image/20181105181545_89/公告.png"
      ></noticeSwipers>
    </div>
    <div class="nav-box">
      <div
        v-for="item in data"
        :key="item"
        class="nav-cell fs12 ta-c"
        :style="'width:'+100/config.rowsize+'%'"
      >
        <van-tabbar-item @click="golink(item.url)">
          <div slot="icon">
            <img
              class="nav-icon"
              :src="item.imgUrl"
            >
          </div>
          {{item.name}}
        </van-tabbar-item>
      </div>

    </div>
  </div>

</template>

<script>
import noticeSwipers from "@/components/noticeSwipers";
import { golink } from "@/utils/tools";
export default {
  props: {
    config: {
      type: Object,
      default: {
        rowsize: 4,
        isShowNotice: false
      }
    },
    data: {
      type: Array
    },
    noticeData: {
      type: Array
    }
  },
  components: {
    noticeSwipers
  },
  methods: {
    golink
  }
};
</script>

<style lang="scss">
.notice-box {
  height: 35px;
  line-height: 25px;
  border-bottom: 1px solid #f2f2f2;
  box-sizing: border-box;
  padding: 5px;
}
.nav-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .nav-cell {
    margin: 15rpx 0;
  }
  .nav-icon {
    width: 60px;
    height: 60px;
  }
}
</style>
