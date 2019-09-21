<template>
  <div class="loading-box-content ta-c"
       :style="'height:'+height+';line-height:'+height">
    <van-loading type="spinner" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '100px'
    }
  }
}
</script>

<style lang="scss">
@mixin loading-box($w, $padding, $border-radius) {
  width: $w;
  margin: 12px auto;
  border-radius: $border-radius;
  padding: $padding;
  background-color: #eee;
}

.loading-box-content {
  @include loading-box(350px, 0px, 12px);
}
</style>
