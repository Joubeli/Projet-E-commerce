const express= require('express')
const router_product= express.Router()
const Product = require ('../model/product')
const multer= require('multer')
var fs = require('fs');
var path = require('path');


 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
  });
  
  const uploads = multer({ storage: storage });

  // Get and Post Product

  router_product.get('/products', async(req,res)=>{

      Product.find({}, (err, items)=>{

        if(err){
            console.log(err);
            res.status(500).send('An error has occured',err)
        }
        else{
            res.render('Images Product', {items: items})
        }
      })
    })


router_product.post('/chooseProduct', uploads.single('image'), async(req,res,next)=>{

    const newProduct={
        description : req.body.description,
        price: req.body.price,
        qte: req.body.qte,
        category: req.body.category,
        image: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
        

        Product.create(newProduct, (err, items)=>{

            if (err){
                res.status(500).send('An error has occured', err)
            }

            else{
                items.save(),
                res.redirect('/')
            }
        });
    });



  






module.exports=router_product