var constants = require('./constants');
//cookie的所有键的数组
var COOKIE_KEY = 'weapp_cookie_' + constants.WX_SESSION_MAGIC_ID;
var COOKIE_KEY_VALUE_PREFIX='weapp_cookie_value_';

var Cookie = {
    //获取全部键
    get: function () {
        return wx.getStorageSync(COOKIE_KEY) || {};
    },
    //保存全部键
    set: function (key,value) {
        var all_cookie_key=wx.getStorageSync(COOKIE_KEY) || {};
        all_cookie_key[key]=key;
        wx.setStorageSync(COOKIE_KEY_VALUE_PREFIX+key, value);
        wx.setStorageSync(COOKIE_KEY, all_cookie_key);
    },

    getValue:function(key){
        wx.getStorageSync(COOKIE_KEY_VALUE_PREFIX+key) || {};
    },

    removeValue:function (key) {
        wx.removeStorageSync(COOKIE_KEY_VALUE_PREFIX+key);

        var all_cookie_key=wx.getStorageSync(COOKIE_KEY) || {};
        delete all_cookie_key[key];
        wx.setStorageSync(COOKIE_KEY, all_cookie_key);
    },
    saveCookie:function (cookie_str) {

        if(cookie_str!=undefined){
            var cookie_arr=cookie_str.split("kmy_ocs_token_");
            var all_cookie_key=wx.getStorageSync(COOKIE_KEY) || {};
            for(var i=0;i<cookie_arr.length;i++){
                //user="vUu67HaO5VsR1vQEDtjxVuUuZzQbQojD7cR73koWsMUWFm6x_Gb3dPv6yenlGJuK1VxuPstVGNHs97j4dOPOpPTSEI2yxtBz1p-89_qEzY4=";
                if(i>0){
                    var cookie=cookie_arr[i];

                    var cookie_one_arr=cookie.split(";");
                    var cookie_key_value="kmy_ocs_token_"+cookie_one_arr[0];
                    var  cookie_key_arr=cookie_key_value.split("=");
                    var cookie_key=cookie_key_arr[0];

                    all_cookie_key[cookie_key]=cookie_key;

                    wx.setStorageSync(COOKIE_KEY_VALUE_PREFIX+cookie_key, cookie_key_value);
                }
            }

            wx.setStorageSync(COOKIE_KEY, all_cookie_key);
        }
    },
    /**
     * 组装cookie
     * @returns {string}
     */
    getHeadCookie:function(){

        var  cookie_data={};
        var all_cookie_key=wx.getStorageSync(COOKIE_KEY) || {};

        for(var i in all_cookie_key){
            var key=all_cookie_key[i];
            var key_value=wx.getStorageSync(COOKIE_KEY_VALUE_PREFIX+all_cookie_key[i]);
            var value=key_value.substring(key.length+1);
            if(value.startsWith('"')){
                value=value.substring(1,value.length-1)
            }
            cookie_data[key]=value;
        }


        return cookie_data;
        //return 'kmy_ocs_token_user="Ha48DD20Otui7HG9crupp6Vw_7JUVq6hZ9_-XeApnh9F9KE-0zZy4eA3JjqQG1r-wq7KHUN0bA64JphEjdskYmz5b2eMjDho-Il3YoTZjPA="';
    },

    clear: function () {
        var all_cookie_key=wx.getStorageSync(COOKIE_KEY) || {};
        for(var i in all_cookie_key){
            wx.removeStorageSync(COOKIE_KEY_VALUE_PREFIX+all_cookie_key[i]);
        }
        wx.removeStorageSync(COOKIE_KEY);
    },
};

module.exports = Cookie;