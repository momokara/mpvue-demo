<template>
  <div class="swiper">
    <swiper >
      <div v-for="item in swiperList" :key="item">
        <swiper-item>
          <image :src="item" class="slide-image" />
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    swiperList: {
      type: Array
    }
  }
};
</script>

<style>
.swiper {
  width: 750rpx;
}
</style>
