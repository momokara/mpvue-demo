
// 一些页面工具方法

/**
 * 封装微信的异步请求 改为 promise
 * @param {funciton} fn 传入的微信请求方法
 */
export const toPromise = (fn) => {
  return (obj = {}) => {
    return new Promise((resolve, reject) => {
      obj.success = (res) => {
        res = res.data ? res.data : res
        resolve(res)
      }
      obj.fail = (res) => {
        reject(res)
      }
      fn(obj)
    })
  }
}

// 格式化数据
export function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

/**
 * 格式化日期
 * @param {date} date 需要格式化的日期
 * @param {String} formatter 格式
 */
export function formatTime (date, formatter) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  let res = ''
  if (formatter) {
    formatter = formatter.replace(/YYYY/, year)
    formatter = formatter.replace(/MM/, month)
    formatter = formatter.replace(/DD/, day)
    formatter = formatter.replace(/hh/, hour)
    formatter = formatter.replace(/mm/, minute)
    formatter = formatter.replace(/ss/, second)
    res = formatter
  } else {
    const t1 = [year, month, day].map(formatNumber).join('/')
    const t2 = [hour, minute, second].map(formatNumber).join(':')
    res = `${t1} ${t2}`
  }
  return res
}

/**
 * 跳转到目标地址 兼容页面和table
 * @param {String} url 目标地址
 */
export function golink (url) {
  url = `/${url}`
  return new Promise((resolve, reject) => {
    wx.navigateTo({
      url: url,
      success: function () {
        resolve(url)
      },
      fail: function () {
        wx.switchTab({
          url: url,
          fail: function () {
            wx.showToast({
              title: '打开失败',
              icon: 'none'
            })
            reject(url)
          }
        })
      }
    })
  })
}

/**
 * 显示原生弹出框
 * @param {Object} obj 弹出矿参数
 * @param {String} obj.title 提示的标题 (必填)
 * @param {String} obj.content 提示的内容 (必填)
 * @param {boolean} obj.cancelText 取消按钮的文字，最多 4 个字符 ('取消')
 * @param {String} obj.cancelColor 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 (#000000)
 * @param {String} obj.confirmText 确认按钮的文字，最多 4 个字符 ('确定')
 * @param {String} obj.confirmColor 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 (#576B95)
 */
export const showModal = (obj = {}) => {
  console.log('obj in showModal', obj)
  let _showModal = toPromise(wx.showModal)
  obj.title = obj.title ? obj.title : '提示'
  obj.content = obj.content ? obj.content : ' '
  return _showModal(obj)
}

/**
 * 判断string 是否是 json
 * @param {String} string 需要判断的String
 */
export const isJsonString = (string) => {
  let res = false
  try {
    if (typeof JSON.parse(string) === 'object') {
      res = true
    }
  } catch (e) { }
  return res
}

/**
 * JSON转数组
 * @param {json} json 需要转换是json
 * @return {Array} 返回的数据'[{key,data}]'
 */
export const jsonToArray = (json) => {
  let resArray = []
  for (const key in json) {
    if (key) {
      let saveData = json[key]
      saveData = JSON.stringify(saveData)
      let rowdata = {
        key,
        data: saveData
      }
      resArray.push(rowdata)
    }
  }
  return resArray
}
/**
 * 格式化数字,保留两位小数
 * @param {String} value 需要格式化的值
 * @return {Number} 返回处理结果数组
 */
export const formatterNum = (value) => {
  // 清除“数字”和“.”以外的字符
  value = value.replace(/[^\d.]/g, '')
  // 只保留第一个. 清除多余的
  value = value.replace(/\.{2,}/g, '.')
  value = value
    .replace('.', '$#$')
    .replace(/\./g, '')
    .replace('$#$', '.')
  // 只能输入两个小数
  value = value.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
  if (value.indexOf('.') < 0 && value !== '') {
    // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
    value = parseFloat(value)
  }
  return value
}
/**
 * 分组输出console
 * @param {String} GroupName 组名
 * @param {Array} arrLogData console 的数据数组
 * @param {way} 输出方式 log，info,error,warn
 */
export const consoleGroup = (GroupName, arrLogData, way) => {
  console.group(GroupName)
  if (arrLogData.length) {
    arrLogData.forEach(element => {
      switch (way) {
        case 'info':
          console.info(element)
          break
        case 'error':
          console.error(element)
          break
        case 'warn':
          console.warn(element)
          break
        case 'table':
          for (const key in element) {
            if (element.hasOwnProperty(key)) {
              let e = element[key]
              if (typeof e === 'object') {
                console.group(key)
                console.table([e])
                console.groupEnd()
              } else {
                console.group(key)
                console.table([{ [key]: e }])
                console.groupEnd()
              }
            }
          }

          break
        default:
          console.log(element)
          break
      }
    })
  } else {
    console.log(arrLogData)
  }
  console.groupEnd()
}
module.export = {
  toPromise,
  formatNumber,
  formatTime,
  golink,
  showModal,
  isJsonString,
  jsonToArray,
  formatterNum,
  consoleGroup
}
