<template>
  <div
    class="userinfo-card"
    :style="bgImg?'background:url('+bgImg+');':''"
  >
    <block >
      <img
        class="head-img"
        :src="userData.avatarUrl?userData.avatarUrl:avatarUrl"
        @click="tapheadimg"
      >
    </block>
    <div class="info-box-1">
      <div class="user-name fsp18 fc-black line-clamp_2">{{userData.isgetinfo?(userData.nickName?userData.nickName:'游客'):"登录中..."}}
        <span
          v-if="userData.realName"
          class="user-name fsp12 fc-semi"
        >
          ({{userData.realName}})
        </span>
      </div>
      <div class="user-num fs12 fc-grey">编号:{{userData.userNo}}</div>
      <div
        v-if="userData.coach"
        class="user-num fs12 fc-grey"
      >教练:{{userData.coach.name}}</div>
    </div>

    <div
      class="info-box-2"
      v-if="accountData.length>0"
    >
      <block
        v-for="(item, index) in accountData"
        :key="index"
      >
        <div
          v-if="index>0"
          class="border"
        ></div>
        <van-tabbar-item @click="golink(item.url)">
          <div
            slot="icon"
            class="fsp20 fc-black"
          >
            {{item.num}}
          </div>
          <span class="icon_name line-clamp_1">{{item.name}}</span>
        </van-tabbar-item>
      </block>
    </div>
  </div>
</template>

<script>
import config from '@/config.js'
import { golink } from '@/utils/tools'
export default {
  data () {
    return {
      avatarUrl: config.defaultData.headerImg
    }
  },
  props: {
    userData: {
      type: Object,
      default: {
      }
    },
    // 账户统计信息
    accountData: {
      type: Array,
      default: []
    },
    bgImg: {
      type: String
    }
  },
  methods: {
    golink,
    tapheadimg: function () {
      this.$emit('tapHeaderImg')
    }
  }
}
</script>

<style lang="scss">
.userinfo-card {
  position: relative;
  margin: 10px auto 10px auto;
  width: 340px;
  box-shadow: 0 0 10px #999;
  border-radius: 12px;
  background-color: #fff;
  .head-img {
    margin: 20px 0 0 20px;
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
  .info-box-1 {
    position: absolute;
    top: 20px;
    left: 120px;
    .user-num {
      margin-top: 5px;
    }
  }
  .info-box-2 {
    min-height: 80px;
    display: flex;
    .border {
      border-left: 1px solid #ddd;
      margin-top: 20px;
      height: 40px;
    }
  }
}
</style>
