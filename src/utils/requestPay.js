import { getPrePayInfo } from '@/api/api.mall'

/**
 *  @param {String} orderType 订单类型
 *  @param {String} orderId 订单Id
 */
export const requestPay = ({orderType, orderId}) => {
  return new Promise((resolve, reject) => {
    getPrePayInfo(orderType, orderId).then(res => {
      if (res.code !== 200) {
        wx.showToast({
          title: res.errMsg,
          icon: 'none'
        })
        return
      }
      let jsApi = res.result
      wx.requestPayment({
        appId: jsApi.appId,
        timeStamp: jsApi.timeStamp,
        nonceStr: jsApi.nonceStr,
        package: jsApi.packageValue,
        signType: jsApi.signType,
        paySign: jsApi.paySign,
        success: function (res) {
          wx.showToast({
            title: '支付成功'
          })
          resolve('success')
        },
        fail: function () {
          wx.showToast({
            title: '取消支付',
            icon: 'none'
          })
          resolve('fail')
        }
      })
    })
  })
}

module.export = {
  requestPay
}
