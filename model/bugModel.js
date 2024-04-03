
const mongoose=require("mongoose")
const bugSchema=mongoose.Schema({
    title: {type : String},
    description: {type : String},
    source :{type : String},
    severity : {type : String},
    raised_id : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    created_at: {type : Date,default: Date.now },
    upadated_at : {type : Date,default: Date.now}
},{
    versionKey : false
})
const BugModel=mongoose.model("bug",bugSchema)
module.exports={
    BugModel
}


// {
//     "title": "kjhdkgjh",
//       "description":"hkzhgkz",
//       "source" :"hkxbhbjkh",
//       "severity" : "kjdhgkxhgkj"
//   }    
  