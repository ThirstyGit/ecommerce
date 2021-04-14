// Imports.
const router = require('express').Router();
const path = require('path');
const db = require('../database/database.js');
const {loginRequired} = require('../middlewares/verify.js');

router.get('/:id', (req, res) => {
   // Check if there is a user.
   let user = undefined;
   if(req.user) {
      user = req.user;
   }
   // Get the product and all the comments of that product.
   const sql = `SELECT p.name as productName, p.image, p.shops_id,
               p.description as productDescription, u.name as username,
               c.content as commentContent, c.time as commentTime
               FROM products as p
               LEFT JOIN comments as c
               ON p.id = c.products_id
               LEFT JOIN users as u
               ON c.users_id = u.id
               WHERE p.id = ${db.escape(req.params.id)}
               `;
   db.query(sql, (err, result) => {
      res.render(path.join(__dirname +  '/../views/product.ejs'), {products: result, user});
   });
});

router.post('/:id/createcomment', loginRequired, (req, res) => {
   const sql = `INSERT INTO comments(content, time, users_id, products_id)
                              VALUES(${db.escape(req.body.commentContent)}, now(), ${db.escape(req.user.id)}, ${db.escape(req.params.id)})`;
   db.query(sql, (err, result) => {
      if(err) {
         console.log(err)
      }
   })
})

module.exports = router;
