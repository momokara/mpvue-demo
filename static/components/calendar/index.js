// index/calendar/index.js
import {
  VantComponent
} from '../common/component';

const defaultNow = new Date()
const defaultYear = defaultNow.getFullYear()
const defaultMonth = defaultNow.getMonth()
const defaultNowday = defaultNow.getDay()

VantComponent({
  props: {
    // 默认显示的年份
    year: {
      type: Number,
      value: defaultYear
    },
    // 默认显示的月份
    month: {
      type: Number,
      value: defaultMonth + 1
    },
    // 标记选中的时间 可以在info 中标记内容
    // {day:Number 日期 ,info:String 消息内容}
    markDay: {
      type: Array,
      value: []
    },
    isShowDayInfo: {
      type: Boolean,
      value: false
    },
    lastMonth: {
      type: String,
      value: "上一月"
    },
    nextMonth: {
      type: String,
      value: "下一月"
    },
    weekday: {
      type: Array,
      value: ['日', '一', '二', '三', '四', '五', '六']
    },
    monthname: {
      type: Array,
      value: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    customClass: String
  },
  data: {
    dateArr: [],
    isToday: 0,
    isTodayWeek: false,
    lastTouched: '',
    todayIndex: 0,
    startDay: 0,
    endDay: 0
  },

  watch: {
    markDay: '_markDayChange',
    year: '_yearChange',
    month: '_monthChange'
  },

  methods: {
    _yearChange: function (event) {
      console.log('_yearChange', event, this.data)
      this._dateInit(event, this.data.month - 1);
    },
    _monthChange: function (event) {
      console.log('_monthChange', event)
      let _month = event;
      let _year = this.data.year
      if (_month > 12) {
        _month = _month % 12 ? _month % 12 : 12;
        _year = _year + parseInt(event / 12);
        _year = _month == 12 ? _year - 1 : _year;
        this.setData({
          year: _year,
          month: _month
        })
      }
      this._dateInit();
    },
    _markDayChange: function (event) {
      console.log('markDay', event)
      this._dateInit()
    },
    // 根据 data 中到year 和month 获取月份 显示列表
    _dateInit: function () {
      //全部时间的月份都是按0~11基准，显示月份才+1
      let dateArr = []; //需要遍历的日历数组数据
      let arrLen = 0; //dateArr的数组长度

      let now = this.data.year ? new Date(this.data.year, this.data.month - 1) : new Date();
      let year = now.getFullYear();
      let month = now.getMonth();

      let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
      let startWeek = new Date(year, month, 1).getDay(); //目标月1号对应的星期
      let dayNums = new Date(year, nextMonth, 0).getDate(); //获取目标月有多少天

      // 上个月的天数
      let perMonthDayNums = new Date(year, month, 0).getDate();
      // 下个月天数
      // let nextMothDayNums = new Date(year, month + 2, 0).getDate();

      arrLen = startWeek + dayNums;
      let lastrow = arrLen % 7 ? 1 : 0
      let dateRowNum = parseInt(arrLen / 7) + lastrow;
      let alllen = dateRowNum * 7;
      let _startDay = 0;
      let _endDay = 0;
      console.log("dateRowNum",dateRowNum);
      this.$emit('dayNum', {
        month,
        dateRowNum
      })
      for (let i = 0; i < alllen; i++) {
        let today;
        let isselected = false;
        let day_info = '';
        let isActMonth = false;
        let daynum = ""
        if (i >= startWeek && i < arrLen) {
          daynum = i - startWeek + 1;
          today = '' + year + this._formatNumber(month + 1) + this._formatNumber(daynum);
          isActMonth = true;
        } else if (i < startWeek) {
          daynum = perMonthDayNums - (startWeek - 1 - i);
          today = '' + year + this._formatNumber(month) + this._formatNumber(daynum);
        } else if (i >= arrLen) {
          daynum = i - arrLen + 1;
          today = '' + year + this._formatNumber(month + 2) + this._formatNumber(daynum);
        } else {
          daynum = ""
        }
        // 处理选中和info
        if (this.data.markDay.length > 0) {
          let _arrMarkDay = this.data.markDay;
          // 排序日期
          _arrMarkDay.sort((a, b) => {
            let _na = a.day ? a.day : a;
            let _nb = b.day ? b.day : b;
            return _na - _nb;
          })
          _arrMarkDay.filter((e) => {
            if (_arrMarkDay.length > 1) {
              _startDay = _arrMarkDay[0].day ? _arrMarkDay[0].day : _arrMarkDay[0];
              _endDay = _arrMarkDay[_arrMarkDay.length - 1].day ? _arrMarkDay[_arrMarkDay.length - 1].day : _arrMarkDay[_arrMarkDay.length - 1];
            } else {
              _startDay = "";
              _endDay = ""
            }
            let _day = e.day ? e.day : e;
            if (_day == today) {
              isselected = true;
              day_info = e.info;
              return true
            }
          })
        }
        dateArr[i] = {
          isToday: today,
          isSelected: isselected,
          dateNum: daynum ? daynum : '',
          info: day_info ? day_info : "",
          isActMonth: isActMonth
        };

      }

      this.setData({
        dateArr: dateArr,
        startDay: _startDay ? _startDay : '',
        endDay: _endDay ? _endDay : ''
      })

      // 用于标记当前到星期
      let getYear = this.data.year || defaultYear;
      let getMonth = this.data.month - 1;
      if (defaultYear == getYear && defaultMonth == getMonth) {
        this.setData({
          isTodayWeek: true,
          todayIndex: defaultNowday
        })
      } else {
        this.setData({
          isTodayWeek: false,
          todayIndex: -1
        })
      }
        return dateRowNum;
    },
    lastMonth: function () {
      //全部时间的月份都是按0~11基准，显示月份才+1
      let year = this.data.month - 2 < 0 ? this.data.year - 1 : this.data.year;
      let month = this.data.month - 2 < 0 ? 11 : this.data.month - 2;
      this.setData({
        year: year,
        month: (month + 1)
      })
      this._dateInit(year, month);
      this.triggerEvent('lastMonth', {
        type: 'lastMonth',
        year: year,
        month: (month + 1)
      })
    },
    nextMonth: function () {
      //全部时间的月份都是按0~11基准，显示月份才+1
      let year = this.data.month > 11 ? this.data.year + 1 : this.data.year;
      let month = this.data.month > 11 ? 0 : this.data.month;
      this.setData({
        year: year,
        month: (month + 1)
      })
      this._dateInit(year, month);
      this.triggerEvent('nextMonth', {
        type: 'nextMonth',
        year: year,
        month: (month + 1)
      })
    },
    tapDay: function (e) {
      this.triggerEvent('tapDay', {
        type: 'tapDay',
        tapid: e.currentTarget.id,
        date: e.currentTarget.dataset.date
      })
      this.setData({
        lastTouched: e.currentTarget.dataset.date
      })
      // 刷新数组
      this._dateInit(this.data.year, this.data.month - 1);
    },
    // 格式化数字
    _formatNumber: function (number) {
      return number < 10 ? '0' + number : number;
    }
  },
  // 初始化加载
  mounted: function () {
    this._dateInit(this.data.year, this.data.month - 1);
    this.setData({
      isToday: '' + defaultYear + (defaultMonth + 1) + defaultNow.getDate()
    })
  },
})
