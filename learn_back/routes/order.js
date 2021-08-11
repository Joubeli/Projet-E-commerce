const express= require('express')
const router= express.Router()
const Order = require ('../model/order')


router.post('/upload', async(req,res)=>{

    const newOrder= new Order ({
        description:req.body.description,
        product: req.body.product,
        date: req.body.date,
        mod_liv: req.body.mod_liv
    })

    try{
        await newOrder.save()
        res.status(201).json({msg: "add order Ok", newOrder});
    } catch (error) {
      res.status(401).json({msg: "add order Failed"});
    }
})


router.delete("/:_id", (req, res) => {
    let { _id } = req.params
    Order.findByIdAndDelete({ _id })
        .then(() => res.send("Order has been deleted"))
        .catch(err => res.send(err))
  })



router.get('/display', async (req,res)=>{

    Order.find()
    .then(orders => res.status(200).json(orders))
    .catch(err => res.send(err))
})

router.get("/:description", (req, res) => {
    let { description } = req.params
    Order.find({ description })
    .then(search => res.status(200).json(search))
    .catch(err => res.send(err))
  })

module.exports=router