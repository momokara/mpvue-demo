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
import { formatTime, golink } from "@/utils/tools";
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
    golink
  },

  onShow() {
    const logs = wx.getStorageSync("logs") || [];
    console.table(logs);
    // 处理日期
    this.logs = logs.map(log => {
      log.time = formatTime(new Date(log.time));
      return log;
    });
    pagelogs();
  },
  onHide() {
    pagelogs(true);
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
