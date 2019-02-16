// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const options = {
    method: event.method ? event.method : 'GET',
    url: event.url,
    form: event.formdata,
    headers: event.headers
  };

  const resultValue = await rp(options).then(res => {
    return JSON.parse(res)
  })

  return resultValue
}
