// Imports.
const router = require('express').Router();
const path = require('path');
const db = require('../database/database.js');

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


router.get('/user', (req, res) => {
   res.render(path.join(__dirname +  '/../views/user.ejs'));
})

module.exports = router;