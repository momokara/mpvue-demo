export const uploadFile = (file, filename) => {
  return wx.cloud.uploadFile({
    cloudPath: filename,
    filePath: file, // 文件路径
  }).then(res => {
    // get resource ID
    return getTempFileURL([res.fileID]);
  }).catch(error => {
    // handle error
  })
}

export const getTempFileURL = (files) => {
  return wx.cloud.getTempFileURL({
    fileList: files
  }).then(res => {
    // get temp file URL
    return res.fileList
  }).catch(error => {
    // handle error
  })
}
module.export = {
  uploadFile,
  getTempFileURL,
};
