<template>
  <view class='store_scroll'>
    <scroll-view scroll-x scroll-with-animation>
      <div v-if="scrollList">
        <div class="slide-cell" v-for="item in scrollList" :key="item">
          <image :src="item" class="slide-image" />
        </div>
      </div>
      <div v-else class="slot">
        <slot></slot>
      </div>
    </scroll-view>
  </view>
</template>

<script>
export default {
  props: {
    scrollList: {
      type: Array
    }
  }
};
</script>

<style scoped>
.store_scroll {
  width: 100%;
  height: 200px;
  white-space: nowrap;
}
.store_scroll scroll-view {
  height: 100%;
}
.slide-cell {
  display: inline-block;
}
</style>
