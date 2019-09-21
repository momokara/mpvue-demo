<template>
  <div class="week-list fsp16">
    <div class="toggleRow" v-if="isShowCtrl">
      <div class="btn"
           @click="changeWeek(-1)">上个月</div>
      <div class="btn fr"
           @click="changeWeek(1)">下个月</div>
    </div>
    <div class='header-weekday'>
      <div class="day-box ta-c"
           v-for="(item, index) in weekday"
           :key="index"> {{item}}</div>
    </div>

    <div class='date-box'>
      <block v-for="(item, index) in weekDate"
             :key="index">
        <div class='day-box ta-c'
             :class="[{'before':item.isToday<0},{'today':item.isToday===0},{'after':item.isToday>0}]">
          {{item.dateNum}}
        </div>

      </block>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      todaytimestamp: Date.parse(this.getDay().dayDate)
    }
  },
  props: {
    week: {
      type: Number,
      default: 0
    },
    weekday: {
      type: Array,
      default: ['日', '一', '二', '三', '四', '五', '六']
    },
    isShowCtrl: {
      type: Boolean
    }
  },
  computed: {
    weekDate () {
      let _this = this
      let _weekDate = this.getWeekDay(this.week)
      _weekDate = _weekDate.map(e => {
        e.dateNum = e.date.getDate()
        e.isToday = e.timestamp - _this.todaytimestamp
        return e
      })
      return _weekDate
    }
  },
  methods: {
    // 切换星期
    changeWeek: function (index) {
      this.week = this.week + index
      this.$emit('changeWeek', this.week)
    },
    /**
     * 获取日期
     * @parmas {Date} day 需要处理的天
     */
    getDay (day) {
      let _today = day || new Date()
      _today = {
        year: _today.getFullYear(),
        month: _today.getMonth(),
        date: _today.getDate(),
        day: _today.getDay()
      }
      _today.dayDate = new Date(_today.year, _today.month, _today.date)
      return _today
    },
    /**
     * 获取星期的日期数组,默认是当前星期
     * @parmas {Number} n 相对当前日期的n周偏移 n=0 时为当前周
     */
    getWeekDay (n) {
      let _this = this
      let _today = _this.getDay()
      let _arrWeek = []
      let _nextSat = new Date(
        _today.year,
        _today.month,
        _today.date + (6 - _today.day + 7 * n)
      )
      for (let index = 6; index >= 0; index--) {
        let _day = _this.getDay(_nextSat)
        let _before = new Date(_day.year, _day.month, _day.date - index)
        _arrWeek.push({ date: _before, timestamp: Date.parse(_before) })
      }
      return _arrWeek
    }
  }
}
</script>

<style lang="scss">
@mixin Row($height) {
  display: inline-block;
  width: 14.285%;
  height: $height;
  line-height: $height;
}
.toggleRow {
  .btn{
    display: inline-block;
  }
}
.header-weekday {
  .day-box {
    @include Row(25px);
  }
}
.date-box {
  .day-box {
    @include Row(25px);
    position: relative;
    vertical-align: middle;
  }
}
.before {
  color: #ddd;
}
.today {
  color: greenyellow;
}
.after {
  color: #333;
}
</style>
