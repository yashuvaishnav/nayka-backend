

const {Router} = require("express")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/userModel")
require('dotenv').config()
const userRouter = Router();

userRouter.post("/register", async(req,res) => {
    try{
        const email = req.body.email
        const user = await UserModel.findOne({ email })
        if (user){
            res.status(400).json({ "msg" : "User Already Registered"})
        } else{
            bcrypt.hash(req.body.password, 10, async (error , hash) =>{
                if (hash){
                    const newUser = new UserModel({
                        ...req.body,
                        password: hash,
                    })
                    await newUser.save()
                    res.status(200).json({ "msg" : "User Registration Sucessfull"})
                }
            })
        }
    } catch (error){
        res.status(400).json({ error: error.message})
    }
})

userRouter.post("/login", async(req,res) => {
    const {email, password} = req.body
    try{
      const user = await UserModel.findOne({email});1
    bcrypt.compare(password, user.password, (error, result)=>{
        if (result){
            let token = jwt.sign({name:user.name,userId:user._id} , "login")
            res.status(200).json({ "msg": "User Logged in Sucessfull" , "token":token})
        } else{ 
            res.status(200).json({ "msg": "Incorrect Password"})
        }
    })

} catch (error){
    res.status(400).json({ error : "user is not exist"})
}
})

module.exports = {
    userRouter
}