<template>
  <div
    class="contant"
    v-if="data"
  >
    <div class="header-title">
      {{qtypename[data.type]}}
    </div>
    <div class="header-question">
      {{data.question}}
    </div>
    <div class="header-img">
      <img
        v-if="data.imgUrl"
        :src="data.imgUrl"
      >
    </div>
    <div class="main-option">
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
                  >
                    <div
                      slot="icon-default"
                      class="section-name fsp14"
                    >
                      {{item.name}}
                    </div>
                    <div
                      slot="icon-active"
                      class="section-name fsp14 active"
                    >
                      {{item.name}}
                    </div>
                  </van-checkbox>
                </div>
              </van-cell>
            </block>

          </van-cell-group>

        </van-checkbox-group>
      </block>
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
                      <div class="section-name fsp14">{{item.name}}</div>
                    </div>
                    <div slot="icon-active">
                      <div class="section-name fsp14 active">{{item.name}}</div>
                    </div>
                    <div slot="icon-disabled">
                      <div class="section-name fsp14 disabled">{{item.name}}</div>
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
      <div>{{data.answer}}</div>
      <div>{{data.explain}}</div>
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
    answer: []
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
      this[e.mp.currentTarget.dataset.name] = e.mp.detail;
      let _answer = "";
      this.answer.forEach(e => {
        _answer = _answer + e;
      });
      this.sendChoose(_answer);
    },
    // 单选
    clickRadio: function(e) {
      this[e.mp.currentTarget.dataset.key] = [e.mp.currentTarget.dataset.value];
      let _answer = this.answer[0];
      this.sendChoose(_answer);
    },
    sendChoose: function(answer) {
      console.log(answer, this.data.answer);
      let isWrong = answer == this.data.answer ? false : true;
      let data = {
        answer: this.answer,
        isWrong
      };
      this.$emit("choose", data);
    }
  }
};
</script>

<style lang="scss">
.main-option {
  .answer {
    .active {
      background-color: green;
    }
  }
  .active {
    background-color: red;
  }
}
</style>
