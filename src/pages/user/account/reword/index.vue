<template>
  <div class="container">
    <userAccountCard :userData="userData"
                     :accountInfo="accountInfo">
      <div class="btn-box">
        <button @click="useAccount">useAccount</button>
      </div>
    </userAccountCard>
    <div class="his-list">
      <userAccountHis :data="hisDate"
                      :date="showData"
                      @prev="prevMonth"
                      @next="nextMonth"></userAccountHis>

    </div>
  </div>
</template>
<script>
import basicInfo from '@/store/basicInfo.js'
import { getAccountNum } from '@/api/api.account.js'
import userAccountCard from '@/components/userCenter/userAccountCard'
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
      titleDate: new Date(),
      hisDate: [],
      reqType: ['', 'Reward', 'Balance', 'Points'],
      num: ''
    }
  },
  computed: {
    showData: function () {
      return formatTime(this.titleDate, 'YYYY年MM月')
    },
    userData: () => {
      let _data = {
        nickName: basicInfo.state.userInfo.nickName,
        avatarUrl: basicInfo.state.userInfo.avatarUrl
      }
      return _data
    },
    accountInfo: function () {
      let _data = {
        type: this.pageconfig.typeid,
        num: this.num
      }
      return _data
    }
  },
  // 使用的 vue 组件
  components: {
    userAccountCard,
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
    useAccount: function (e) {
      console.log('useAccount')
    },
    getPageData: function () {
      let _this = this
      console.log(_this)
      this.pageconfig.year = this.titleDate.getFullYear()
      this.pageconfig.month = this.titleDate.getMonth()
      wx.showToast({
        title: '加载中....',
        icon: 'loading'
      })

      getAccountNum(this.pageconfig).then(res => {
        console.log('getAccountNum', res)
        this.hisDate = res.hisData
        this.num = res.num
        wx.hideToast()
      })
    }
  },

  onLoad (options) {
    if (options.type) {
      this.pageconfig.typeid = options.type.replace(/\s+/g, '')
      this.pageconfig.type = this.reqType[this.pageconfig.typeid]
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
  onReachBottom () {},
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
}
</style>
