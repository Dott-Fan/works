// 具体的业务实现方法，定义在controller中
// 需要查询数据库mongoDB
// 引入model模型
const nameModel = require('../dao/model/nameModel')


module.exports = {
    async check(req,res){
        // 查询过程是异步程序，返回的是promise对象，使用async 和await
        let data = await nameModel.check();
        // console.log(data)
        
        //let data = req.body
        res.send( data )
    }
}