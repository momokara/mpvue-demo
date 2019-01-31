import COS from 'cos-wx-sdk-v5'
import Wxrequest from '../Wxrequest'

export const getAuthorization = () => {
  console.log("getAuthorization")
  let url = 'http://localhost:3000/file/getcossts';
  return Wxrequest.ajax(url, "GET", {}).then(res => {
    var data = res.data;
    var credentials = data.credentials;
    res = {
      TmpSecretId: credentials.tmpSecretId,
      TmpSecretKey: credentials.tmpSecretKey,
      XCosSecurityToken: credentials.sessionToken,
      ExpiredTime: data.expiredTime, // SDK 在 ExpiredTime 时间前，不会再次调用 getAuthorization
    }
    return res;
  }).catch(err => {
    console.log("getAuthorization_err!", err)
  })

}

export const getCosList = () => {
  // cos.getService(function (err, data) {
  //   console.log(err || data);
  // });
}
export const upLoadFile = (file) => {

  getAuthorization().then(res => {

    var cos = new COS({
      // path style 指正式请求时，Bucket 是在 path 里，这样用途相同园区多个 bucket 只需要配置一个园区域名
      // ForcePathStyle: true,
      SecretId: res.TmpSecretId,
      SecretKey: res.TmpSecretKey,
      XCosSecurityToken: res.XCosSecurityToken,
      ExpiredTime: res.ExpiredTime, // SDK 在 ExpiredTime 时间前，不会再次调用 getAuthorization
    });
    console.log("cos", cos)
    cos.postObject({
      Bucket: 'momokara-1251707696',
      Region: 'ap-guangzhou',
      Key: '1.png',
      FilePath: file.path,
      FileSize: file.size,
      TaskReady: function (taskId) {
        TaskId = taskId
      },
      onProgress: function (info) {
        console.log(JSON.stringify(info));
      }
    }, function (err, data) {
      console.log("postObject", err || data);
    });
  })

}


module.export = {
  getCosList,
  upLoadFile,
  getAuthorization
};
