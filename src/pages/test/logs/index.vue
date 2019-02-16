<template>
  <div>
    <van-cell-group>
      <van-cell
        v-for="(log, index) in logs"
        :key="index"
        is-link
        :title="index+1+'.'+log.url"
        :label="log.time"
        @click="golink(log.url)"
      />
    </van-cell-group>
  </div>
</template>

<script>
import { formatTime } from "@/utils/index";
// 页面记录
import { pagelogs } from "@/utils/logs";

export default {
  components: {},

  data() {
    return {
      logs: []
    };
  },
  
  methods: {
    golink: function(url) {
      url = `/${url}`;
      wx.navigateTo({
        url: url,
        fail: function() {
          wx.switchTab({
            url: url,
            fail: function() {
              wx.showToast({
                title: "打开失败",
                icon: "none"
              });
            }
          });
        }
      });
    }
  },

  created() {
    const logs = wx.getStorageSync("logs") || [];
    console.log(logs);
    this.logs = logs.map(log => {
      log.time = formatTime(new Date(log.time));
      return log;
    });
  },
  onShow() {
    pagelogs();
  }
};
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
