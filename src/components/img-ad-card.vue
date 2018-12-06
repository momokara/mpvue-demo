<template>
  <a
    :href="url"
    class="ad-card"
    :style="[{width:width,height:height}]"
  >
    <img
      :src="image_url"
      :alt="title"
      mode="scaleToFill"
      class="ad_img"
      srcset=""
      :style="[{width:width,height:imgHeight}]"
    >
    <div class="info-row fs12 ta-c line-clamp_1">
      <span class="name line-clamp_1">{{title}}</span>
      <span class="price line-clamp_1">{{price}}</span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    image_url: String,
    width: String,
    imgHeight: String,
    height: String,
    url: String,
    title: String,
    price: String
  }
};
</script>

<style lang="scss">
.ad-card {
  position: relative;
  display: inline-block;
  .info-row {
    .name,
    .price {
      display: inline;
    }
  }
}
</style>
