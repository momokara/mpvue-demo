// 通过云函数获取openid 如果有 unionid 则获取 unionid
import config from '@/store/config.js'
import { consoleGroup } from '@/utils/tools'
/**
 * 获取openid
 */
export const getCloudConfig = () => {
  return new Promise((resolve, reject) => {
    if (wx.cloud) {
      wx.cloud.callFunction({
        // 云函数名称
        name: 'getConfig'
      }).then(res => {
        consoleGroup('获取配置成功', [res])
        let _data = res.result
        config.commit('updataByKey', _data)
        resolve(_data)
      }).catch(error => {
        console.error('获取配置错误:', error)
        reject(error)
      })
    } else {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      let err = '请使用 2.2.3 或以上的基础库以使用云能力'
      reject(err)
    }
  })
}

module.export = {
  getCloudConfig
}
