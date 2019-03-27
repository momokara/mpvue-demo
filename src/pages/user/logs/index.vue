<template>
  <div class="log-list">
    <van-tabs animated>
      <van-tab :title="'log('+logs.length+')'">
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
      </van-tab>
      <van-tab :title="'errlogs('+errlogs.length+')'">
        <van-collapse
          :value="errActice"
          @change="onChange"
          data-key="errActice"
        >
          <van-collapse-item
            v-for="(erritem, errindex) in errlogs"
            :key="errindex"
            :title="erritem.time"
            :name="errindex"
          >
            <div class="databox">
              <jsonTable :data="erritem.data"></jsonTable>
            </div>
          </van-collapse-item>
        </van-collapse>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import jsonTable from '@/components/userCenter/jsonTable'
import { formatTime, golink } from '@/utils/tools'
// 页面记录
import { pagelogs } from '@/utils/logs'

export default {
  components: { jsonTable },
  data () {
    return {
      logs: [],
      errlogs: [],
      errActice: []
    }
  },

  methods: {
    golink,
    /**
     * 读取本地数据
     * @param keyName {String} 需要读取数据的名称
     * @return {Array} 返回结果
     */
    getStorageItem: function (keyName) {
      const arr = wx.getStorageSync(keyName) || []
      return arr.map(e => {
        e.time = formatTime(new Date(e.time))
        return e
      })
    },
    onChange (e) {
      const { key } = e.mp.currentTarget.dataset
      this[key] = e.mp.detail
    },

    getStorageData: function () {
      this.logs = this.getStorageItem('logs')

      this.errlogs = this.getStorageItem('errlogs')

      // 格式化错误数据
      this.errlogs.map(e => {
        e.data = JSON.stringify(e)
        return e
      })
    }
  },

  onShow () {
    this.getStorageData()
    pagelogs()
  },
  onHide () {
    pagelogs(true)
  }
}
</script>

<style lang="scss">
.log-list {
  .van-cell__title,
  .van-col {
    overflow: scroll;
  }
}
</style>
