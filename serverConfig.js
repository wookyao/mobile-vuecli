const isProduction = process.env.NODE_ENV === 'production'

// 本地
let sitePrefix = '/'
let apiServePrefix = '//localhost:8081/'
let apiPrefix = '/api/'
// 是否开启mock
let disableMock = false

// 线上
if (isProduction) {
  sitePrefix = ''
  apiServePrefix = ''
  apiPrefix = apiServePrefix
  disableMock = true
}

module.exports = {
  disableMock, // mock数据开启或关闭
  sitePrefix, // 网站根地址
  apiPrefix, // API 接口根地址
  apiServePrefix // API 真实服务端的接口地址 19965412404
}
