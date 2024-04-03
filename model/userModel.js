

const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name: {type : String},
    avatar: {type : String},
    email :{type : String},
    password : {type : String},
    created_at: {type : Date,default: Date.now },
},{
    versionKey : false
})
const UserModel=mongoose.model("user",userSchema)
module.exports={
    UserModel
}

// {
//     "name" : "Harsh",
//    "avatar" : "http://"
//     "email":"harsh@gmail.com",
//     "password":"harsh123",
//   }