const express= require('express')
const Connect= require('./config/connect')

const app= express()
app.use(express.json())
app.use("/user", require("./routes/user_login"))
require("dotenv").config({ path: "./config/.env" });


Connect()

const PORT= process.env.PORT||process.env.port;

app.listen(PORT, err=>{
    err? console.log('Server is disconnected', err): console.log(`Server is connected ${PORT}`)
} ) 