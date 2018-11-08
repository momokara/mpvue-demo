<template>
  <div class="container">
    <v-cell-group>
      <v-cell v-for="(item,index) in cellList" :key="index" :title="item.title" :value="item.value+'|index:'+index" />
    </v-cell-group>
  </div>
</template>

<script>
import swiper from "@/components/swiper";
import scrollBox from "@/components/scroll-box";  

export default {
  data() {
    return {
      motto: "home",
      userInfo: {},
      cellList: [
        { title: "单元格1", value: "内容1" },
        { title: "单元格2", value: "内容2" },
        { title: "单元格3", value: "内容3" }
      ],
      tempFilePaths: [],
      uploadresFilePaths: []
    };
  },

  components: {
    swiper,
    scrollBox
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    }
  
  },

  created() {
   
  }
};
</script>

<style scoped>
</style>
