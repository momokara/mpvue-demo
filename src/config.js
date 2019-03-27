// 小程序的配置

const config = {

  // 登录重试次数
  loginRetryTimes: 0,
  // 登录重试延迟 单位ms
  loginRetryDelay: 500,

  // 访问基本地址 第一个是 生产地址 第二个是开发地址 (测试地址 ：http://139.199.74.34:3000/mock/19/xmb_zhijia_cloud)
  host: process.env.NODE_ENV === 'production' ? 'https://mptrymomo.momokara.cc/mock/19/xmb_zhijia_cloud' : 'http://139.199.74.34:3000/mock/19/xmb_zhijia_cloud',

  // 云函数配置
  // 云函数环境id- 第一个是生产 第二个是开发环境
  env: process.env.NODE_ENV === 'production' ? 'zhijia-worker-dcad94' : 'zhijia-75abfd',
  // 小程序id 小程序在后台的唯一标识
  mpid: 'wx7e28d99c40baf7a8',

  // 登录保持时间 单位秒
  loginKeepTime: 7200,

  // 静态只读数据
  // 基准地址
  static_url_basic: 'https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com',
  // 文件路径
  static_url_file: '/wechatfile/pagedata/',

  // 文件上传cos配置
  // 临时授权请求地址
  serverPrefix: 'https://www.momokara.cc/sts/',

  // 腾讯云cos上的bucket名字
  Bucket: 'hh-image-small-1254083899',
  // 腾讯云cos上的Region名字
  Region: 'ap-guangzhou',

  // 一些默认信息
  defaultData: {
    // 登录页图标
    loginPageIcon: 'https://cdn.jiapeiyun.cn/haivit/public/image/20181017162601_890/关于粤安@3x.png',
    // 登录页提示信息
    loginPageTips: '请授权登录以获取更好的服务',
    // 登录页按钮文字
    loginPageButtionText: '测试小程序-授权登录',
    // 默认头像
    headerImg: 'https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/default/default_header_img.png',
    icon: 'https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/default/default_icon.png',

    // 默认选中的驾照类型
    questionType: 'c1',
    questionTag: 'C1/C2/C3',
    questionClassName: '小车',
    qusetionSubject: 1

  }

}

module.exports = config
