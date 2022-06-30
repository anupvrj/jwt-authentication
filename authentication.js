const jwt = require('jsonwebtoken');



///Just Giving a sample user data which will be added into token payload

const user={
    username:"anupvrj",
    email:"anup@hotmail.com",
    mobile:"999999999"
}
//Creating Token
const createToken = (req,res,next)=>{
    const privateKey =process.env.SECRET_KEY;
    jwt.sign({user:user}, privateKey,(err, token)=> {
        if(err) console.log(err);
        res.json({token:token});
      });
    //console.log(privateKey);
next();
}

//Let us create function for Authorization

const verifyToken = (req,res,next)=>{

    //Get Auth Value

    const bearerHeader = req.headers['authorization'];
if(typeof bearerHeader!=="undefined"){
   token = bearerHeader.split(" ")[1];
req.token =token;

jwt.verify(req.token, process.env.SECRET_KEY, (err, authData)=>{
    if(err) res.status(403).json({"Failed":"You have wrong Token"});
    res.json({message:'POst Has been Created',userdetails:authData})
})
next();
}
else{
    res.status(403).json({"error":"You have invalid Token"})
}
    //console.log(privateKey);
}


module.exports ={verifyToken,createToken};