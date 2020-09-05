// 引入express模块
const express = require('express')
// 生成一个路由
const router = express.Router()
// 
// post之后，对数据进行处理
//router.post('/user', require('../controller/userController').check )

// 用作测试，看是否可以顺利连接到数据库，并且存入信息
router.get('/a',require('../controller/userController').check)
// 导出router
module.exports = router