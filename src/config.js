// 小程序的配置

const config = {

  // 登录重试次数
  loginRetryTimes: 3,
  // 登录重试延迟 单位ms
  loginRetryDelay: 500,
  
  // 访问基本地址
  host: "http://192.168.1.135:80",

  // 云函数配置
  // 云函数环境id-开发 
  dev_env: "zhijia-75abfd",
  // 云函数环境id-生产
  env: "zhijia-75abfd",

  // 登录保持时间 单位秒
  loginKeepTime: 7200,

  // 静态只读数据
  // 基准地址
  static_url_basic: "https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com",
  // 文件路径
  static_url_file: "/wechatfile/pagedata/wx7e28d99c40baf7a8",

  // 文件上传cos配置
  // 临时授权请求地址
  serverPrefix: 'https://www.momokara.cc/sts/',
  // 腾讯云cos上的bucket名字
  Bucket: 'hh-image-small-1254083899',
  // 腾讯云cos上的Region名字 
  Region: 'ap-guangzhou',

  // 一些默认信息
  defaultData: {
    headerImg: "https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/default/default_header_img.png"
  }

};

module.exports = config
