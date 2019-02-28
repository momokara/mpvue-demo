// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const options = {
    // 请求方式
    method: event.method ? event.method : 'GET',
    // 请求地址
    url: event.url,
    // post 的数据
    form: event.formdata,
    // 请求头
    headers: event.headers
  };
  // 发送请求
  const resultValue = await rp(options).then(res => {
    return JSON.parse(res)
  })

  return resultValue
}
