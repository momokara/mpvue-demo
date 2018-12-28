<template>
  <div class="api-table">
    <div class="api-table-row" v-for="tabrow in tabledata" v-bind:key="tabrow">
      <div class="api-table-col flex-1_5 ta-c fs12" v-if="tabrow.params">{{tabrow.params}}</div>
      <div class="api-table-col flex-2 fs12" v-if="tabrow.desc">{{tabrow.desc}}</div>
      <div class="api-table-col flex-1 ta-c fs12" v-if="tabrow.type">{{tabrow.type}}</div>
      <div class="api-table-col flex-1 ta-c fs12" v-if="tabrow.default">{{tabrow.default}}</div>
      <div class="api-table-col flex-1 ta-c fs12" v-if="tabrow.return">{{tabrow.return}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabledata: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.api-table {
  margin: 10px auto;
  width: 720rpx;
}
.api-table-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.api-table-col {
  display: inline-block;
  padding: 3px;
  border-top: 1px solid #888;
  border-left: 1px solid #888;
}
.api-table-col:first-child {
  border-left: none;
}
.flex-1_5 {
  flex: 1.5;
}
.flex-1 {
  flex: 1;
}
.flex-2 {
  flex: 2;
}
.flex-3 {
  flex: 3;
}
</style>
