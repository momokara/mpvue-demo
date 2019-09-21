var HOST
var COS_FILE
var COS_URL
var DATE
var THEME
// 格式化数据
function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}
try {
  process.argv.forEach(e => {
    if (/^HOST=http/.test(e)) {
      HOST = e.replace(/^HOST=/, '')
      HOST = `"${HOST}"`
      console.log("HOST:", HOST)
    }
    if (/^COS_FILE=\//.test(e)) {
      COS_FILE = e.replace(/^COS_FILE=/, '')
      COS_FILE = `"${COS_FILE}"`
      console.log("COS_FILE:", COS_FILE)
    }
    if (/^COS_URL=http/.test(e)) {
      COS_URL = e.replace(/^COS_URL=/, '')
      COS_URL = `"${COS_URL}"`
      console.log("COS_URL:", COS_URL)
    }
    if (/^COS_URL=http/.test(e)) {
      THEME = e.replace(/^THEME=/, '')
      THEME = `"${THEME}"`
      console.log("THEME:", THEME)
    }
  })

} catch (err) {
  console.log(err, process.argv)
}
DATE = new Date()
DATE = DATE.getFullYear()+formatNumber(DATE.getMonth()+1)+formatNumber(DATE.getDate())+formatNumber(DATE.getHours())+formatNumber(DATE.getMinutes())

module.exports = {
  NODE_ENV: '"production"',
  HOST: HOST,
  COS_FILE: COS_FILE,
  COS_URL: COS_URL,
  DATE: DATE,
  THEME: THEME
}