const jwt = require('express-jwt');

exports.authorize = jwt({secret: 'secret-key-restaurant'});
exports.errAuth = (err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
      return res.status(401).json({message: err.message});
  }
}
