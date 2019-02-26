<template>
  <div class="userinfo-card">
    <block v-if="userInfo.userInfo">
      <img
        class="head-img"
        :src="userInfo.userInfo.avatarUrl?userInfo.userInfo.avatarUrl:defaultData.headerImg"
        @click="tapheadimg()"
      >
    </block>
    <div class="info-box-1 ta-c">
      <div class="user-name fsp14 fc-semi">{{userInfo.openid?userInfo.userInfo.nickName:"登陆中..."}}
        <span v-if="userInfo.realName">
          ({{userInfo.realName}})
        </span>
      </div>
      <div class="user-num fs12 fc-grey">帐号编号:{{userInfo.userNo}}</div>
    </div>

    <div class="info-box-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import config from "@/config.js";
export default {
  data() {
    return {
      // 默认信息
      defaultData: config.defaultData
    };
  },
  props: ["userInfo"],
  methods: {
    tapheadimg: function() {
      this.$emit("tapHeaderImg");
    }
  }
};
</script>

<style lang="scss">
.userinfo-card {
  position: relative;
  margin: 59px auto 10px auto;
  width: 340px;
  box-shadow: 0 0 10px #999;
  border-radius: 12px;
  .head-img {
    position: absolute;
    width: 94px;
    height: 94px;
    border-radius: 50%;
    top: -47px;
    left: 50%;
    margin-left: -47px;
    background-color: #fff;
  }
  .user-name{
    height: 20px;
  }
  .info-box-1 {
    padding-top: 50px;
  }
  .info-box-2 {
    min-height: 150px;
  }
}
</style>
