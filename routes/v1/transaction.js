const router = require('express').Router();

const auth = require('../../middlewares/auth');
const TransactionController = require('../../controller/transaction');

router.post('/register_table', TransactionController.registerTable);
router.get('/view_bill', auth.authorize, auth.errAuth, TransactionController.viewBill);
router.patch('/confirm', auth.authorize, auth.errAuth, TransactionController.confirm);

module.exports = router
