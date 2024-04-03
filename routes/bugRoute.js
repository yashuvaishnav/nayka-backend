

const {Router} = require("express")
const { BugModel } = require("../model/bugModel")
const { getUserId } = require("../middlewares/userMiddleware")
const bugRouter = Router()
require('dotenv').config()

bugRouter.use(getUserId)

bugRouter.get("/bugs",async (req,res)=>{
    try {
        const bugData = await BugModel.find();
        res.status(200).send({data : bugData});
    } catch (error) {
        res.status(404).send({error : error.message});
    } 
})

bugRouter.get("/bugs/:id",async(req,res)=>{
    const id=req.params.id;
try{
    const findTheProduct=await BugModel.findOne({_id:id});
    res.status(200).send(findTheProduct);
}
catch(err){
res.status(400).send({"message":err.message});
}
})

bugRouter.post("/bugs",async(req,res)=>{
  console.log(req.userId)
    try {
        const bugs = new BugModel({ ...req.body, raised_id: req.userId });
        // const bugs = new BugModel(req.body);
        await bugs.save();
        res.status(200).send({"message": "product added successfully"});
    } catch (error) {
        
    }
})

bugRouter.patch("/bugs/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };
  
      const result = await BugModel.findByIdAndUpdate(
        id,
        updatedData,
        options
      );
      res.send(result);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
});

bugRouter.delete("/bugs/:id", async (req, res) => {
    const productId = req.params.id;
    try {
      await BugModel.findByIdAndDelete({ _id: productId });
      res.send({ msg: "Product deleted successfully" });
    } catch (err) {
      res.send(400).send({ msg: "Something Went Wrong" });
    }
});


module.exports = {
    bugRouter
}