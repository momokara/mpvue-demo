<template>
  <div class="ad-cell-popUp"
       :class="[{'show-in-center':!useConfig.position}]">
    <block v-if="useConfig.isShow&&data.imgUrl">
      <van-popup :show="useConfig.isShow"
                 :z-index="useConfig.zIndex"
                 :overlay="useConfig.overlay"
                 :position="useConfig.position"
                 :duration="useConfig.duration"
                 :close-on-click-overlay="useConfig.closeOnClickOverlay"
                 @close="popUpToggle">
        <div class="popup-Box ta-c">
          <div class="img-box">
            <img @click="golink(data.url)"
                 class="popup-img"
                 :src="data.imgUrl"
                 mode="aspectFit">
            <div class="close-icon-box">
              <form @submit="popUpToggle"
                    :report-submit="true">
                <button formType="submit"
                        class='nobtnstyle'>
                  <van-icon class="close-icon"
                            size="40px"
                            :name="useConfig.closeIcon"
                            :color="useConfig.closeIconColor" />
                </button>
              </form>
            </div>

          </div>
          <slot></slot>
        </div>

      </van-popup>
    </block>

  </div>
</template>

<script>
import { golink } from '@/utils/tools'
import { uploadFormId } from '@/api/basic'
export default {
  props: {
    config: {
      type: Object,
      default: {}
    },
    data: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      defaultconfig: {
        // 是否显示弹窗
        isShow: true,
        // z-index 层级
        zIndex: 100,
        // 是否显示背景蒙层
        overlay: true,
        // 弹出位置可选值为 top bottom right left
        position: '',
        // 动画时长，单位为毫秒
        duration: 300,
        // 点击蒙层是否关闭 Popup
        closeOnClickOverlay: true,
        closeIcon: 'close',
        closeIconColor: '#fff'
      },
      useConfig: {}
    }
  },
  methods: {
    golink,
    popUpToggle (e) {
      console.log('popUpToggle', e.mp.detail)
      let formId = e.mp.detail.formId
      if (formId) {
        uploadFormId({ formId })
      }
      this.$emit('popUpToggle', { isShow: this.useConfig.isShow })
    },
    getUseConfig () {
      let _this = this
      _this.useConfig = Object.assign({}, _this.defaultconfig, _this.config)
    },
    jumpToUrl (e, url) {
      let formId = e.mp.detail.formId
      if (formId) {
        uploadFormId({ formId })
      }
      golink(url)
    }
  },
  created () {
    this.getUseConfig()
    console.log('popup this.data', this.data)
  }
}
</script>

<style lang="scss">
.ad-cell-popUp {
  .van-popup {
    background-color: transparent;
    .popup-Box {
      position: relative;
      .popup-img {
        width: 375px;
      }
      .close-icon-box {
        position: absolute;
        right: 10px;
        top: 0px;
      }
    }
    .show-in-center {
      margin: auto;
    }
  }
}
.show-in-center {
  .van-popup {
    left: 0;
    top: 15vh;
    width: 375px;
    .popup-Box {
      height: 70vh;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .nobtnstyle.img-btn {
        height: 70vh;
      }
      .img-box {
        position: relative;
        height: 70vh;
        .popup-img {
          height: 100%;
        }
      }
      .popup-img {
        width: 350px;
      }
    }
  }
}
</style>
