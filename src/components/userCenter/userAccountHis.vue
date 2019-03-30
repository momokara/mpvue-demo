<template>
  <div class="user-account-his">
    <div class="list-header fsp12">
      <div class="btn"
           @click="prevMon">上个月</div>
      <div class="date">{{date}}</div>
      <div class="btn"
           @click="nextMon">下个月</div>
    </div>
    <van-cell-group v-if="data.length>0">
      <block v-for="(item, index) in data"
             :key="index">
        <van-cell :title="item.info"
                  :label="item.time">
          <span :class="[{'fc-red':item.num<0},{'fc-grey':item.num==0},{'fc-green':item.num>0}]">{{item.num}}</span>

        </van-cell>

      </block>
    </van-cell-group>
    <div v-else
         class="ta-c fsp14 fc-grey">
      加载中...
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    date: {
      type: String,
      defaule: ''
    }
  },
  methods: {
    prevMon: function () {
      this.$emit('prev')
    },
    nextMon: function () {
      this.$emit('next')
    }
  }
}
</script>

<style lang="scss">
.user-account-his {
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  .list-header {
    display: flex;
    flex-wrap: nowrap;
    padding: 10px 0 5px 0;
    text-align: center;
    .btn {
      flex: 1;
    }
    .date {
      flex: 3;
    }
  }
}
</style>
