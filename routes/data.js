const db = require('../database/database');

const router = require('express').Router();

router.get('/shopexist/:name', (req, res) => {
   const sql = `SELECT * FROM shops WHERE name = ${db.escape(req.params.name)}`;
   db.query(sql, (err, result) => {
      if(err) {
         console.error(err);
         res.send('error');
      }
      else {
         if(result.length) {
            res.json({doesExist: true});
         }
         else {
            res.json({doesExist: false});
         }
      }
   })
})


module.exports = router;
