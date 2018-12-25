<template>
  <div class="container">
    <div class="title ">
      CheckBox 复选框
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-checkbox
        :value="checked_0"
        data-name="checked_0"
        @change="onChange"
        :checked-color="'red'"
      >复选框 checked-color="'red'"</van-checkbox>
      <van-checkbox
        :value="checked_1"
        data-name="checked_1"
        @change="onChange"
        :checked-color="'red'"
        :disabled="true"
      >复选框-disabled</van-checkbox>

      <div class="fsp16 fc-grey ">
        使用自定义图标
      </div>

      <van-checkbox
        use-icon-slot
        :value="checked_2"
        data-name="checked_2"
        @change="onChange"
      >
        自定义图标
        <div slot="icon-default">
          <div class="section-name">A</div>
        </div>
        <div slot="icon-active">
          <div class="section-name active">A</div>
        </div>
      </van-checkbox>
      <van-checkbox
        use-icon-slot
        :value="checked_3"
        data-name="checked_3"
        @change="onChange"
        :disabled="true"
      >
        自定义图标-disabled
        <div slot="icon-disabled">
          <div class="section-name disabled">D</div>
        </div>
      </van-checkbox>

      <div class="fsp16 fc-grey ">
        嵌套Group 和cell
      </div>
      <van-checkbox-group
        :value="checked_group_selected"
        data-name="checked_group_selected"
        @change="onChangeGroup"
      >
        <van-cell-group>
          <van-cell
            :title="item.name+item.info"
            v-for="(item, index) in checked_group"
            :key="item"
            :data-name="item.name"
            @click="toggle"
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
                <div slot="icon-default">
                  <div class="section-name fsp14">{{index}}</div>
                </div>
                <div slot="icon-active">
                  <div class="section-name fsp14 active">{{index}}</div>
                </div>
              </van-checkbox>
            </div>
          </van-cell>
        </van-cell-group>

      </van-checkbox-group>
    </div>

  </div>
</template>
<script>
import card from "@/components/card";
export default {
  data() {
    return {
      msg: "这里是消息",
      checked_0: false,
      checked_1: false,
      checked_2: true,
      checked_group: [
        {
          name: "check0",
          info: "复选框 嵌套Group 和cell"
        },
        {
          name: "check1",
          info: "复选框 嵌套Group 和cell"
        },
        {
          name: "check2",
          info: "复选框 嵌套Group 和cell"
        }
      ],
      checked_group_selected: []
    };
  },
  // 使用的 vue 组件
  components: {},
  // 页面中的方法
  methods: {
    onChange(e) {
      this[e.mp.currentTarget.dataset.name] = !this[
        e.mp.currentTarget.dataset.name
      ];
    },
    onChangeGroup(e) {
      this[e.mp.currentTarget.dataset.name] = e.mp.detail;
    },
    toggle(e) {
      const selected_check_box = this.$mp.page.selectComponent(
        `.check-box-${e.mp.currentTarget.dataset.name}`
      );
      selected_check_box.toggle();
    },
    noop() {}
  },

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  created() {
    console.log("demopage-created", this.msg);
  }
};
</script>


<style lang="scss">
.section-name {
  height: 20px; /*px*/
  line-height: 18px; /*px*/
  width: 20px; /*px*/
  border-radius: 50%;
  border: 1px solid #ddd;
  text-align: center;
  font-style: 14px;
  box-sizing: border-box;
}
.active {
  background-color: #1a3;
  color: #fff;
}
.disabled {
  background-color: #ddd;
  color: #fff;
}
.selected {
  color: #1a3;
}
.select-icon {
  margin-right: 5px;
}
</style>
