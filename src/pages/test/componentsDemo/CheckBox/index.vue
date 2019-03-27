<template>
  <div class="container">
    <div class="title ">
      {{title}}
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
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">Checkbox API</div>
      <apiTable :tabledata="table_api_checkbox"></apiTable>

      <div class="fsp14 fc-grey">CheckboxGroup API</div>
      <apiTable :tabledata="table_api_checkboxgroup"></apiTable>

      <div class="fsp14 fc-grey">Checkbox Event</div>
      <apiTable :tabledata="table_event_checkbox"></apiTable>

      <div class="fsp14 fc-grey">CheckboxGroup Event</div>
      <apiTable :tabledata="table_event_checkboxgroup"></apiTable>

      <div class="fsp14 fc-grey">Checkbox Slot</div>
      <apiTable :tabledata="table_slot_checkbox"></apiTable>

      <div class="fsp14 fc-grey">Checkbox 方法</div>
      <div class="fs12 fc-grey">通过 selectComponent 可以获取到 checkbox 实例并调用实例方法</div>
      <apiTable :tabledata="table_func_checkbox"></apiTable>

      <div class="fsp14 fc-grey">Checkbox 外部样式类</div>
      <apiTable :tabledata="table_custom_class_checkbox"></apiTable>

      <div class="fsp14 fc-grey">CheckboxGroup 外部样式类</div>
      <apiTable :tabledata="table_custom_class_checkboxgroup"></apiTable>
    </div>
  </div>
</template>
<script>
import apiTable from "@/components/apiDataTable";
import apiData from "./api_data";
export default {
  data() {
    return {
      title: "",
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
      checked_group_selected: [],
      table_api_checkbox: apiData.api_Checkbox,
      table_api_checkboxgroup: apiData.api_CheckboxGroup,
      table_event_checkbox: apiData.event_Checkbox,
      table_event_checkboxgroup: apiData.event_CheckboxGroup,
      table_slot_checkbox: apiData.slot_Checkbox,
      table_func_checkbox: apiData.func_Checkbox,
      table_custom_class_checkbox: apiData.custom_class_Checkbox,
      table_custom_class_checkboxgroup: apiData.custom_class_CheckboxGroup
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
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
  onLoad(option) {
    if (option) {
      this.title = option.label;
    }
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
