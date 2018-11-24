// index/calendar/index.js
import {
  VantComponent
} from '../common/component';

const defaultNow = new Date()
const defaultYear = defaultNow.getFullYear()
const defaultMonth = defaultNow.getMonth()
const defaultNowday = defaultNow.getDay()
let _year;
let _month;
let _startDay;
let _endDay;

VantComponent({
  /**
   * 组件的属性列表
   */
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

  /**
   * 组件的初始数据
   */
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
    markDay: '_set_dateInit'
  },

  methods: {
    _set_dateInit: function () {
      this._dateInit(_year, _month)
    },

    _dateInit: function (setYear, setMonth) {
      //全部时间的月份都是按0~11基准，显示月份才+1
      let dateArr = []; //需要遍历的日历数组数据
      let arrLen = 0; //dateArr的数组长度
      let now = setYear ? new Date(setYear, setMonth) : new Date();
      let year = setYear || now.getFullYear();
      let month = setMonth || now.getMonth(); //没有+1方便后面计算当月总天数   
      // 处理月份溢出
      if (month + 1 > 12) {
        year = year + parseInt(month / 12);
        month = month % 12;
      }
      let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
      let startWeek = new Date(year + ',' + (month + 1) + ',' + 1).getDay(); //目标月1号对应的星期
      let dayNums = new Date(year, nextMonth, 0).getDate(); //获取目标月有多少天
      let obj = {};
      let num = 0;
      // 上个月的天数
      let perMonthDayNums = new Date(year, month, 0).getDate();
      // 下个月天数
      // let nextMothDayNums = new Date(year, month + 2, 0).getDate();

      arrLen = startWeek + dayNums;
      let lastrow = arrLen % 7 ? 1 : 0
      let dateRowNum = parseInt(arrLen / 7) + lastrow;
      let alllen = dateRowNum * 7;

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
        obj = {
          isToday: today,
          isSelected: isselected,
          dateNum: daynum ? daynum : '',
          info: day_info ? day_info : "",
          isActMonth: isActMonth
        }
        dateArr[i] = obj;
      }
      this.setData({
        year: year,
        month: month + 1,
        dateArr: dateArr,
        startDay: _startDay ? _startDay : '',
        endDay: _endDay ? _endDay : ''
      })

      _year = year ? year : _year;
      _month = month ? month : _month;

      let nowMonth = defaultMonth + 1;
      let getYear = setYear || defaultYear;
      let getMonth = setMonth >= 0 ? (setMonth + 1) : nowMonth;

      if (defaultYear == getYear && nowMonth == getMonth) {
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
      this._dateInit(_year, _month);
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
    console.log(this.data);
    
  },
})
