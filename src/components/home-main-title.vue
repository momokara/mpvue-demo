<template>
  <div class="ad-title-row">
    <div class="ad-title fsp16">{{title}}</div>

    <a
      v-if="url"
      :href="url"
      class="more fsp14"
      @click="tapmore"
    >更多 <div class="icon-arrow"></div></a>
  </div>
</template>

<script>
export default {
  props: ["title", "url"],
  methods: {
    tapmore() {
      this.$emit("tapmore", this.url);
    }
  }
};
</script>

<style lang="scss">
.ad-title-row {
  margin: 20rpx auto;
  height: 60rpx;
  line-height: 60rpx;
  .ad-title {
    display: inline-block;
  }
  .more {
    float: right;
    color: #6bb72d;
    margin-right: -10rpx;
  }
  .icon-arrow {
    width: 10px;
    height: 10px;
    border-top: 3px solid #6bb72d;
    border-right: 3px solid #6bb72d;
    float: right;
    transform: rotate(45deg);
    margin: 20rpx 20rpx 0 0;
  }
}
</style>
