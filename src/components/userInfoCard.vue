<template>
  <div class="userinfo-card">
    <img
      class="head-img"
      :src="userInfo.userInfo?userInfo.userInfo.avatarUrl:''"
      @click="tapheadimg()"
    >
    <div class="info-box-1 ta-c">
      <div class="user-name fsp14 fc-semi">{{userInfo.user_name}}
        <span v-if="userInfo.real_name">
          ({{userInfo.real_name}})
        </span>
      </div>
      <div class="user-num fs12 fc-grey">帐号编号:{{userInfo.user_num}}</div>
    </div>

    <div class="info-box-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
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
  }
  .info-box-1 {
    padding-top: 50px;
  }
  .info-box-2 {
    min-height: 150px;
  }
}
</style>
