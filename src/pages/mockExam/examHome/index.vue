<template>
  <div class="exam-home-container">
    <van-tabs
      :active="active"
      @change="tabChange"
      type="card"
      color="#3ac569"
      animated
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
            <block
              v-for="(item_nav, index_nav) in data.headerNav"
              :key="index_nav"
            >
              <van-tabbar-item @click="golink(item_nav.url)">
                <div slot="icon">
                  <img
                    class="nav-icon"
                    :src="item_nav.imgUrl"
                  >
                </div>
                {{item_nav.name}}
              </van-tabbar-item>

            </block>

          </div>
          <div class="select-row">
            <van-cell
              title="我的题库"
              value="内容"
              is-link
            />
          </div>
        </div>
        <div class="exam-menu-box">
          <van-cell-group>

            <van-cell
              v-for="(item_menu, index_menu) in data.menuNav"
              :key="index_menu"
              :title="item_menu.name"
              is-link
              @click="golink(item_menu.url)"
            >
              <div
                slot="icon"
                class="icon fc-fff ta-c"
              >
                <div class="No">{{index_menu+1}}</div>
              </div>
            </van-cell>
          </van-cell-group>
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>
<script>
import basicInfo from "@/store/basicInfo.js";
import qusetionData from "@/store/questionData.js";
import { golink } from "@/utils/tools";

// 页面记录
import { pagelogs } from "@/utils/logs";
export default {
  data() {
    return {
      active: 0,
      tableList: ["科目一", "科目四"],
      pageconfig: {},
      data: {
        headerNav: [
          {
            imgUrl:
              "https://cdn.huibaoming.com/haivit/public/image/20181024124250_76/随机练习.png",
            name: "随机练习",
            url: ""
          },
          {
            imgUrl:
              "https://cdn.huibaoming.com/haivit/public/image/20181024124250_76/收藏夹.png",
            name: "我的收藏",
            url: ""
          },
          {
            imgUrl:
              "https://cdn.huibaoming.com/haivit/public/image/20181024124250_76/错题本.png",
            name: "错题记录",
            url: ""
          },
          {
            imgUrl:
              "https://cdn.huibaoming.com/haivit/public/image/20181024124250_76/考试成绩.png",
            name: "考试成绩",
            url: ""
          }
        ],
        // 答题技巧列表
        menuNav: [
          {
            name: "交通题",
            url: "#"
          },
          {
            name: "停车题",
            url: "#"
          },
          {
            name: "处罚题",
            url: "#"
          },
          {
            name: "距离题",
            url: "#"
          },
          {
            name: "速度题",
            url: "#"
          },
          {
            name: "手势题",
            url: "#"
          }
        ]
      }
    };
  },
  // 使用的 vue 组件
  components: {},
  watch: {},
  computed: {},
  // 页面中的方法
  methods: {
    golink,
    tabChange: function(e) {
      console.log(e);
      console.log("basicInfo", basicInfo.state);
    }
  },

  onLoad() {},
  // 监听页面显示
  onShow() {
    pagelogs();
    console.log(qusetionData.state)
    qusetionData.commit("clean")
  },

  // 监听页面隐藏
  onHide() {
    pagelogs(true);
  }
};
</script>

<style lang="scss">
.user-info-box,
.exam-menu-box {
  box-sizing: border-box;
}
.exam-home-container {
  padding: 10px 0 0 0;
  .user-info-box {
    width: 100%;

    padding: 15px 15px 0 15px;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 10px;

    .count-row {
      display: flex;
      justify-content: center;
      .cell {
        padding: 10px 30px 15px 30px;
        .count {
          margin: 5px auto;
        }
        .golink {
          width: 90px;
          background-color: #3ac569;
          padding: 5px 0;
          border-radius: 15px;
        }
      }
    }
    .menu-row {
      display: flex;
      .van-tabbar-item__icon image {
        height: 30px;
      }
    }
    .select-row {
      margin-top: 10px;
      border-top: 1px solid #ddd;
    }
  }
  .exam-menu-box {
    margin: 10px 0;
    border-radius: 10px;
    padding: 5px 15px;
    overflow: hidden;
    background-color: #fff;
    .icon {
      position: relative;
      margin-right: 5px;
      width: 18px;
      .No {
        position: absolute;
        top: 3px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 50%;
        background-color: #3ac569;
      }
    }
  }
}
</style>
