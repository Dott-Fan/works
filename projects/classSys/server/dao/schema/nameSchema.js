const {Schema} = require('../conn/conn')
module.exports = new Schema({
    name:{
        type:String,
        required:true,
        minlength:2
    },
    phone:{
        type:Number,
        minlength:8
    },
    sex:{
        type:String,
        required:true
    },
    pic:String
})