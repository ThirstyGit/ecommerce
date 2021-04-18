// Imports
const router = require('express').Router();
const path = require('path');
const db = require('../database/database.js');
// User defined modules.
const {loginRequired, isAdmin, isModerator} = require('../middlewares/verify.js');

router.get('/', (req, res) => {
   res.redirect('/');
})

router.get('/admin', (req, res) => {
   res.render(path.join(__dirname +  '/../views/admin.ejs'));
})

router.put('/makeadmin', (req, res) => {
   const sql = `UPDATE users SET type = 'admin' WHERE id = ${db.escape(req.body.userId)}`;
   db.query(sql, (err, result) => {
      if(err) {
         console.error(err);
      }
   })
   res.json({Message: "Success."})
})

router.put('/removeadmin', (req, res) => {
   const sql = `UPDATE users SET type = 'user' WHERE id = ${db.escape(req.body.userId)}`;
   db.query(sql, (err, result) => {
      if(err) {
         console.error(err);
      }
   })
   res.json({Message: "Success."})
})

router.put('/makemoderator', (req, res) => {
   const sql = `UPDATE users SET type = 'moderator' WHERE id = ${db.escape(req.body.userId)}`;
   db.query(sql, (err, result) => {
      if(err) {
         console.error(err);
      }
   })
   res.json({Message: "Success."})
})

router.put('/removemoderator', (req, res) => {
   const sql = `UPDATE users SET type = 'user' WHERE id = ${db.escape(req.body.userId)}`;
   db.query(sql, (err, result) => {
      if(err) {
         console.error(err);
      }
   })
   res.json({Message: "Success."})
})


router.get('/moderator', (req, res) => {
   res.render(path.join(__dirname +  '/../views/moderator.ejs'));
})


module.exports = router;
