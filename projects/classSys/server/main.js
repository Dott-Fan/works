/* 
1,初始化文件夹，安装相关依赖包 express  
  前台点击查询，后台将查询到的数据返回给前台
  初步计划post数据接收
2,


*/
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.listen(8080,()=>{
    console.log('服务器启动')
})

// 静态资源托管
app.use(express.static('pics'))

// 接受post传递的参数,并进行解析，之后post的数据会存储在req.body中
app.use( bodyParser.urlencoded({extended:false}) )

// 定义一个中间件。所有的请求地址都可以接受
// 定义请求地址
app.use((req,res,next)=>{
    // 跨域 
    // 所有的来源域名，我都接受
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
  })
//引入后台路由模块，进行具体路由规则的设定
app.use(require('./route/api') )

// 设置一个测试是否可以链接到数据库
app.use('/',(req,res)=>{
    res.send('链接数据库')
 })


