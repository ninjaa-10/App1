const bodyParser = require("body-parser");
const express=require("express")
const mongoose=require("mongoose")
const authroute=require("./Route/authRoute")
const cors=require("cors")
const app=express();
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/pract")
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log(err))
app.listen(3000,()=>{
    console.log("Server is running on server 3000")
})
app.use("/",authroute);