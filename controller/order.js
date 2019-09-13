const {order, menus} = require('../models');

exports.index = async (req, res) => {
  const {transactionId} = req.user;
  try {
    const orders = await order.findAll({
      where: {transactionId},
      include: [{
        model: menus,
        as: 'menu'
      }]
    });

    return res.json(orders);
  } catch (err) {
    return res.status(500).json({message: 'Internal server error'});
  }
}

exports.store = async (req, res) => {
  const {transactionId} = req.user;
  const {orders} = req.body;
  let newOrders = [];

  orders.map(data => {
    newOrders.push({
      transactionId,
      menuId: data.id,
      price: data.price,
      qty: data.qty,
      status: 0
    });
  });

  try {
    const userOrders = order.findAll({where: {transactionId}});
    if (userOrders) {
      await order.destroy({where: {transactionId}});
    }

    const orderData = await order.bulkCreate(newOrders);

    return res.json({message: 'Ordes send', orderData});
  } catch (err) {
    return res.status(422).json({message: 'Unhandle request', err});
  }
}

exports.updateStatus = async (req, res) => {
  const {transactionId} = req.user;

  try {
    const updateOrders = await order.update(
      {status: 1},
      {where: {transactionId}}
    );
    return res.json({message: 'Order status updated'});
  } catch (err) {
    return res.status(500).json({message: 'Internal server error'});
  }
}
