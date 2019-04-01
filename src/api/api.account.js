/* jshint esversion: 6 */
// 统一处理 页面请求
import {
  ajaxAll
} from '@/utils/Wxrequest'
import {
  getcommonheader
} from '@/api/api.js'
import config from '@/config.js'

/**
 * 获取 奖金、余额、积分 信息
 * @param {Object} data data.type 提现(奖金Reward、余额Balance、积分Points)
 * @return {Promise} 返回结果
 */
export const getAccountInfo = async (data) => {
  let commonheader = await getcommonheader()
  let url = `${config.host}/user_service/account/${data.type}`
  console.log('url:', url)
  return ajaxAll(url, 'POST', data, commonheader).then(res => {
    let resdata = res.result
    return resdata
  })
}
/**
 * 申请提现
 * @param {Object} data data.type 提现(奖金Reward、余额Balance、积分Points) data.num 提现金额
 * @return {Promise} 返回结果
 */
export const subWithdraw = async (data) => {
  let commonheader = await getcommonheader()
  let url = `${config.host}/user_service/withdraw/${data.type}`
  console.log('url:', url)
  return ajaxAll(url, 'POST', data, commonheader).then(res => {
    let resdata = res

    return resdata
  })
}

module.export = {
  getAccountInfo
}
