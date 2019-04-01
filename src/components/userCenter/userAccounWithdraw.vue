<template>
  <div class="user-withdraw-card">
    <div class="info-box">
      <div class="header-line fsp20 fc-black">
        今日还可提现<span class="fc-green">{{data.todayMax-data.todayRecord>0?data.todayMax-data.todayRecord:0}}</span>元
      </div>
      <div class="input-box">
        <input type="number"
               class="num-input fsp18 fc-black"
               placeholder="输入提现金额"
               maxlength="15"
               :value="inputValue"
               @input="numChange">
      </div>
      <!-- <div class="input-info fsp12 fc-igreen">
        今日已提现金额<span>{{data.todayRecord}}</span>元
        (剩余<span>{{data.todayMax-data.todayRecord}}</span>元)
      </div> -->
      <div class="control-btn">
        <slot></slot>
      </div>
      <div class="desc">
        <wxParse :content="data.info"
                 @preview="preview"
                 @navigate="navigate"></wxParse>
      </div>

    </div>

  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import { formatterNum } from '@/utils/tools'
export default {
  props: {
    data: {
      type: Object,
      default: {
        todayMax: 0,
        todayRecord: 0,
        info: ''
      }
    },
    inputValue: {
      type: Number
    }
  },
  components: { wxParse },
  methods: {
    preview (src, e) {
      console.log(src, e)
      // do something
    },
    navigate (href, e) {
      console.log(href, e)
      // do something
    },
    numChange: function (e) {
      this.inputValue = e.mp.detail.value
      this.inputValue = formatterNum(this.inputValue)
      this.$emit('change', e.mp.detail)
    }
  }
}
</script>

<style lang="scss">
@import url('~mpvue-wxparse/src/wxParse.css');
.user-withdraw-card {
  width: 300px;
  margin: 10px auto;
  box-shadow: 0 0 3px #ddd;
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  padding: 25px;
  .input-box {
    border-bottom: 1px solid #ddd;
    margin: 10px 0;
    .num-input {
      height: 50px;
      line-height: 50px;
    }
  }
  .input-info {
    margin: 0 auto 10px auto;
  }
}
</style>
