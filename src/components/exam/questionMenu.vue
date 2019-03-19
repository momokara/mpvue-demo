<template>
  <div class="contant">
    <div class="question-menu">
      <div
        class="chapter-box"
        v-for="(chapter, chapter_index) in data"
        :key="chapter_index"
      >
        <div class="chapter-title fsp14">{{chapter.name}}</div>
        <div class="question-box">
          <div
            class="col-box fsp14 ta-c fc-grey"
            :class="[{'active':active==col.index},{'right':col.isWrong==0},{'wrong':col.isWrong==1}]"
            v-for="(col, col_index) in chapter.data"
            :key="col_index"
            @click="goQuestion(chapter_index,col_index)"
          >
            <div class="num">{{col.index+1}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    active: {
      type: String
    }
  },

  methods: {
    goQuestion: function(Chapter, Index) {
      this.$emit("goQuestion", { Chapter, Index });
    }
  }
};
</script>

<style lang="scss">
.question-menu {
  height: 55vh;

  .chapter-title {
    padding: 15px;
  }
  .question-box {
    width: 350px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .col-box {
      width: 50px;
      height: 50px;
      .num {
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
        border: 1px solid #ddd;
        box-sizing: border-box;
      }
    }
    .col-box.active {
      .num {
        border: 3px solid #333;
        line-height: 36px;
      }
    }
    .col-box.right {
      .num {
        background-color: green;
        color: #fff;
      }
    }
    .col-box.wrong {
      .num {
        background-color: red;
        color: #fff;
      }
    }
  }
}
</style>
