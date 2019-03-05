<template>
  <div class="exam-home-container">
    <van-tabs
      :active="active"
      @change="tabChange"
      type="card"
      color="#6bb72d"
    >
      <van-tab
        v-for="(item, index) in tableList"
        :key="index"
        :title="item"
      >
        <div class="user-info-box bgc">
          <div class="count-row">
            <div class="cell ta-c">
              <div class="fsp12 fc-grey cell-title">已完成的题目</div>
              <div class="fsp20 fc-black count">45/666</div>
              <div class="fsp14 fc-fff golink">顺序练习</div>
            </div>
            <div class="cell ta-c">
              <div class="fsp12 fc-grey cell-title">已完成的题目</div>
              <div class="fsp20 fc-black count">45/666</div>
              <div class="fsp14 fc-fff golink">顺序练习</div>
            </div>
          </div>
          <div class="menu-row">

          </div>
          <div class="select-row">
            <van-cell
              title="我的题库"
              value="内容"
              size="large"
              is-link
            />
          </div>
        </div>
        <div class="exam-menu-box"></div>

      </van-tab>
    </van-tabs>

  </div>
</template>
<script>
// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {
      active: 0,
      tableList: ["科目一", "科目四"]
    };
  },
  // 使用的 vue 组件
  components: {},
  watch: {},
  computed: {},
  // 页面中的方法
  methods: {
    tabChange: function(e) {
      console.log(e);
    }
  },

  onLoad() {},
  // 监听页面显示
  onShow() {
    pagelogs();
  },

  // 监听页面隐藏
  onHide() {
    pagelogs(true);
  }
};
</script>

<style lang="scss">
.exam-home-container {
  padding: 20px 0 0 0;
  .user-info-box {
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    .count-row {
      display: flex;
      justify-content: center;
      .cell {
        padding: 30px 40px;
        .golink {
          width: 80px;
          background-color: #3ac569;
          padding: 5px 0;
          border-radius: 15px;
        }
      }
    }
  }
}
</style>
