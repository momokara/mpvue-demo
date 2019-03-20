
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
        :style="lineColumn"
      >
        <van-tabbar-item @click="callgolink(item)" :info="item.msgNum">
          <div slot="icon">
            <img
              class="nav-icon"
              :src="item.imgUrl"
            >
          </div>
          <span class="icon_name line-clamp_1">{{item.name}}</span>
          <span
            v-if="item.tag"
            class="icon_name line-clamp_1"
          >{{item.tag}}</span>
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
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  components: {
    noticeSwipers
  },
  computed: {
    lineColumn: function() {
      let _lineColumn = `width:25%`;
      if (this.config.rowsize) {
        _lineColumn = `width:${100 / this.config.rowsize}%`;
      } else if (this.config.displayMultipleItems) {
        _lineColumn = `width:${100 / this.config.displayMultipleItems}%`;
      }
      return _lineColumn;
    }
  },
  methods: {
    golink,
    callgolink: function(item) {
      let _this = this;
      if (_this.isLink) {
        golink(item.url)
          .then(res => {
            console.log("success", res);
          })
          .catch(err => {
            console.log("fail", err);
          });
      } else {
        _this.$emit("golink", item);
      }
    }
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
  .icon_name {
    width: 100%;
    overflow: hidden;
  }
}
</style>
