
const mongoose=require("mongoose")
require('dotenv').config()
const connection=mongoose.connect("mongodb://localhost:")
module.exports={
    connection
}
