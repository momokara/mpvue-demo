<template>
  <div class="container">
    <div class="title ">
      {{title}}
    </div>
    <div class="demo fsp14">
      <div class="fsp16 fc-grey ">
        基础用法
      </div>
      <van-cell-group>
        <van-field
          :value="value"
          placeholder="请输入用户名"
          :border="false"
          clearable
        />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        自定义类型
      </div>
      <van-cell-group>
        <van-field
          :value="username "
          label="用户名"
          placeholder="请输入用户名"
          clearable
          icon="question-o"
          icon-class="icon"
          required
          @click-icon="onClickIcon"
        />
        <van-field
          :value="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          :border="false"
        />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        禁用输入框
      </div>
      <van-cell-group>
        <van-field
          value="输入框已禁用"
          label="用户名"
          left-icon="contact"
          disabled
          :border="false"
        />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        错误提示
      </div>
      <van-cell-group>
        <van-field
          :value="username2"
          label="用户名"
          placeholder="请输入用户名"
          error
        />
        <van-field
          :value="phone"
          label="手机号"
          placeholder="请输入手机号"
          error-message="手机号格式错误"
          :border="false"
        />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        高度自适应
      </div>
      <van-cell-group>
        <van-field
          :value="message"
          label="留言"
          type="textarea"
          placeholder="请输入留言"
          rows="2"
          autosize
          :border="false"
          input-class="text-area"
        />
      </van-cell-group>

      <div class="fsp16 fc-grey ">
        插入按钮
      </div>
      <van-cell-group>
        <van-field
          :value="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          use-button-slot
          :border="false"
        >
          <van-button
            slot="button"
            size="small"
            type="primary"
            custom-class="button"
          >发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </div>

    <div class="info">
      <div class="fsp16 fc-grey">API 说明</div>
      <div class="fsp14 fc-grey">Field API</div>
      <apiTable :tabledata="table_api_Field"></apiTable>

      <div class="fsp14 fc-grey">Field Event</div>
      <apiTable :tabledata="table_event_Field"></apiTable>

      <div class="fsp14 fc-grey">Slot</div>
      <apiTable :tabledata="table_Slot_Field"></apiTable>

      <div class="fsp14 fc-grey">外部样式类</div>
      <apiTable :tabledata="table_class_Field"></apiTable>

    </div>
  </div>
</template>
<script>
import apiTable from "@/components/api_data_table";
import apiData from "./api_data";
export default {
  data() {
    return {
      title: "",
      sms: "",
      value: "",
      password: "",
      username: "",
      username2: "",
      message: "",
      phone: "1365577",
      table_api_Field: apiData.api_Field,
      table_event_Field: apiData.event_Field,
      table_event_Field: apiData.event_Field,
      table_Slot_Field: apiData.slot_Field,
      table_class_Field: apiData.class_Field
    };
  },
  // 使用的 vue 组件
  components: {
    apiTable
  },
  // 页面中的方法
  methods: {
    onClickIcon() {
      wx.showToast({
        icon: "none",
        title: "点击图标"
      });
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
.container {
}
</style>
