const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    userName : {type: String,required : true,unique:true},
    yearOfGraduation: {type : Number,min:2000,max : 9000},
    createdAt : {type : Date,default:Date.now},
    isDeletedn : {type: Boolean,default:false}
});
module.exports=mongoose.model("user",userSchema);