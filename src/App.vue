<script>
// import { onLaunchrequest, userAutoLogin } from "@/api/api";

export default {
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
    console.log("app created and cache logs by setStorageSync");
    // 设置缓存中的 app_phone？
    // onLaunchrequest({}, function(res) {
    //   if (res.err_code == -1) {
    //     wx.setStorageSync("app_phone", res.phone.content);
    //   }
    // });
  },
  onShow() {
    // userAutoLogin({}, function(userinfo) {
    //   console.log("userautoLogin", userinfo);
    // });
  }
};
</script>

<style>
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.title {
  padding: 15px;
}

.fz-17pt {
  font-size: 17pt;
}
.fz-15pt {
  font-size: 15pt;
}
.fz-14pt {
  font-size: 14pt;
}
.fz-13pt {
  font-size: 13pt;
}
.fz-11pt {
  font-size: 11pt;
}
.color-35 {
  color: #353535;
}
.color-888{
  color: #888
}
.ta-c{
  text-align:center;
}
</style>
