/**
 * 封装微信的异步请求 改为 promise
 * @param {funciton} fn 传入的微信请求方法
 */
export const pagelogs = (isleave) => {
  var pages = getCurrentPages(); //获取加载的页面

  var currentPage = pages[pages.length - 1]; //获取当前页面的对象

  var url = currentPage.route; //当前页面url
  let logdata = {
    url: url,
    time: Date.now()
  }

  // 从本地缓存中获取数据
  const logs = wx.getStorageSync("logs") || [];

  if (isleave) { // 刷新离开时间
    logs[0].leavetime = Date.now();
  } else {       // 记录访问
    logs.unshift(logdata);
  }
  wx.setStorageSync("logs", logs);
}

module.export = {
  pagelogs,
};
