const router = require('express').Router();
const {verifyToken, createToken} =require("./authentication");
router.get("/",(req,res)=>{
    res.send("WELCOME To Website")
})

router.post("/generate-token",createToken,(req,res)=>{
   
})

router.post("/posts/create",verifyToken, (req,res)=>{
    res.send("You are Authorised Persion and You Have created a new post");
})

module.exports = router;