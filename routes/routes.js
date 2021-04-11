// Imports.
const router = require('express').Router();
const path = require('path');
const db = require('../database/database.js');
const bcrypt = require('bcrypt');

// User imports
const {loginRequired} = require('../middlewares/verify.js');
const upload = require('../database/upload.js');

// Dummy data. Will be replaced with a proper database.
const recentShops = [
   {name: "Amader shop"},
   {name: "Super Malt"},
   {name: "Great shop"},
   {name: "Graphics world"},
   // {name: ""},
]

const bookmarkedShops = [
   {name: "Bahi Bhai shop"},
   {name: "Amader shop"},
   {name: "Our Shop BD"},
   // {name: ""},
]


// Basic routing.
router.get('/', (req, res) => {
   const sql = `SELECT * FROM shops`;
   db.query(sql, (err, shops) => {
      if(err) {
         shops = {};
         console.error(err);
      }
      res.render(path.join(__dirname +  '/../views/index.ejs'), {shops, recentShops, bookmarkedShops, user: req.user});
   })
});

router.get('/user/:id', loginRequired, (req, res) => {
   const sql = `SELECT * FROM users WHERE ID = ${db.escape(req.params.id)}`;
   db.query(sql, (err, user) => {
      if(err) {
         console.error(err);
         res.redirect('/');
      }
      else {
         const sql = `SELECT * FROM shops WHERE users_id = ${db.escape(req.params.id)}`
         db.query(sql, (err, shop) => {
            if(err) {
               console.error(err);
               res.redirect('/');
            }
            else {
               res.render(path.join(__dirname +  '/../views/user.ejs'), {user: user[0], shop: shop[0]});
            }
         })
      }
   })
})

// Change user information
router.put('/user', loginRequired, (req, res) => {
   const sql = `UPDATE users SET
               name = ${db.escape(req.body.name)}, email = ${db.escape(req.body.email)},
               phone = ${db.escape(req.body.phone)}, dob = ${db.escape(req.body.dob)}
               WHERE id = ${db.escape(req.user.id)}`;
   db.query(sql, (err, result) => {
      if(err) {
         console.error(err);
      }
   })
})

router.put('/changepassword', loginRequired, (req, res) => {
   const sql = `UPDATE users SET
               password = ${db.escape(bcrypt.hashSync(req.body.password, 14))}
               WHERE id = ${db.escape(req.user.id)}`;
   db.query(sql, (err, result) => {
      if(err) {
         console.error(err);
      }
   })
})

router.get('/changeprofile', (req, res) => {
   res.render(path.join(__dirname +  '/../views/changeprofile.ejs'));
})

router.post('/changeprofile', loginRequired, upload.single('file'), (req, res) => {
   const sql = `UPDATE users SET image = ${db.escape(req.file.filename)} WHERE id = ${db.escape(req.user.id)}`;
   db.query(sql, (err, result) => {
      if(err) {
         console.error(err);
      }
      else {
         res.redirect(`/user/${req.user.id}`);
      }
   })
})

router.get('/cart', (req, res) => {
   res.render(path.join(__dirname +  '/../views/cart.ejs'));
})

router.get('/checkout', (req, res) => {
   res.render(path.join(__dirname +  '/../views/checkout.ejs'));
})

router.post('/checkout', (req, res) => {
   // This is not done yet.
   res.redirect('/');
})

module.exports = router;
