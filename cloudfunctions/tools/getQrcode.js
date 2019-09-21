
const cloud = require('wx-server-sdk')
const { upLoadFile } = require('./uploadfile.js')
cloud.init()

/**
 * 获取二维码
 * @param {string} scene 场景值
 * @param {string} page 页面路径
 * @param {string} fileName 文件名
 * @param {number} width 二维码的宽度 单位 px，最小 280px，最大 1280px
 * @param {boolean} auto_color 自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调，默认 false
 * @param {Object} line_color auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} （默认：{"r":0,"g":0,"b":0}） 十进制表示
 * @param {boolean} is_hyaline 是否需要透明底色，为 true 时，生成透明底色的小程序
 */
const getUnlimited = async ({ scene = '', page = 'pages/home/main', fileName, width = 280, auto_color = false, is_hyaline = false, line_color = { 'r': 0, 'g': 0, 'b': 0 } }) => {
  try {
    const QrCode = await cloud.openapi.wxacode.getUnlimited({
      scene,
      page,
      width,
      auto_color,
      line_color,
      is_hyaline
    })
    let result = await upLoadFile({ fileName, fileContent: QrCode.buffer }).then(res => {
      return res
    })
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}

module.exports = {
  getUnlimited
}
