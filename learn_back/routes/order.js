const express= require('express')
const router= express.Router()
const Order = require ('../model/order')


router.post('/display', async(req,res)=>{

    const newOrder= new Order ({
        description:req.body.description,
        product: req.body.product,
        date: req.body.date,
        mod_liv: req.body.mod_liv
    })

    try{
        await newOrder.save()
        res.status(201).json(newOrder);
    } catch (error) {
      res.status(401).json(err);
    }
})



router.get('/orders', async (req,res)=>{

    Order.find()
    .then(orders => res.status(200).json(orders))
    .catch(err => res.send(err))
})

module.exports=router