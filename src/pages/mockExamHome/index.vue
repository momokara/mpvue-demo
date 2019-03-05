<template>
  <div class="exam-home-container">
    <!-- 顶部轮播 -->
    <headerSwiper
      :swiperList="swiper.data"
      :config="swiper.config"
      @change="swiperChange"
      @animationfinish="swiperChange"
    >
    </headerSwiper>

    <div class="main-nav-box">
      <block
        v-for="(item, index) in nav"
        :key="index"
      >
        <examHomeNav :data="item"></examHomeNav>
      </block>

    </div>
    <!-- <van-button>去笔试</van-button>
    <van-button>去预约学车</van-button> -->
  </div>
</template>
<script>
import headerSwiper from "@/components/headerSwipers";
import examHomeNav from "@/components/exam/examHomeNav";
export default {
  data() {
    return {
      swiper: {},
      nav: [
        {
          imgUrl:
            "https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/images/%E7%AC%94%E8%AF%95%E7%BB%83%E4%B9%A0.png",
          url: "pages/mockExam/examHome/main",
          name: "文科联系",
          info: "题库齐全解释准确"
        },
        {
          imgUrl:
            "https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/images/%E9%A2%84%E7%BA%A6%E5%AD%A6%E8%BD%A6.png",
          url: "",
          name: "预约练车",
          info: "在线预约自由练车"
        }
      ]
    };
  },
  // 使用的 vue 组件
  components: {
    headerSwiper,
    examHomeNav
  },
  // 页面中的方法
  methods: {},
  // VUE 钩子 常用

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {},

  // 监听页面显示
  onShow() {}
};
</script>

<style lang="scss">
.main-nav-box {
  width: 350px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .exam-nav {
    margin-bottom: 15px;
  }
}
</style>
