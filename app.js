const express = require('express')
const app =express();
const userRouter = require("./route");
const authentication = require("./authentication")
require('dotenv').config();

console.log("DOT ENV DATA",process.env.SECRET_KEY)

app.use("/api",userRouter);

app.listen(5000, ()=>console.log("Server is Running"));