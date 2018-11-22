<template>
  <div class="container">
    <div class="title ">
      Cell 单元格
    </div>
    <div class="demo">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" :border="false" />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        单元格大小
      </div>
      <van-cell-group>
        <van-cell title="单元格" value="内容" size="large" />
        <van-cell title="单元格" value="内容" label="描述信息" size="large" :border="false" />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        展示图标
      </div>
      <van-cell-group>
        <van-cell title="单元格" icon="location" :border="false" />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        展示箭头
      </div>
      <van-cell-group>
        <van-cell title="单元格" is-link />
        <van-cell title="单元格" value="内容" is-link />
        <van-cell title="单元格" is-link :arrow-direction="'down'" value="内容" :border="false" :url="'/pages/dashboard/index'" />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        高级用法
      </div>
      <van-cell-group>
        <van-cell value="内容" icon="shop" is-link>
          <view slot="title">
            <view class="cell-title">单元格</view>
            <van-tag type="danger">标签</van-tag>
          </view>
        </van-cell>
        <van-cell title="单元格" icon="location" is-link />
        <van-cell title="单元格" :border="false">
          <van-icon :slot="right-icon" :name="search" />
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  // 使用的 vue 组件
  components: {},
  // 页面中的方法
  methods: {},
  // VUE 钩子 常用

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {
    console.log("demopage-created", this.msg);
  },
  // 页面节点挂载
  mounted() {
    console.log("demopage-mounted", this.msg);
  }
};
</script>


<style lang="scss">
.fsp16{
  margin: 10px 0;
}
</style>
