/**
 * 封装微信的异步请求 改为 promise
 * @param {funciton} fn 传入的微信请求方法
 */
export const pagelogs = () => {
  var pages = getCurrentPages(); //获取加载的页面

  var currentPage = pages[pages.length - 1]; //获取当前页面的对象

  var url = currentPage.route; //当前页面url
  let logdata = {
    url: url,
    time: Date.now()
  }

    // 调用API从本地缓存中获取数据
  const logs = wx.getStorageSync("logs") || [];
  logs.unshift(logdata);
  wx.setStorageSync("logs", logs);
}

module.export = {
  pagelogs,
};
