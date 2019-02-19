/**
 * 数据加密
 * @param {String} data 需要处理的数据
 * @return {Promise} 处理结果
 */
export const encrypt = (data) => {
  return wx.cloud.callFunction({
    name: "docrypt",
    // 传给云函数的参数
    data: {
      type: 1,
      data: data
    }
  })
}

/**
 * 数据解密
 * @param {String} data 需要处理的数据
 * @return {Promise} 处理结果
 */
export const decrypt = (data) => {
  return wx.cloud.callFunction({
    name: "docrypt",
    // 传给云函数的参数
    data: {
      type: 2,
      data: data
    }
  })
}
module.export = {
  encrypt,
  decrypt
};
