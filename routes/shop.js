// urls prefixed with /shop
const path = require('path');
const db = require('../database/database.js');
const {loginRequired} = require('../middlewares/verify.js');

// module exports.
const router = require('express').Router();
const multer = require('multer'); // This is used for uploading files.

// setting up Storage Engine for multer.
const storage = multer.diskStorage({
   destination: function(req, file, cb) {
      cb(null, './public/images')
   },
   filename: function(req, file, cb) {
      cb(null, Date.now() + file.originalname);
   }
})
const upload = multer({storage});

// URL paths.
router.get('/create', loginRequired, (req, res) => {
   res.render(path.join(__dirname +  '/../views/createShop.ejs'));
})

router.post('/create', loginRequired, (req, res) => {
   // Inserting the shop information in database to create a new shop.
   const sql = `INSERT INTO shops(name, city, area, users_id) VALUES(${db.escape(req.body.name)}, ${db.escape(req.body.city)}, ${db.escape(req.body.area)}, ${db.escape(req.user.id)})`;
   db.query(sql, (err, result) => {
      if(err) {
         console.error(err);
         res.redirect('/shop/create');
      }
      else {
         res.redirect('/');
      }
   })
})

router.get('/:id', (req, res) => {
   const sql = `SELECT * FROM shops WHERE id = ${db.escape(req.params.id)}`; //Information about the specific shop.
   db.query(sql, (err, shops) => {
      if(err) {
         shops = {};
         console.error(err);
      }
      const sql = `SELECT * FROM products WHERE shops_id = ${db.escape(req.params.id)}`;
      db.query(sql, (err, products) => {
         if(err) {
            console.error(err);
            products = {}
         }
         res.render(path.join(__dirname +  '/../views/shop.ejs'), {shop: shops[0], products});
      })
   })
});

router.get('/:id/addproduct', (req, res) => {
   res.render(path.join(__dirname +  '/../views/addProduct.ejs'));
})


router.post('/:id/addproduct', upload.single('file'), (req, res) => { //upload.single comes from multer. Used to upload files.
   const sql = `INSERT INTO products(name, price, image, shops_id)
                           Values(${db.escape(req.body.name)}, ${Number(req.body.price)}, ${db.escape(req.file.filename)}, ${db.escape(req.params.id)})`;
   db.query(sql, (err, result) => {
      if(err) {
         res.redirect(`/shop/${req.params.id}/addproduct`);
         console.error(err)
      }
      else {
         res.redirect(`/shop/:${db.escape(req.body.id)}`);
      }
   })
})

module.exports = router;