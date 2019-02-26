// 一些页面工具方法

/**
 * 封装微信的异步请求 改为 promise
 * @param {funciton} fn 传入的微信请求方法
 */
export const toPromise = (fn) => {
  return (obj = {}) => {
    return new Promise((resolve, reject) => {
      obj.success = (res) => {
        res = res.data ? res.data : res;
        resolve(res);
      };
      obj.fail = (res) => {
        reject(res);
      };
      fn(obj);
    });
  };
}

// 格式化数据
export function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

/**
 * 格式化日期
 * @param {date} date 需要格式化的日期 
 */
export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

/**
 * 跳转到目标地址 兼容页面和table
 * @param {String} url 目标地址
 */
export function golink(url) {
  url = `/${url}`;
  wx.navigateTo({
    url: url,
    fail: function () {
      wx.switchTab({
        url: url,
        fail: function () {
          wx.showToast({
            title: "打开失败",
            icon: "none"
          });
        }
      });
    }
  });
}

/**
 * 判断string 是否是 json
 * @param {String} string 需要判断的String
 */
export const isJsonString = (string) => {
  let res = false;
  try {
    if (typeof JSON.parse(string) == "object") {
      res = true
    }
  } catch (e) {}
  return res;
}

const tools = {};
tools.toPromise = toPromise;
tools.formatNumber = formatNumber;
tools.formatTime = formatTime;
tools.golink = golink;
tools.isJsonString = isJsonString;
export default tools;

module.export = {
  toPromise,
  formatNumber,
  formatTime,
  golink,
  isJsonString
}
