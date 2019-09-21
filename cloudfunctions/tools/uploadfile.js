
const cloud = require('wx-server-sdk')
cloud.init()

/**
 * 上传文件
 * @param {string} fileName 文件名
 * @param {file} fileContent 文件内容 file 或者 buffer
 */
const upLoadFile = async ({fileName, fileContent}) => {
  const file = await cloud.uploadFile({
    cloudPath: fileName,
    fileContent: fileContent
  })
  return file
}

module.exports = {
  upLoadFile
}
