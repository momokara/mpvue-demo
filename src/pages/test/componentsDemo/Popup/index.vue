<template>
  <div class="container">
    <div class="title fz-17pt">
      {{title}}
    </div>
    <div class="demo">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-button @click="togglePopup">弹出 Popup</van-button>
      <van-popup
        :show="show.middle"
        custom-class="center"
        @close="togglePopup"
      >
        中间弹出内容
      </van-popup>

      <div class="fsp16 fc-grey ">
        弹出位置
      </div>
      <van-button
        @click="toggleBottomPopup"
        class="demo-margin-right"
      >底部弹出</van-button>

      <van-popup
        :show="show.bottom"
        position="bottom"
        custom-class="bottom"
        @close="toggleBottomPopup"
      >
        内容
      </van-popup>

      <van-button
        @click="toggleTopPopup"
        class="demo-margin-right"
      >顶部弹出</van-button>
      <van-popup
        :show="show.top"
        position="top"
        :overlay="false"
        custom-class="top"
        @close="toggleTopPopup"
      >
        内容
      </van-popup>

      <van-button @click="toggleRightPopup">右侧弹出</van-button>
      <van-popup
        :show="show.right"
        position="right"
        custom-class="right"
        @close="toggleRightPopup"
      >
        <van-button
          @click="toggleRightPopup"
          class="demo-margin-right"
        >关闭弹层</van-button>

        <van-button @click="toggleRightPopup2">右侧弹出</van-button>
        <van-popup
          :show="show.right2"
          position="right"
          custom-class="right"
          @close="toggleRightPopup2"
        >
          <van-button @click="toggleRightPopup2">关闭弹层</van-button>
        </van-popup>
      </van-popup>

    </div>
    <!-- info -->
    <div class="info">
      <div class="title fc-semi">API 说明</div>
      <div class="fsp16 fc-grey">API</div>
      <apiTable :tabledata="table_api"></apiTable>

      <div class="fsp16 fc-grey">Slot</div>
      <apiTable :tabledata="table_slot"></apiTable>

      <div class="fsp16 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_custom_class"></apiTable>

      <div class="fsp16 fc-grey">Event</div>
      <apiTable :tabledata="table_event"></apiTable>

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
      show: {
        middle: false,
        top: false,
        bottom: false,
        right: false,
        right2: false
      },
      table_api: apiData.api,
      table_event: apiData.event,
      table_slot: apiData.slot,
      table_custom_class: apiData.custom_class
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    _toggle(type) {
      this.show[type] = !this.show[type];
    },
    togglePopup() {
      this._toggle("middle");
    },
    toggleRightPopup() {
      this._toggle("right");
    },

    toggleRightPopup2() {
      this._toggle("right2");
    },

    toggleBottomPopup() {
      this._toggle("bottom");
    },

    toggleTopPopup() {
      this._toggle("top");
      setTimeout(() => {
        this._toggle("top");
      }, 2000);
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
.center {
  width: 60%;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
}

.container .top {
  color: #fff;
  width: 100%;
  padding: 20px;
  border-radius: 0;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.8);
}

.bottom {
  width: 100%;
  padding: 20px;
  line-height: 100px;
  background-color: #fff;
}

.right {
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>
