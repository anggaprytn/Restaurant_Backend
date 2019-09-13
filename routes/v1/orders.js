const router = require('express').Router();

const auth = require('../../middlewares/auth');
const OrderController = require('../../controller/order');

router.use(auth.authorize);
router.use(auth.errAuth);
router.get('/', OrderController.index);
router.post('/', OrderController.store);
router.patch('/', OrderController.updateStatus);

module.exports = router;
