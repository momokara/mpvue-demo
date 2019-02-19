
/**
 * 上传文件到云函数存储空间
 * @param {Object} file 文件 wx.chooseImage 返回的文件列表的单个文件
 * @param {*} filename 文件名
 * @return {String} 文件访问地址 
 */
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

/**
 * 获取文件地址
 * @param {String} files 文件ID
 */
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

const cloudfile = {};
cloudfile.uploadFile = uploadFile;
cloudfile.getTempFileURL = getTempFileURL;
export default cloudfile;

module.export = {
  uploadFile,
  getTempFileURL,
};
