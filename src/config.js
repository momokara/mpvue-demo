// 小程序的配置

const config = {
  // 访问基本地址 第一个是 生产地址 第二个是开发地址
  host: (process.env.HOST ? process.env.HOST : (process.env.NODE_ENV === 'production' ? '生产host' : '开发host')) + '/模块',
  // 腾讯云相关配置
  cos: {
    // 静态只读数据
    // 基准地址
    static_url_basic: process.env.COS_URL ? process.env.COS_URL : 'COS目录',
    // 文件路径
    static_url_file: (process.env.COS_FILE ? process.env.COS_FILE : (process.env.NODE_ENV === 'production' ? '生产路径' : '开发路径')),

    // 文件上传cos配置
    // 临时授权请求地址 有https 头则 直接访问，没有则 使用host 地址
    serverPrefix: '/common_service/pubs/cos/getCosTempKeys',
    // serverPrefix: 'https://www.XXXX.cc/sts/',

    // 腾讯云cos上的bucket名字
    Bucket: 'hh-image-small-xxxxxx',
    // 腾讯云cos上的Region名字
    Region: 'ap-guangzhou'
  },

  // 一些默认信息
  defaultData: {
    footer: '',
    // 登录页图标
    loginPageIcon: 'https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/images/%E5%85%B3%E4%BA%8E%E7%B2%A4%E5%AE%89%403x.png',
    // 登录页提示信息
    loginPageTips: '请授权登录以获取更好的服务',
    // 登录页按钮文字
    loginPageButtionText: '授权登录',
    // 默认头像
    headerImg: 'https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/default/default_header_img.png',
    // 通知图标
    noticeIcon: 'https://hh-image-small-1254083899.cos.ap-guangzhou.myqcloud.com/wechatfile/images/%E5%85%AC%E5%91%8A.png'
  },
  // 登录保持时间 单位秒
  loginKeepTime: 7200,
  // 登录重试次数
  loginRetryTimes: 0,
  // 登录重试延迟 单位ms
  loginRetryDelay: 500,
  // 是否请求cos 0-(默认值) 请求cos静态数据地址 1-请求服务器接口
  isGetDataFormCos: 0,
  // 日志存储长度
  logL: 99,
  // 日志上报触发长度
  logUpL: 100,
  // 是否检显示用户手机授权弹窗
  isCheckPhone: true,
  // 导航条默认样式
  tabBarData: {
    barStyle: {
      color: '#7A7E83',
      selectedColor: '#6BB72D',
      backgroundColor: '#fff',
      borderStyle: 'black',
      fail: function (err) {
        console.error(err)
      }
    },
    list: [
      {
        'text': '首页',
        'iconPath': 'static/images/icon/home.png',
        'selectedIconPath': 'static/images/icon/home1.png'
      },
      {
        'iconPath': 'static/images/icon/desc.png',
        'selectedIconPath': 'static/images/icon/desc1.png',
        'text': '组件列表'
      }
    ]
  }
}

module.exports = config
