

const express=require("express")
const cors = require("cors")
const {connection}=require("./db")
const {userRouter}=require("./routes/userRoute")
const { bugRouter } = require("./routes/bugRoute")
const { getUserId } = require("./middlewares/userMiddleware")
require("dotenv").config()

const app=express()

app.use(express.json())
app.use(cors())

app.use("/users",userRouter)
app.use("/bug",getUserId,bugRouter)


app.listen(8080,async()=>{
    try {
        await connection
        console.log("Server running");
    } catch (error) {
        console.log(error.message);
    }
})