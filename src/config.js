/**
 * 小程序配置文件
 */

var host = "tst.jiapeiyun.cn"
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
      "oss_common_url": "http://common.huibaoming.cn",
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
    "menu_list": [{
        id: 'login',
        icon: 'form',
        name: '我是学员',
        open: true,
        pages: [{
            name: '我的余额',
            key: 'user_finance',
            value: 'money',
            is_phone: false,
            img_src: '../../../../src/images/consume.png',
            app_module_action_param: '../../../../finance/finance/userMoney/index/index?money_id=4&deal_id=2'
          },
          {
            name: '我的奖金',
            key: 'user_finance',
            value: 'gold',
            is_phone: false,
            img_src: '../../../../src/images/income.png',
            app_module_action_param: '../../../../finance/finance/userMoney/index/index?money_id=2&deal_id=12'
          },
          {
            name: '我的积分',
            key: 'user_finance',
            value: 'score',
            is_phone: false,
            img_src: '../../../../src/images/income.png',
            app_module_action_param: '../../../../finance/finance/userMoney/index/index?money_id=5'
          },
          {
            name: '缴费通知',
            key: 'user_finance',
            value: 'notice',
            is_phone: false,
            img_src: '../../../../src/images/income.png',
            app_module_action_param: '../../../../order_inchange/order_inchange/haivitDealOrder/index/index'
          }
        ]
      },
      {
        id: 'login',
        icon: 'form',
        name: '我是学员',
        open: true,
        pages: [{
            name: '邀请好友',
            is_phone: false,
            img_src: '../../../../src/images/invite.png',
            app_module_action_param: '../../../../weixin/weixin/userinvite/list/list'
          },
          {
            name: '我的好友',
            is_phone: false,
            key: 'relation',
            value: 'bound_p1_num',
            img_src: '../../../../src/images/team.png',
            app_module_action_param: '../../../../weixin/weixin/userRelation/parent/parent'
          },
          {
            name: '好友订单',
            is_phone: false,
            img_src: '../../../../src/images/npay_ok.png',
            app_module_action_param: '../../../../weixin/weixin/userRelation/parent/parent?index=1'
          }
        ]
      },
      {
        id: 'study',
        icon: 'form',
        name: '我是学员',
        open: true,
        pages: [{
            name: '活动订单',
            is_phone: false,
            img_src: '../../../../src/images/pic_waller.png',
            app_module_action_param: '../../../../11000/11000/haivitDealOrder/index/index'
          },
          {
            name: '商城订单',
            is_phone: false,
            img_src: '../../../../src/images/pic_waller.png',
            app_module_action_param: '../../../../deal24/deal24/haivitDealOrder/index/index'
          },
          {
            name: '拼团订单',
            is_phone: false,
            img_src: '../../../../src/images/pic_waller.png',
            app_module_action_param: '../../../../pintuan/deal24/haivitDealOrder/index/index'
          },
          {
            name: '砍价订单',
            is_phone: false,
            img_src: '../../../../src/images/pic_waller.png',
            app_module_action_param: '../../../../bargain/deal24/haivitDealOrder/index/index'
          }
        ]
      },
      {
        id: 'finance',
        icon: 'form',
        name: '系统服务',
        open: false,
        pages: [{
            name: '常见问题',
            is_phone: false,
            img_src: '../../../../src/images/pic_ask.png',
            app_module_action_param: '../../../../weixin/weixin/question/question/question'
          },
          {
            name: '投诉建议',
            is_phone: false,
            img_src: '../../../../src/images/pic_ask.png',
            app_module_action_param: '../../../../weixin/weixin/suggestion/suggestion/suggestion'
          }
        ]
      }
    ],
    "menu_list2": [{
        id: 'login',
        icon: 'form',
        name: '我是学员',
        open: true,
        pages: [{
            name: '我的余额',
            key: 'user_finance',
            value: 'money',
            is_phone: false,
            img_src: '../../../../src/images/consume.png',
            app_module_action_param: '../../../../finance/finance/userMoney/index/index?money_id=4&deal_id=2'
          },
          {
            name: '我的奖金',
            key: 'user_finance',
            value: 'gold',
            is_phone: false,
            img_src: '../../../../src/images/income.png',
            app_module_action_param: '../../../../finance/finance/userMoney/index/index?money_id=2&deal_id=12'
          },
          {
            name: '我的积分',
            key: 'user_finance',
            value: 'score',
            is_phone: false,
            img_src: '../../../../src/images/income.png',
            app_module_action_param: '../../../../finance/finance/userMoney/index/index?money_id=5'
          }
        ]
      },
      {
        id: 'reservation',
        icon: 'form',
        name: '我是学员',
        open: true,
        pages: [{
            name: '传统学员',
            key: 'overview',
            value: 'relevance',
            is_phone: false,
            img_src: '../../../../src/images/student.png',
            app_module_action_param: '../../../../reservation/teacher/order/relevance/relevance'
          },
          {
            name: '传统预约',
            key: 'overview',
            value: 'reservation',
            is_phone: false,
            img_src: '../../../../src/images/reservation.png',
            app_module_action_param: '../../../../reservation/teacher/order/reservation/reservation'
          },
          {
            name: '传统日程',
            key: 'overview',
            value: 'attribute',
            is_phone: false,
            img_src: '../../../../src/images/attribute.png',
            app_module_action_param: '../../../../reservation/teacher/dealDetail/attribute/attribute'
          }
        ]
      },
      {
        id: 'reservationpay',
        icon: 'form',
        name: '我是学员',
        open: true,
        pages: [{
            name: '计时学员',
            key: 'overview',
            value: 'relevancepay',
            is_phone: false,
            img_src: '../../../../src/images/student.png',
            app_module_action_param: '../../../../reservationpay/teacher/order/relevance/relevance'
          },
          {
            name: '计时预约',
            key: 'overview',
            value: 'reservationpay',
            is_phone: false,
            img_src: '../../../../src/images/reservation.png',
            app_module_action_param: '../../../../reservationpay/teacher/order/reservation/reservation'
          },
          {
            name: '计时日程',
            key: 'overview',
            value: 'attribute',
            is_phone: false,
            img_src: '../../../../src/images/attribute.png',
            app_module_action_param: '../../../../reservationpay/teacher/dealDetail/attribute/attribute'
          }
        ]
      },
      {
        id: 'finance',
        icon: 'form',
        name: '系统服务',
        open: false,
        pages: [{
            name: '我的资料',
            is_phone: false,
            img_src: '../../../../src/images/dealDetail.png',
            app_module_action_param: '../../../../reservation/teacher/dealDetail/dealDetail/dealDetail'
          },
          {
            name: '我的车辆',
            is_phone: false,
            img_src: '../../../../src/images/car.png',
            app_module_action_param: '../../../../ya_manage/car/car/car/car'
          },
          {
            name: '我的油卡',
            is_phone: false,
            img_src: '../../../../src/images/oil.png',
            app_module_action_param: '../../../../ya_manage/oil/card/card/card'
          }
        ]
      },
      {
        id: 'login',
        icon: 'form',
        name: '我是学员',
        open: true,
        pages: [{
            name: '邀请好友',
            is_phone: false,
            img_src: '../../../../src/images/invite.png',
            app_module_action_param: '../../../../weixin/weixin/userinvite/list/list'
          },
          {
            name: '我的好友',
            key: 'relation',
            value: 'bound_p1_num',
            is_phone: false,
            img_src: '../../../../src/images/team.png',
            app_module_action_param: '../../../../weixin/weixin/userRelation/parent/parent'
          },
          {
            name: '好友订单',
            is_phone: false,
            img_src: '../../../../src/images/npay_ok.png',
            app_module_action_param: '../../../../weixin/weixin/userRelation/parent/parent?index=1'
          },
          {
            name: '商城订单',
            is_phone: false,
            img_src: '../../../../src/images/pic_waller.png',
            app_module_action_param: '../../../../deal24/deal24/haivitDealOrder/index/index'
          },
          {
            name: '预约评价',
            is_phone: false,
            img_src: '../../../../src/images/estimate.png',
            app_module_action_param: '../../../../estimate/teacher/estimateList/estimateList/estimateList?index=1'
          }
        ]
      },
      {
        id: 'finance',
        icon: 'form',
        name: '系统服务',
        open: false,
        pages: [{
            name: '常见问题',
            is_phone: false,
            img_src: '../../../../src/images/question.png',
            app_module_action_param: '../../../../weixin/weixin/question/question/question'
          },
          {
            name: '意见建议',
            is_phone: false,
            img_src: '../../../../src/images/pic_ask.png',
            app_module_action_param: '../../../../weixin/weixin/suggestion/suggestion/suggestion'
          }
        ]
      }
    ],
    "menu_1": [{
        "selected_icon": "wap/images/skin/red/home1.png",
        "no_selected_icon": "wap/images/show/home.png",
        "app_module_action_param": "/page/deal292/haivitDeal/index/index",
        "name": " 报名学车"
      },
      {
        "selected_icon": "wap/images/skin/red/car1.png",
        "no_selected_icon": "wap/images/show/car.png",
        "app_module_action_param": "/page/subject/index/index/index",
        "name": "学车考试"
      },
      {
        "app_module_action_param": "/page/deal292/haivitDeal/dealList2/dealList",
        "no_selected_icon": "wap/images/show/market.png",
        "selected_icon": "wap/images/show/market1.png",
        "name": "积分商城"
      },
      {

        "no_selected_icon": "wap/images/show/user.png",
        "selected_icon": "wap/images/show/user1.png",
        "app_module_action_param": "/page/weixin/userCenter/index/index",
        "name": "我的账户"
      }
    ],
    "menu_5": [{
        "selected_icon": "wap/images/skin/red/user1.png",
        "no_selected_icon": "wap/images/show/user.png",
        "app_module_action_param": "/reservation/student/haivitDeal/dealList/dealList",
        "name": "选择教练"
      },
      {
        "selected_icon": "wap/images/skin/red/market1.png",
        "no_selected_icon": "wap/images/show/market.png",
        "app_module_action_param": "/reservation/student/haivitDealOrder/index/index",
        "name": "我的预约"
      }
    ],
    "menu_2": [{
        "selected_icon": "wap/images/show/icon/icon_hotel.png",
        "no_selected_icon": "wap/images/show/icon/icon_hotel.png",
        "app_module_action_param": "/page/finance/userMoney/index/index?money_id=4",
        "name": "绩点记录",
        "condition_value": 0
      },
      {
        "selected_icon": "wap/images/show/icon/icon_make an appointment.png",
        "no_selected_icon": "wap/images/show/icon/icon_make an appointment.png",
        "app_module_action_param": "/page/deal29/question/answerList/answerList",
        "name": "答题记录",
        "condition_value": 0
      },
      {
        "selected_icon": "wap/images/show/icon/icon_make an appointment.png",
        "no_selected_icon": "wap/images/show/icon/icon_make an appointment.png",
        "app_module_action_param": "/page/deal29/question/complain/complain",
        "name": "我要投诉",
        "condition_value": 0
      }
    ],
    "menu_3": [],
    "menu_4": {
      "user_info": {
        "selected_icon": "wap/images/header.jpg",
        "key_name": "user_info",
        "app_module_action_param": "weixin/index/index.do",
        "url": "",
        "name": "用户头像"
      },
      "marketing_top_pic": {
        "selected_icon": "1TB2fV5XmFXXXXb2XXXXXXXXXXXX_!!2092028435.jpg",
        "key_name": "marketing_top_pic",
        "app_module_action_param": "/",
        "url": "",
        "name": "营销顶部图"
      },
      "viewpoint_top_pic": {
        "selected_icon": "wap/images/banner1.jpg",
        "key_name": "viewpoint_top_pic",
        "app_module_action_param": "/",
        "url": "",
        "name": "惠学观点顶部图"
      }
    },
    "money_first_types": [{
        "action": "inchange",
        "id": 1,
        "name": "绩点A"
      },
      {
        "action": "withdraw",
        "id": 2,
        "name": "绩点A"
      },
      {
        "action": "transfer",
        "id": 3,
        "name": "绩点A"
      },
      {
        "action": "exchange",
        "id": 4,
        "name": "绩点A"
      }
    ],
    "money_payments": [

      {
        "id": 2,
        "key_name": 2,
        "ratio_money": 1.0,
        "class_name": "gold",
        "name": "我的奖金"
      },

      {
        "id": 4,
        "key_name": 4,
        "ratio_money": 1.0,
        "class_name": "money",
        "name": "我的余额"
      },

      {
        "id": 5,
        "key_name": 5,
        "ratio_money": 1.0,
        "class_name": "score",
        "name": "我的积分"
      },

    ],
    "money_deals": {

    },
    "first_types": [{
        "action": "inchange",
        "id": 1,
        "name": "绩点A"
      },
      {
        "action": "withdraw",
        "id": 2,
        "name": "绩点A"
      },
      {
        "action": "transfer",
        "id": 3,
        "name": "绩点A"
      },
      {
        "action": "exchange",
        "id": 4,
        "name": "绩点A"
      },
      {
        "action": "consume",
        "id": 5,
        "name": "消费"
      },
      {
        "action": "income",
        "id": 6,
        "name": "奖励"
      },
      {
        "action": "drawback",
        "id": 7,
        "name": "退款"
      },
      {
        "action": "packet",
        "id": 8,
        "name": "绩点A"
      },
      {
        "action": "admin",
        "id": 9,
        "name": "管理员"
      }
    ],
    "payments": [

    ],
    "request_suffix": ".do",
    "common_param": "is_json=3"
  }
};

module.exports = config
