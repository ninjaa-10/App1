const express=require("express")
const router=express.Router()
const User=require("../Model/User")
router.post("/register",async(req,res)=>{
    const user=new User(req.body)
    await user.save()
    res.send(user)
})
router.post("/login",async(req,res)=>{
    //console.log(req.body.username+"   " +req.body.password);
    const user=await User.findOne({username:req.body.username,password:req.body.password});
    //console.log(user[0])
    if(user)
    {
        res.send("Login succes")
    }
    else
    {
        res.send("Invaldi credentials")
    }
})
module.exports=router;