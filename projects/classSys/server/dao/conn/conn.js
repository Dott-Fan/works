// 连接数据库
// 创建mongoose对象
const mongoose = require('mongoose')
//导入 数据库配置
const dbConfig =  require('../../config/db')
// 通过mongoose与数据库建立连接
mongoose.connect(dbConfig.host, dbConfig.opts)

// 导出mongoose，共schema和model使用
module.exports = mongoose
