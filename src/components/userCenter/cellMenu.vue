<template>
  <div class="custom-class demo-block ">
    <van-cell-group :border="config.border">
      <van-cell v-for="(item, index) in data"
                :key="index"
                :icon="item.imgUrl"
                :title="item.name"
                :size="config.size"
                :value="item.info"
                :label="item.label"
                is-link
                :border="config.border"
                @click="golink(item.url)" />
    </van-cell-group>
  </div>
</template>

<script>
import { golink } from '@/utils/tools'
export default {
  data () {
    return {}
  },
  props: {
    data: {
      type: String
    },
    config: {
      type: Object,
      default: {
        size: '',
        isLink: true,
        border: false
      }
    },
    customClass: {
      type: String
    }
  },
  components: {},
  methods: { golink }
}
</script>

<style>
</style>
