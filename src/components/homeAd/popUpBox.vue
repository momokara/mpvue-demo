<template>
  <div class="ad-cell-popUps">

    <block v-if="isShowAdPopup">
      <block v-if="!isShowMini">
        <popUp :data="showData[actIndx]"
               :config="showConfig"
               @popUpToggle="popUpToggle">
        </popUp>
      </block>
      <block v-else>
        <form @submit="showPop"
              :report-submit="true">
          <button v-if="showMiniIcon"
                  class="mini-box nobtnstyle"
                  formType="submit">
            <van-icon class="close-icon"
                      size="30px"
                      :name="popupIcon" />
          </button>
        </form>
      </block>
    </block>
  </div>
</template>

<script>
import popUp from '@/components/homeAd/popUp'
import cloudConfig from '@/store/cloudConfig.js'
import cache from '@/store/cache.js'
import {
  checkIsShowPopup,
  uploadFormId,
  checkPopupisGetSituation,
  getPopupInfo
} from '@/api/basic'

import { getwxLocation } from '@/api/dataTools'
import { golink, getPageData } from '@/utils/tools'
export default {
  props: {
    config: {
      type: Object,
      default: {}
    },
    data: {
      type: Object,
      default: {}
    },
    showMiniIcon: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      useConfig: {},
      actIndx: 0,
      isShowMini: false,
      isShowAdPopup: false,
      componentConfig: {},
      componentData: {}
    }
  },
  components: {
    popUp
  },
  computed: {
    popupIcon () {
      return cloudConfig.state.defaultData.popupIcon
    },
    showConfig () {
      return Object.assign({}, this.config, this.componentConfig)
    },
    showData () {
      return this.componentData || this.data
    }
  },

  methods: {
    golink,
    showPop (e) {
      console.log('showPop', e.mp.detail)
      let formId = e.mp.detail.formId
      if (formId) {
        uploadFormId({ formId })
      }
      this.config.isShow = true
      this.isShowMini = false
      this.actIndx = 0
    },
    popUpToggle (e) {
      let _this = this
      console.log('popUpClose', e, _this.actIndx, _this.showData.length)
      // 依次弹出
      if (_this.actIndx + 1 < _this.showData.length) {
        _this.actIndx++
      } else {
        _this.actIndx++
        _this.config.isShow = false
        _this.isShowMini = true
      }
      console.log(_this.config.isShow)
    },
    checkIsShow () {
      let _this = this
      checkIsShowPopup().then(res => {
        console.log('checkIsShowPopup', res)
        _this.isShowAdPopup = res
      })
    },
    subFormId (e) {
      console.log('subFormId', e)
    },
    // 检测是否需要地址 获取信息
    checkIsNeedLocation () {
      let _this = this
      let pageData = getPageData()
      checkPopupisGetSituation(pageData).then(res => {
        if (res.isGetSituation) {
          getwxLocation({ isModel: true })
            .then(res => {
              console.log('获取到了地理信息', cache.state)
              _this.getComponentsData(pageData)
            })
            .catch(err => {
              if (err) {
                wx.showModal({
                  title: '获取地理信息失败！',
                  content: '为了给您更好的体验,请允许小程序获取您的地理位置。',
                  success (res) {
                    if (res.confirm) {
                      console.log('用户点击确定')
                      wx.openSetting()
                    } else if (res.cancel) {
                      console.log('用户点击取消')
                    }
                  }
                })
              }
            })
        } else {
          _this.getComponentsData(pageData)
        }
      })
    },
    // 获取弹窗信息
    getComponentsData (data) {
      let _this = this
      _this.resetData()
      getPopupInfo(data).then(res => {
        _this.isShowAdPopup = true
        _this.isShowMini = false
        _this.componentConfig = res.config || {}
        _this.componentData = res.data || []
      })
    },
    resetData () {
      this.useConfig = {}
      this.actIndx = 0
      this.componentData = []
      this.componentConfig = {}
      this.isShowAdPopup = false
      this.isShowMini = false
    }
  },
  created () {
    this.isShowMini = !this.config.isShow
    // this.checkIsShow()
    this.checkIsNeedLocation()
  }
}
</script>

<style lang="scss">
.ad-cell-popUps{
  position: relative;
  width: 375px;
}
.mini-box {
  position: fixed;
  right: 0px;
  top: 47vh;
  padding: 0;
  width: 30px;
  height: 40px;
  z-index: 3;
}
</style>
