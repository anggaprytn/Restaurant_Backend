const jwt = require('jsonwebtoken');
const sequelize = require('sequelize');

const {transaction, order, menus} = require('../models');

exports.registerTable = async (req, res) => {
  const tableNumber = req.body.table;

  try {
    const transactionData = await transaction.create({tableNumber});
    const token = jwt.sign({
      tableNumber,
      transactionId: transactionData.id
    }, 'secret-key-restaurant');

    return res.json({token, tableNumber});
  } catch (err) {
    return res.status(422).json({message: 'Unhandle request'});
  }
}


exports.viewBill = async (req, res) => {
  const {transactionId} = req.user;
  let subtotal = 0;
  let discount = 0;
  let service = 0;
  let tax = 0;
  let total = 0;

  try {
    const orders = await order.findAll({
      where: {transactionId},
      include: [{
        model: menus,
        as: 'menu',
        attrubutes: {
          include: ['name']
        }
      }]
    });

    orders.map(order => {
      subtotal += (order.price * order.qty);
    });

    service = (5.5 * subtotal) / 100;
    tax = (10 * subtotal) / 100;

    total = subtotal + service + tax;
    detailTransaction = {
      subtotal, discount, service, tax, total
    }
    
    return res.json({orders, detailTransaction});
  } catch (err) {
    return res.status(500).json({message: 'Internal server error', err});
  }
}



exports.confirm = async (req, res) => {
  const {transactionId} = req.user;
  const {finishedTime, subtotal, discount, service, tax, total} = req.body;

  try {
    const transactionData = await transaction.findOne({where: {id: transactionId}});

    if (transactionData) {
      const transaction = await transactionData.update({
        finishedTime, subtotal, discount, serviceCharge: service, tax, total, isPaid: 1
      });

      return res.json(transaction);
    }
  } catch (err) {
    return res.status(500).json({message: 'Internal server error', err});
  }
}
