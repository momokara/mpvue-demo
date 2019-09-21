<script>
import { getUserInfoSer, uploadShareData, getScenedata } from '@/api/basic'
import {
  getConfig,
  checkIsForbidden,
  setbarStyle,
  reLogin,
  checkSessionKey
} from '@/api/dataTools'
import { consoleGroup, golink } from '@/utils/tools'
import basicInfo from '@/store/basicInfo.js'
import cloudConfig from '@/store/cloudConfig.js'
import cache from '@/store/cache.js'
import config from '@/config.js'

export default {
  created () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      // 云函数使用的环境
      wx.cloud.init({
        traceUser: true
      })
    }
    consoleGroup(
      `运行环境：${
        process.env.NODE_ENV === 'production' ? '生产环境' : '开发环境'
      }`,
      {
        NODE_ENV: process.env.NODE_ENV,
        host: cloudConfig.state.host,
        cos:
          cloudConfig.state.cos.static_url_basic +
          cloudConfig.state.cos.static_url_file,
        mpid: cloudConfig.state.mpid
      }
    )
    console.log('process.env', process.env)
  },
  // 初始化
  onLaunch (options) {
    if (options.query.shareUserNo) {
      basicInfo.commit('updataByKey', {
        shareUserNo: options.query.shareUserNo
      })
    }
  },
  // 当小程序启动，或从后台进入前台显示
  onShow (options) {
    // 更新小程序
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success (res) {
          if (res.confirm) {
            reLogin()
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })

    // 页面加载
    consoleGroup('启动参数 (onShow)：', [options])
    getConfig()
      .then(res => {
        consoleGroup('加载配置', [
          { mpid: cloudConfig.state.mpid },
          { 生效配置: cloudConfig.state },
          { 本地配置: config }
        ])
        // 处理导航条样式
        if (cloudConfig.state.tabBarData) {
          const { barStyle, list } = cloudConfig.state.tabBarData
          setbarStyle({ barStyle, list })
        }
        if (/dev/.test(cloudConfig.state.host)) {
          wx.showModal({
            title: '环境是测试地址',
            content: `当前环境
          | host:[${cloudConfig.state.host}]
          | cos:[${cloudConfig.state.cos.static_url_basic}${
  cloudConfig.state.cos.static_url_file
}]`,
            showCancel: false,
            success (res) {}
          })
        }
        if (cloudConfig.state.host) {
          console.log()
        }
      })
      .then(res => {
        // 从服务器获取用户信息
        getUserInfoSer().then(res => {
          // 检测是否禁用
          checkIsForbidden()

          consoleGroup('获取用户信息成功(getUserInfoSer):', [
            res,
            options.query
          ])
          // 获取路径参数
          if (options.query.shareUserNo) {
            basicInfo.commit('updataByKey', {
              shareUserNo: options.query.shareUserNo,
              isFromCode: false
            })
            cache.commit('saveShareUserNo', options.query.shareUserNo)
            try {
              let activityId = options.query.id ? options.query.id : 0
              uploadShareData({
                path: options.path,
                activityId: activityId,
                shareUserNo: options.query.shareUserNo || ''
              })
                .then(res => {
                  console.log('提交分享成功', res)
                })
                .catch(err => {
                  console.error(err)
                  wx.showModal({
                    title: `shareUserNo:${options.query.shareUserNo}`,
                    content: `activityId:${activityId}|接口返回:${JSON.stringify(
                      err
                    )}`,
                    success (res) {
                      if (res.confirm) {
                        console.log('用户点击确定')
                      } else if (res.cancel) {
                        console.log('用户点击取消')
                      }
                    }
                  })
                })
            } catch (error) {}
          }
          // 获取二维码 场景值 第一个是id 第二个是 shareUserNo
          if (options.query.scene) {
            let _scene = decodeURIComponent(options.query.scene).split(',')
            getScenedata({ id: _scene[0] })
              .then(res => {
                let { url, urlParam, shareUserNo, id } = res

                if (shareUserNo === 'undefined' || shareUserNo === 'null') {
                  shareUserNo = ''
                }
                if (shareUserNo) {
                  basicInfo.commit('updataByKey', {
                    shareUserNo: shareUserNo,
                    isFromCode: true
                  })
                  cache.commit('saveShareUserNo', shareUserNo)
                  let path = url.split('?')
                  path = path[0] || options.path
                  let shareData = {
                    path,
                    activityId: id,
                    shareUserNo: shareUserNo
                  }
                  uploadShareData(shareData).then(res => {
                    console.log('提交二维码分享成功', { shareData, res })
                  })
                }
                if (url) {
                  let _link
                  if (url) {
                    _link = url
                  } else if (urlParam) {
                    _link = `${options.path}?${urlParam}`
                  }
                  console.log('页面执行跳转:', _link, '场景值:', _scene)
                  golink(_link, false, true)
                }
              })
              .catch(res => {
                console.error('获取场景data失败！')
                if (_scene[0]) {
                  let _link = `${options.path}?id=${_scene[0]}`
                  console.log('页面场景值', _scene, _link)
                  golink(_link, false, true)
                }

                if (_scene[1]) {
                  basicInfo.commit('updataByKey', {
                    shareUserNo: _scene[1] || '',
                    isFromCode: true
                  })
                  cache.commit('saveShareUserNo', _scene[1])
                  let shareData = {
                    path: options.path,
                    activityId: _scene[0],
                    shareUserNo: _scene[1] || ''
                  }
                  uploadShareData(shareData).then(res => {
                    console.log('提交二维码分享成功', { shareData, res })
                  })
                }
              })
          }
          try {
            checkSessionKey()
          } catch (error) {}
        })
      })
  },
  // 当小程序从前台进入后台
  onHide () {
    console.log('app on hide!')
  },
  onError (err) {
    console.error('小程序错误:', err, new Date())
  }
}
</script>

<style lang="scss">
@import '@/../static/index.wxss';
/* 微信设计规范中的字体大小 */
$fs-40: 40pt;
$fs-20: 20pt;
$fs-18: 18pt;
$fs-17: 17pt;
$fs-14: 14pt;
$fs-13: 13pt;
$fs-11: 11pt;
$fs-11: 11pt;

$fsp-32: 32px; /*px*/
$fsp-24: 24px; /*px*/
$fsp-22: 22px; /*px*/
$fsp-20: 20px; /*px*/
$fsp-18: 18px; /*px*/
$fsp-16: 16px; /*px*/
$fsp-14: 14px; /*px*/
$fsp-12: 12px; /*px*/
$fsp-10: 10px; /*px*/
// 常用颜色
$fc-black: #333;
$fc-semi: #8c959f;
$fc-grey: #888;
$fc-light: #f0f0f0;
$fc-blue: #576b95;
$fc-green: #6bb72d;
$fc-igreen: #3ac569;
$fc-bgreen: #1dd1b4;
$fc-red: #f66e6e;
$fc-warning: #f5a623;
$fc-yello: #ffdf34;
$fc-hred: #e61f19;
$fc-torange: #ff5331;
$fc-money: #e61f19;
$fc-green-old: #3ac569;
$fc-nogreen: #07c160;
$fc-dgrey: #999;
$fc-sgrey: #f2f2f2;
$fc-bgrey: #b2b2b2;

// 背景色
$fc-bgc: #f0f4f6;
// 常用透明度
$opacity-normal: 100%;
$opacity-press: 20%;
$opacity-disable: 10%;
// 基本字体大小
// 基于pt
.fs40 {
  font-size: $fs-40;
}
.fs20 {
  font-size: $fs-20;
}
.fs18 {
  font-size: $fs-18;
}
.fs17 {
  font-size: $fs-17;
}
.fs14 {
  font-size: $fs-14;
}
.fs13 {
  font-size: $fs-13;
}
// 基于px
.fsp32 {
  font-size: $fsp-32; /*px*/
}
.fsp24 {
  font-size: $fsp-24; /*px*/
}
.fsp22 {
  font-size: $fsp-22; /*px*/
}
.fsp20 {
  font-size: $fsp-20; /*px*/
}
.fsp18 {
  font-size: $fsp-18; /*px*/
}
.fsp16 {
  font-size: $fsp-16; /*px*/
}
.fsp14 {
  font-size: $fsp-14; /*px*/
}
.fs12,
.fsp12 {
  font-size: $fsp-12; /*px*/
}
.fs10,
.fsp10 {
  font-size: $fsp-10; /*px*/
}
.fc-black {
  color: $fc-black;
}
.fc-fff {
  color: #fff;
}
.fc-semi {
  color: $fc-semi;
}
.fc-grey {
  color: $fc-grey;
}
.fc-light {
  color: $fc-light;
}
.fc-blue {
  color: $fc-blue;
}
.fc-green {
  color: $fc-green;
}
.fc-igreen {
  color: $fc-igreen;
}
.fc-bgreen {
  color: $fc-bgreen;
}
.fc-green-old {
  color: $fc-green-old;
}
.fc-warning {
  color: $fc-warning;
}
.fc-red {
  color: $fc-red;
}
.fc-hred {
  color: $fc-hred;
}
.fc-money {
  color: $fc-money;
}
.fc-yello {
  color: $fc-yello;
}
.fc-torange {
  color: $fc-torange;
}
.fc-bgc {
  color: $fc-bgc;
}
.fc-FF5633 {
  color: #ff5633;
}
.fc-dgrey {
  color: $fc-dgrey;
}
.fc-sgrey {
  color: $fc-sgrey;
}
.fc-bgrey {
  color: $fc-bgrey;
}
.bg-dgrey {
  background: $fc-dgrey;
}
.bg-green {
  background: $fc-green;
}
.bg-igreen {
  background: $fc-igreen;
}
.bg-fff {
  background: #fff;
}
.bg-sgrey {
  background: $fc-sgrey;
}
.bg-hred {
  background: $fc-hred;
}
.bg-FF5633 {
  background: #ff5633;
}
.bg-torange {
  background: $fc-torange;
}
.confirm-btn {
  background: $fc-igreen;
  color: #fff;
}
.bg-bgreen {
  background: $fc-bgreen;
}
.bc-nogreen {
  background: $fc-nogreen;
}
.nobtnstyle {
  // position: static;
  line-height: normal;
  background-color: transparent;
}
.button-hover {
  opacity: 0.7;
}
.fw-bold {
  font-weight: bold;
}
.fw-bolder {
  font-weight: bolder;
}

.title {
  padding: 15px;
  font-size: $fs-17;
}
.ta-c {
  text-align: center;
}
.line-c {
  background-color: #f2f2f2;
}
.ta-r {
  text-align: right;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
@mixin line-clamp($lineNumber) {
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $lineNumber;
  -webkit-box-orient: vertical;
}
.line-clamp_1 {
  @include line-clamp(1);
}
.line-clamp_2 {
  @include line-clamp(2);
}
.line-clamp_3 {
  @include line-clamp(3);
}
.line-clamp_4 {
  @include line-clamp(4);
}
.line-clamp_5 {
  @include line-clamp(5);
}
.scroll-x {
  width: 100%;
  white-space: nowrap;
}
.demo-relative-box {
  position: relative;
}
.delete-line {
  text-decoration: line-through;
}
page {
  background-color: $fc-bgc;
}
</style>

