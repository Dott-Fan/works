// 引入mongoose对象中的model
// const mongoose = require('../conn/conn')
// 直接运用结构语法
const { model } = require('../conn/conn')

// 引入对应的schema
const nameSchema = require('../schema/nameSchema')

//const nameModel = model('Name',nameSchema,'names')


// 定义model对象
class NameModel{
    constructor(){
        // 类成员的属性
        this.model = model('Name',nameSchema,'names')
    }
    check(){
        // 直接返回全部的结果
        return this.model.find();
    }
    add(){
        /* this.model.insertMany([{
            name:'范二宝',
            phone:15532267355,
            sex:'男',
            pic:'http://127.0.0.1:8080/1.jpg'
        },{
            name:'李宁',
            phone:15532265422,
            sex:'男',
            pic:'http://127.0.0.1:8080/2.jpg'
        },
        {
            name:'黄涛',
            phone:15532261234,
            sex:'男',
            pic:'http://127.0.0.1:8080/3.jpg'
        },
        {
            name:'冯春阳',
            phone:15532260000,
            sex:'女',
            pic:'http://127.0.0.1:8080/1.jpg'
        },
        {
            name:'赵晓楠',
            phone:15888888888,
            sex:'女',
            pic:'http://127.0.0.1:8080/2.jpg'
        },
        {
            name:'郝子建',
            phone:15532267355,
            sex:'男',
            pic:'http://127.0.0.1:8080/3.jpg'
        },
        {
            name:'邢吉祥',
            phone:15532267355,
            sex:'男',
            pic:'http://127.0.0.1:8080/1.jpg'
        },
        {
            name:'刘广美',
            phone:15532268888,
            sex:'女',
            pic:'http://127.0.0.1:8080/2.jpg'
        },
        {
            name:'吴林林',
            phone:15532261234,
            sex:'女',
            pic:'http://127.0.0.1:8080/3.jpg'
        },
        {
            name:'关山',
            phone:15532267355,
            sex:'男',
            pic:'http://127.0.0.1:8080/1.jpg'
        },
        {
            name:'吴老师',
            phone:666666666,
            sex:'男',
            pic:'http://127.0.0.1:8080/2.jpg'
        },
        {
            name:'班主任',
            phone:111111111,
            sex:'女',
            pic:'http://127.0.0.1:8080/3.jpg'
        },

    ]) */
    }

}

module.exports = new NameModel