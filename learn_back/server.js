const express= require('express')
const Connect= require('./config/connect')
const multer = require('multer');
var fs = require('fs');
var path = require('path');


const app= express()
app.use(express.json())

// user Router
app.use("/user", require("./routes/user_login"))
//Product Router
app.use("/product" , require("./routes/product"))


require("dotenv").config({ path: "./config/.env" });








Connect()

const PORT= process.env.PORT||process.env.port;

app.listen(PORT, err=>{
    err? console.log('Server is disconnected', err): console.log(`Server is connected ${PORT}`)
} ) 