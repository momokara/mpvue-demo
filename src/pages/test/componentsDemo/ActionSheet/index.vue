<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-button @click="toggleActionSheet1">弹出 ActionSheet</van-button>
      <van-action-sheet
        :show="show1"
        :actions="actions"
        @close="toggleActionSheet1"
        @select="toggleActionSheet1"
      />

      <div class="fsp16 fc-grey ">
        带取消按钮的 ActionSheet
      </div>
      <van-button @click="toggleActionSheet2">弹出带取消按钮的 ActionSheet</van-button>
      <van-action-sheet
        :show="show2"
        :actions="actions"
        cancel-text="取消"
        @close="toggleActionSheet2"
        @cancel="toggleActionSheet2"
        @select="toggleActionSheet2"
      />

      <div class="fsp16 fc-grey ">
        带标题的 ActionSheet
      </div>
      <van-button @click="toggleActionSheet3">弹出带标题的 ActionSheet</van-button>
      <van-action-sheet
        :show="show3"
        title="标题"
        @close="toggleActionSheet3"
      >
        <view class="content">内容</view>
      </van-action-sheet>
    </div>
    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp14 fc-grey">Event</div>
      <apiTable :tabledata="table_event"></apiTable>

      <div class="fsp14 fc-grey">actions</div>
      <apiTable :tabledata="table_actions"></apiTable>

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
      show1: false,
      show2: false,
      show3: false,
      actions: [],
      table_api:apiData.api,
      table_event:apiData.event,
      table_actions:apiData.actions
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    toggle(type) {
      this[type] = !this[type];
    },

    toggleActionSheet1() {
      this.toggle("show1");
    },

    toggleActionSheet2() {
      this.toggle("show2");
    },

    toggleActionSheet3() {
      this.toggle("show3");
    }
  },

  // 页面创建时使用的钩子 可以开始处理页面中的异步请求数据
  onLoad(option) {
    if (option) {
      this.title = option.label;
    }
    this.actions = [
      { name: "选项" },
      { name: "分享", subname: "描述信息", openType: "share" },
      { loading: true },
      { name: "禁用选项", disabled: true }
    ];
  }
};
</script>


<style lang="scss">
.content {
  padding: 20px;
}
</style>
