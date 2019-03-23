<template>
  <div
    class="contant"
    v-if="data"
  >
    <div class="header">
      <div class="header-title fsp12 fc-fff">
        {{qtypename[data.type]}}
      </div>
      <div class="header-question">
        {{qnum}}、{{data.question}}
      </div>

    </div>
    <div class="header-img">
      <img
        class="question-img"
        v-if="data.imgUrl"
        :src="data.imgUrl"
      >
    </div>
    <div class="main-option">
      <!-- 多选题 -->
      <block v-if="data.type==3">
        <van-checkbox-group
          :value="answer"
          data-name="answer"
          @change="clickCheckbox"
        >
          <van-cell-group>
            <block
              v-for="(item, index) in optionName"
              :key="item"
            >
              <van-cell
                v-if="data['option'+(index+1)]"
                :title="data['option'+(index+1)]"
                :class="[{'answer':item.isanswer}]"
                @click="toggle"
                :data-name="item.name"
              >
                <div
                  slot="icon"
                  class="select-icon"
                >
                  <van-checkbox
                    use-icon-slot
                    :name="item.name"
                    :class="'check-box-'+item.name"
                    @click.stop
                    :disabled="isDiable"
                  >
                    <div
                      slot="icon-default"
                      class="section-name ta-c fsp14"
                    >
                      {{item.name}}
                    </div>
                    <div slot="icon-active">
                      <van-icon
                        v-if="item.isanswer"
                        custom-class="act-icon"
                        name="checked"
                        size="22px"
                        color="#3AC569"
                      />
                      <van-icon
                        v-else
                        custom-class="act-icon"
                        name="clear"
                        size="22px"
                        color="#F64C4C"
                      />
                    </div>
                    <div slot="icon-disabled">
                      <div class="section-name ta-c fsp14 disabled">{{item.name}}</div>
                    </div>
                  </van-checkbox>
                </div>
              </van-cell>
            </block>

          </van-cell-group>

        </van-checkbox-group>
      </block>
      <!-- 单选/判断 -->
      <block v-else>
        <van-radio-group :value="answer[0]">
          <van-cell-group>
            <block
              v-for="(item, index) in optionName"
              :key="index"
            >
              <van-cell
                v-if="data['option'+(index+1)]"
                :title="data['option'+(index+1)]"
                :class="[{'answer':item.isanswer}]"
                data-key="answer"
                :data-value="item.name"
                @click="clickRadio"
              >
                <div
                  slot="icon"
                  class="select-icon"
                >
                  <van-radio
                    :name="item.name"
                    use-icon-slot
                  >
                    <div slot="icon-default">
                      <div class="section-name ta-c fsp14">{{item.name}}</div>
                    </div>
                    <div slot="icon-active">
                      <van-icon
                        v-if="item.isanswer"
                        custom-class="act-icon"
                        name="checked"
                        size="22px"
                        color="#3AC569"
                      />
                      <van-icon
                        v-else
                        custom-class="act-icon"
                        name="clear"
                        size="22px"
                        color="#F64C4C"
                      />
                    </div>
                    <div slot="icon-disabled">
                      <div class="section-name ta-c fsp14 disabled">{{item.name}}</div>
                    </div>
                  </van-radio>
                </div>

              </van-cell>
            </block>

          </van-cell-group>
        </van-radio-group>
      </block>
    </div>
    <div class="footer-explan">
      <div class="answer-row">
        <van-tag type="success">参考答案</van-tag>
        <span class="value fsp14">{{data.answer}}</span>
      </div>
      <div class="explan-row fsp14">
        <van-tag type="success">参考答案</van-tag>{{data.explain}}
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    },
    answer: [],
    // 是否禁用选项
    isDiable: {
      type: Boolean,
      default: false
    },
    // 是否可以选择答案
    canChoose: {
      type: Boolean,
      default: true
    },
    qnum: {
      type: Number
    }
  },
  data() {
    return {
      // 题型
      qtypename: ["~", "判断题", "单选题", "多选题"],
      // 选项名称
      optionName: [
        { name: "A", isanswer: false },
        { name: "B", isanswer: false },
        { name: "C", isanswer: false },
        { name: "D", isanswer: false }
      ]
    };
  },
  computed: {
    answerList: function() {
      let _this = this;
      if (_this.data) {
        this.optionName.forEach((e, i) => {
          if (_this.data.answer.indexOf(e.name) >= 0) {
            _this.optionName[i].isanswer = true;
          } else {
            _this.optionName[i].isanswer = false;
          }
        });
      }
    }
  },
  methods: {
    toggle: function(e) {
      const selected_check_box = this.$parent.$mp.page.selectComponent(
        `.check-box-${e.mp.currentTarget.dataset.name}`
      );
      selected_check_box.toggle();
    },
    // 多选
    clickCheckbox: function(e) {
      if (this.canChoose) {
        this[e.mp.currentTarget.dataset.name] = e.mp.detail;
        let _answer = "";
        this.answer.forEach(e => {
          _answer = _answer + e;
        });
        this.sendChoose(_answer);
      } else {
        this.sendFail(e.mp);
      }
    },
    // 单选
    clickRadio: function(e) {
      if (this.canChoose) {
        this[e.mp.currentTarget.dataset.key] = [
          e.mp.currentTarget.dataset.value
        ];
        let _answer = this.answer[0];
        this.sendChoose(_answer);
      } else {
        this.sendFail(e.mp);
      }
    },
    // 选择答案
    sendChoose: function(answer) {
      let isWrong = answer == this.data.answer ? false : true;
      let data = {
        answer: this.answer,
        isWrong
      };
      this.$emit("choose", data);
    },
    sendFail: function(data) {
      this.$emit("fail", data);
    }
  }
};
</script>

<style lang="scss">
.header {
  background-color: #fff;
  .header-title {
    background: url(https://cdn.jiapeiyun.cn/haivit/public/image/20181218165638_948/题目标记.png);
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
    height: 25px;
    width: 150px;
    line-height: 24px;
    text-indent: 5px;
    display: inline-block;
    margin: 0 0 5px 0;
  }
  .header-question {
    padding: 5px 10px;
  }
}
.header-img {
  width: 350px;
  margin: 5px auto;
  .question-img {
    width: 100%;
  }
}
.main-option {
  .select-icon {
    margin: 0 5px 0 -5px;
    .section-name {
      height: 20px; /*px*/
      line-height: 20px; /*px*/
      width: 20px; /*px*/
      border-radius: 50%;
      border: 1px solid #ddd;
    }
    .disabled {
      background: #ddd;
    }
    // 正确答案
    .answer {
      .active {
        background-color: #3ac569;
      }
    }
    .active {
      background-color: #e61f19;
      color: #fff;
    }
  }
}
.footer-explan {
  margin: 15px 0;
  padding: 10px 15px;
  background-color: #fff;
}
</style>
