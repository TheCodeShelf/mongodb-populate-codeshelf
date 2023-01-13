const baseResponse = require("../../helper/baseResponse/baseResponse");
const Customer = require("./customer.schema");

const getCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id)
    return res.status(200).json(baseResponse(200, "customer fetched", customer));
  } catch (error) {
    console.log(error);
  }
};

module.exports = getCustomer;
