const baseResponse = require("../../helper/baseResponse/baseResponse");
const Order = require("./order.schema");

const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({_id: id});
    return res.status(200).json(baseResponse(200, "order created", order));
  } catch (error) {
    console.log(error);
  }
};

module.exports = getOrder;
