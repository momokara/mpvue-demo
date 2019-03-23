
<template>
  <!-- 选择科目 -->
  <div>

    <div class="nav-box">
      <div
        v-for="item in data"
        :key="item"
        class="nav-cell fs12 ta-c"
        :class="[item.name==actived?'actived':'']"
        :style="'width:'+100/config.rowsize+'%'"
      >
        <van-tabbar-item @click="callgolink(item)">
          <div slot="icon">
            <img
              class="nav-icon"
              :src="item.name==actived?item.imgUrl:item.bgimgUrl"
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
    actived: {
      type: String
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  components: {},
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
