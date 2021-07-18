const User = require('../model/user_login')
const express= require('express')
const router = express.Router()
const bcrypt= require('bcrypt')


//Register User 

router.post("/register", async (req,res) =>{
    const user= {...req.body}
    const email = user.email
    const email_exist= await User.findOne({email})
    if(email_exist) return res.status(403).json({msg: "Email already exist"});
    try 
    {
        const newUser = await new User({...user})
        const salt= await bcrypt.genSalt(10)
        const hash_password= await bcrypt.hash(newUser.password,salt)
        newUser.password=hash_password
        newUser.save()
        res.status(201).json({msg: 'User added Successufully'})   
     } 
     catch (error)
     {
        res.status(401).json({msg: 'Failed to add user'})  
     }

})


module.exports=router


