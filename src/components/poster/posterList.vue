<template>
  <div class="poster-list ">
    <block v-if="data">
      <div
        v-for="item in data"
        :key="item"
        @click="golink(item.url)"
        class="link"
      >
        <div class="image-box ta-c">
          <img
            :src="item.imgUrl"
            mode="widthFix"
            class="image"
          />
        </div>
        <div class="name ta-c fsp12 fc-grey line-clamp_1">{{item.name}}</div>
      </div>
    </block>
  </div>

</template>

<script>
import { golink } from '@/utils/tools'
export default {
  props: {
    data: {
      type: Array
    }
  },
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    golink
  }
}
</script>

<style lang="scss">
.poster-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .link {
    width: 48%;
    box-sizing: border-box;
    margin-bottom: 10px;
    .image-box {
      width: 100%;
      height: 190px;
      background-color: #ddd;
      border-radius: 5px;
      overflow: hidden;
      margin: auto;
    }
    .image {
      width: 160px;
    }
    .name {
      width: 100%;
    }
  }
}
</style>
