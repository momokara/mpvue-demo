<template>
  <div class="container">{{tip}}
    <v-button class='bottom' type='primary' open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="bindGetUserInfo($event)">
      授权登录
    </v-button>
    <v-button class='bottom' type='primary' open-type="getUserInfo" lang="zh_CN" @click="authorize ">
      授权登录
    </v-button>
  </div>
</template>

<script>
import Api from "@/api/api";
export default {
  data() {
    return {
      tip: "HelloKitty"
    };
  },

  components: {},

  methods: {
    bindGetUserInfo(e) {
      console.log(e);
    },
    authorize() {
      wx.getSetting({
        success(res) {
          console.log(res);
        },
        complete(res) {
          console.log(res);
        }
      });
    }
  },

  created() {}
};
</script>

<style scoped>
</style>
