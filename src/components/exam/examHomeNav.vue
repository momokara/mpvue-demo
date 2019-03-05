<template>
  <div
    class="exam-nav"
    @click="golink(data.url)"
  >
    <img
      class="icon"
      :src="data.imgUrl"
      :alt="name"
      mode="widthFix"
    >
    <div class="exam-nav-name fsp18 fc-black">{{data.name}}</div>
    <div class="exam-nav-info fsp12 fc-grey">{{data.info}}</div>
  </div>
</template>

<script>
import { golink } from "@/utils/tools";
import config from "@/config.js";
export default {
  props: {
    data: {
      type: Object,
      default: {
        imgUrl: `${config.defaultData.icon}`,
        url: "#",
        name: "#",
        info: "#"
      }
    }
  },
  methods: {
    golink
  }
};
</script>

<style lang="scss">
.exam-nav {
  width: 140px;
  // height: 139px;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  .icon{
    width: 60px;
    margin: 5px 0;
  }
}
</style>
