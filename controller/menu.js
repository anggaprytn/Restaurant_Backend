const {menus, category} = require('../models');

exports.categories = async (req, res) => {
  try {
    const categories = await category.findAll({
      include: [{
        model: menus,
        as: 'menus'
      }]
    });
    return res.json(categories);
  } catch (err) {
    return res.status(500).json({message: 'Internal server error'});
  }
}
