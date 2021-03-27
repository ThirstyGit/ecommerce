const router = require('express').Router();
const path = require('path');
const db = require('../database/database.js');

router.get('/:id', (req, res) => {
   const sql = `SELECT * FROM products WHERE id = ${db.escape(req.params.id)}`;
   db.query(sql, (err, result) => {
      console.log(result[0]);
      res.render(path.join(__dirname +  '/../views/product.ejs'), {product: result[0]});
   });
});

module.exports = router;
