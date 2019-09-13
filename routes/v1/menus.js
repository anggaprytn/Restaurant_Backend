const router = require('express').Router();

const MenuController = require('../../controller/menu');

router.get('/', MenuController.categories);

module.exports = router
