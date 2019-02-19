// 上传文件到腾讯COS
import COS from 'cos-wx-sdk-v5'
import config from '@/config.js'

// 获取临时授权签名
const getAuthorization = function (options, callback) {
  wx.request({
    method: 'GET',
    url: config.serverPrefix, // 服务端签名地址，参考 server 目录下的两个签名例子
    dataType: 'json',
    success: function (result) {
      var data = result.data;
      var credentials = data.credentials;
      callback({
        TmpSecretId: credentials.tmpSecretId,
        TmpSecretKey: credentials.tmpSecretKey,
        XCosSecurityToken: credentials.sessionToken,
        ExpiredTime: data.expiredTime, // SDK 在 ExpiredTime 时间前，不会再次调用 getAuthorization
      });
    }
  });
}

/**
 * 文件上传
 * @param {Object} file 
 * @param {String} name 文件名
 */
export const upLoadFile = (file, name) => {
  var cos = new COS({
    getAuthorization: getAuthorization
  });

  name = name ? name : "wechat_mp";
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  let arr_filename = file.path.split(".");
  const filetype = arr_filename[arr_filename.length - 1];
  let filename = `${name}_${date.getTime()}.${filetype}`;
  console.log("filename", filename, )
  return new Promise((resolve, reject) => {
    cos.postObject({
      Bucket: config.Bucket,
      Region: config.Region,
      Key: `wechatfile/${y}${m}${d}/${filename}`,
      FilePath: file.path,
      FileSize: file.size,
      // TaskReady: function (taskId) {
      //   console.log("TaskReady", taskId);
      // },
      // onProgress: function (progressData) {
      //   console.log(JSON.stringify(progressData));
      // }
    }, function (err, data) {
      if (err) {
        wx.wx.showToast({
          title: 'err',
          icon: 'none'
        });
        reject(err)
      } else {
        resolve(data)
      }
    });
  })
}

const cos = {};
cos.upLoadFile = upLoadFile;
export default cos;

module.export = {
  upLoadFile
};
