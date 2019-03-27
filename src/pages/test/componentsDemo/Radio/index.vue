<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-radio-group
        :value="radio_1"
        data-key="radio_1"
        @change="onChange"
      >
        <van-radio name="0">单选框 一般用法 </van-radio>
        <van-radio
          name="1"
          checkedColor="red"
        >单选框 改变选中颜色 checkedColor="red"</van-radio>
        <div class="fsp16 fc-grey ">
          使用自定义图标
        </div>
        <van-radio
          name="2"
          use-icon-slot
        > 自定义图标
          <div slot="icon-default">
            <div class="section-name fsp14">A</div>
          </div>
          <div slot="icon-active">
            <div class="section-name fsp14 active">B</div>
          </div>
        </van-radio>
        <van-radio
          name="2"
          use-icon-slot
          :disabled="true"
        > 自定义图标-disabled
          <div slot="icon-disabled">
            <div class="section-name fsp14 disabled">D</div>
          </div>
        </van-radio>

      </van-radio-group>
      <div class="fsp16 fc-grey ">
        嵌套Group 和cell
      </div>
      <van-radio-group :value="radio_2">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in radio_list"
            :key="index"
            :title="item.info"
            clickable
            data-key="radio_2"
            :data-value="item.value"
            @click="onClick"
          >
            <div
              slot="icon"
              class="select-icon"
            >
              <van-radio
                :name="item.value"
                use-icon-slot
                :disabled="item.isdisable"
              >
                <div slot="icon-default">
                  <div class="section-name fsp14">A</div>
                </div>
                <div slot="icon-active">
                  <div class="section-name fsp14 active">B</div>
                </div>
                <div slot="icon-disabled">
                  <div class="section-name fsp14 disabled">D</div>
                </div>
              </van-radio>
            </div>

          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">Radio API</div>
      <apiTable :tabledata="table_api_radio"></apiTable>

      <div class="fsp14 fc-grey">RadioGroup API</div>
      <apiTable :tabledata="table_api_radiogroup"></apiTable>

      <div class="fsp14 fc-grey">Radio Event</div>
      <apiTable :tabledata="table_event_radio"></apiTable>

      <div class="fsp14 fc-grey">RadioGroup Event</div>
      <apiTable :tabledata="table_event_radiogroup"></apiTable>

      <div class="fsp14 fc-grey">Radio Slot</div>
      <apiTable :tabledata="table_slot_radio"></apiTable>

      <div class="fsp14 fc-grey">Radio 外部样式类</div>
      <apiTable :tabledata="table_custom_class_radio"></apiTable>

      <div class="fsp14 fc-grey">RadioGroup 外部样式类</div>
      <apiTable :tabledata="table_custom_class_radiogroup"></apiTable>

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
      radio_1: "1",
      radio_list: [
        {
          value: "radio0",
          info: "单选框 嵌套Group和Cell",
          isdisable: false
        },
        {
          value: "radio1",
          info: "单选框 嵌套Group和Cell",
          isdisable: false
        },
        {
          value: "radio1",
          info: "单选框 嵌套Group和Cell-disabled",
          isdisable: true
        }
      ],
      radio_2: "",
      table_api_radio: apiData.api_Radio,
      table_api_radiogroup: apiData.api_RadioGroup,
      table_event_radio: apiData.event_Radio,
      table_event_radiogroup: apiData.event_RadioGroup,
      table_slot_radio: apiData.slot_Radio,
      table_custom_class_radio: apiData.custom_class_Radio,
      table_custom_class_radiogroup: apiData.custom_class_RadioGroup
    };
  },
  // 使用的 vue 组件
  components: { apiTable },
  // 页面中的方法
  methods: {
    onChange: function(e) {
      console.log(e.mp.detail);
      this[e.mp.currentTarget.dataset.key] = e.mp.detail;
    },
    onClick(e) {
      console.log(e);
      this[e.mp.currentTarget.dataset.key] = e.mp.currentTarget.dataset.value;
    }
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
