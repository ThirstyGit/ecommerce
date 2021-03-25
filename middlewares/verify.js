const db = require('../database/database.js');

// storing the data if logged in.
module.exports.authenticate = (req, res, next) => {
   global.user = undefined;
   if(!(req.session && req.session.userId)) {
      return next();
   }
   const sql = `SELECT * FROM users WHERE id = ${req.session.userId}`;
   db.query(sql, (error, result) => {
      if(error) {
         console.log(error);
         next();
      }
      if(result.length) {
         result[0].password = undefined;
         req.user = result[0];
         res.locals.user = result[0];
      }
      return next();
   })
}

// Making sure that there is a data stored for user.
module.exports.loginRequired = (req, res, next) => {
   if(!req.user) {
      return res.redirect('/auth/login')
   }
   else {
      next();
   }
}

// Making sure that the logged in user is an admin.
module.exports.admin = (req, res, next) => {
   if(req.user && req.user.type === 'admin') {
      next();
   }
   else {
      res.redirect('/');
   }
}
