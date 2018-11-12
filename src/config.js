/**
 * 小程序配置文件
 */

var host = "tst.huibaoming.com"
// host = "tst.huibaoming.com"
var config = {

  // 下面的地址配合云端 Server 工作
  host,

  // 登录地址，用于建立会话
  loginUrl: `https://${host}/login`,

  // 测试的请求地址，用于测试会话
  requestUrl: `https://${host}/testRequest`,

  // 用code换取openId
  openIdUrl: `https://${host}/openid`,

  // 测试的信道服务接口
  tunnelUrl: `https://${host}/tunnel`,

  // 生成支付订单的接口
  paymentUrl: `https://${host}/payment`,

  // 发送模板消息接口
  templateMessageUrl: `https://${host}/templateMessage`,

  // 上传文件接口
  uploadFileUrl: `https://${host}/upload`,

  // 下载示例图片接口
  downloadExampleUrl: `https://${host}/static/weapp.jpg`,
  domain_url: `https://${host}`,
  //小程序的key的后缀,天天撒币小程序对应:_ttsb
  small_key_suffix: "",
  //多小程序,多公众号的端标记 /1,/2,...
  extra_folder_name: "/17",
  //小程序支付方式,默认值是713,如果同一个库使用多个小程序,则在不同小程序里面配对应的支付方式,支付方式不一样,代表着前进入不同的小程序
  //天天撒币小程序支付方式对应:714
  payment_id: "713",
  //商户ID
  supplier_id: '47',
  //腾讯地图apiKEY
  qqmap_key: 'ZMBBZ-3HQKP-IU2DW-VHJHP-EYM25-LHFXP',

  json: {
    "system_code": "weixin_haivit",
    "domain_url": "../../../..",
    "project_url": "../../..",
    "module": "../..",
    "action": "..",
    "json_config": {
      "system_weixin_page_size": 10,
      "oss_common_url": "https://tst.huibaoming.com",
      "project_name": "惠学科技",
      "project_name_common": "common",
      "project_name_admins": "admins",
      "project_name_adminwx": "adminwx",
      "project_name_ocs": "ocs",
      "project_name_oss": "oss",
      "link": "http://www.huibaoming.com",
      "project_name_payment": "payment",
      "kf_phone": "020-29862666",
      "is_show_footer_adv": "惠学科技",
      "oss_static_url": "http://static.huibaoming.cn/common_tw",
      "wap_info_withdraw_update": "1",
      "project_name_fx": "fx",
      "sms_product": "惠学科技",
      "project_name_login": "login",
      "project_name_weixin": "weixin",
      "system_code": "haivit",
      "project_name_finance": "finance",
      "footer_adv_url": "http://t.cn/RjrHpI0",
      "sms_domain_url": "http://sms.huibaoming.cn/sms/num/send.do",
      "project_name_express": "express",
      "oss_image_url": "http://image.huibaoming.cn",
      "system_footer_desc": "技术支持：惠课科技 020-29862999",
      "poster_url": "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket\u003d",
      "system_name": "惠学智能营销系统",
      "project_name_deal296": "deal296",
      "project_name_deal3": "deal3",
      "default_index_page_url": "weixin/userCenter/index.do",
      "domain_url": "http://qiu.mingkong.com",
      "project_url": "http://qiu.mingkong.com/weixin",
      "pre_url": "http://qiu.mingkong.com/weixin/userCenter/index.do",
      "pre_url_param": "http://qiu.mingkong.com/weixin/userCenter/index.do?is_json\u003d1",
      "folder_name": "wap",
      "module": "userCenter",
      "action": "index",
      "page_title": "惠学科技-会员中心"
    },
    "request_suffix": ".do",
    "common_param": "is_json=3"
  }
};

module.exports = config
