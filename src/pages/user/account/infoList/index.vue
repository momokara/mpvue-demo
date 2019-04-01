<template>
  <div class="container">
    <div class="his-list">
      <userAccountHis :data="data.array"
                      :date="showDate"
                      @prev="prevMonth"
                      @next="nextMonth"></userAccountHis>
      <div class="ta-c fsp12 fc-grey more"
           v-if="isend">
        ———— 没有更多了 ————
      </div>
      <div class="ta-c fsp12 fc-grey more"
           v-else
           @click="getpagedata">
        ———— 加载更多 ————
      </div>
    </div>
  </div>
</template>
<script>
import { getAccountInfo } from '@/api/api.account.js'
import userAccountHis from '@/components/userCenter/userAccountHis'
import { formatTime } from '@/utils/tools'
// 页面记录
import { pagelogs } from '@/utils/logs'
export default {
  data () {
    return {
      pageconfig: {
        typeid: 0,
        type: '',
        page: 1,
        size: 10
      },
      data: {
        num: '',
        array: []
      },
      isend: false,
      titleDate: new Date(),
      reqType: ['', 'Reward', 'Balance', 'Points'],
      titleName: {
        Reward: '奖金',
        Balance: '余额',
        Points: '积分'
      }
    }
  },
  computed: {
    showDate: function () {
      return formatTime(this.titleDate, 'YYYY年MM月')
    }
  },
  // 使用的 vue 组件
  components: {
    userAccountHis
  },

  // 页面中的方法
  methods: {
    prevMonth: function () {
      let prevMon = new Date(
        this.titleDate.getFullYear(),
        this.titleDate.getMonth() - 1
      )
      this.titleDate = prevMon
      this.getPageData()
    },
    nextMonth: function () {
      let nextMon = new Date(
        this.titleDate.getFullYear(),
        this.titleDate.getMonth() + 1
      )
      this.titleDate = nextMon
      this.getPageData()
    },
    /**
     * 获取页面信息
     * @param {Boolean} isReset 是否重新请求
     */
    getPageData: function (isReset) {
      let _this = this
      if (isReset) {
        _this.pageconfig.page = 1
        _this.hisData = []
        _this.isend = false
      }
      _this.pageconfig.year = _this.titleDate.getFullYear()
      _this.pageconfig.month = _this.titleDate.getMonth()

      if (!_this.isend) {
        wx.showToast({
          title: '加载中....',
          icon: 'loading'
        })
        getAccountInfo(_this.pageconfig).then(res => {
          console.log('getAccountInfo', res)
          if (res.array) {
            _this.data.array = _this.data.array.concat(...res.array)
            _this.pageconfig.page++
            if (_this.data.array.length >= res.total) {
              _this.isend = true
            }
          }
          wx.hideToast()
          wx.stopPullDownRefresh()
        })
      }
    }
  },

  onLoad (options) {
    if (options.type) {
      // 去除空格
      this.pageconfig.typeid = options.type.replace(/\s+/g, '')
      this.pageconfig.type = this.reqType[this.pageconfig.typeid]
      // 设置标题
      wx.setNavigationBarTitle({
        title: `${this.titleName[this.pageconfig.type]}详情`
      })
    }
  },
  // 监听页面显示
  onShow () {
    pagelogs()
    this.getPageData()
  },

  // 监听页面隐藏
  onHide () {
    pagelogs(true)
  },

  // 页面上拉触底事件的处理函数
  onReachBottom () {
    this.getPageData()
  },
  // 用户点击右上角分享
  onShareAppMessage () {}
}
</script>


<style lang="scss">
@mixin main-box {
  margin: 0 auto 5px auto;
  width: 340px;
}
.btn-box {
  width: 300px;
  margin: 0 auto;
}
.his-list {
  @include main-box;
  .more {
    margin: 10px auto 30px auto;
  }
}
</style>
