<template>
  <div class="user-account-card">
    <div class="info-box">
      <img class="useravatarUrl"
           :src="userData.avatarUrl"
           alt="">
      <div class="info-box-left">
        <div class="name-box fsp18">
          {{userData.nickName}}
        </div>
        <div class="num-box fsp20">
          {{accountInfo.num}}
          <span class="num-name fsp14">{{numName[accountInfo.type]}}</span>
        </div>
      </div>
    </div>
    <div class="control-btn">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import config from '@/config.js'
import { golink } from '@/utils/tools'
export default {
  props: {
    userData: {
      type: Object,
      default: {
        avatarUrl: config.defaultData.headerImg
      }
    },
    accountInfo: {
      type: Object,
      default: {
        num: 0,
        type: 1
      }
    },
    numName: {
      type: Object,
      default: ['', '奖金', '余额', '积分']
    }
  },
  methods: {
    golink
  }
}
</script>

<style lang="scss">
.user-account-card {
  width: 350px;
  height: 205px;
  margin: 10px auto;
  box-shadow: 0 0 3px #333;
  border-radius: 8px;
  position: relative;
  .useravatarUrl {
    width: 94px;
    height: 94px;
    border-radius: 50%;
    margin: 20px 10px 10px 20px;
  }
  .info-box-left {
    width: 220px;
    margin-top: 20px;
    float: right;
    .num-box {
      line-height: 60px;
      width: 200px;
      .num-name {
        float: right;
        background-color: #3ac569;
        color: #fff;
        padding: 0 10px;
        margin-top: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 5px;
      }
    }
  }
}
</style>
