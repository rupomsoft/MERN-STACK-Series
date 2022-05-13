const  mongoose=require('mongoose')
const DataSchema=mongoose.Schema({
    UserName:{type:String,unique:true},
    UserID:{type:Number,default:function(){return Math.floor(Date.now() / 1000)}},
    Password:{type:String},
    Roll:{type:String},
    CreatedDate:{type:Date,default:Date.now()}
},{versionKey:false});
const UsersModel=mongoose.model('users',DataSchema);
module.exports=UsersModel