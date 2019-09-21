// 获取文件名
const getFileName = async ({OPENID}) => {
  const date = await new Date()
  return `QrCodeimg_${OPENID}_${date.getTime()}.png`
}

module.exports = {
  getFileName
}
