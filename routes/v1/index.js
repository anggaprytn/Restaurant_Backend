const mainRoute = require('express').Router();

mainRoute.use('/transaction', require('./transaction'));
mainRoute.use('/menus', require('./menus'));
mainRoute.use('/orders', require('./orders'));

module.exports = mainRoute;
