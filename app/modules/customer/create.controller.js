const baseResponse = require("../../helper/baseResponse/baseResponse");
const Customer = require("./customer.schema");

const createCustomer = async (req, res) => {
  try {
    const { name, phone_number, email } = req.body;
    const customer = new Customer({
      name: name,
      phone_number: phone_number,
      email: email,
    });
    await customer.save();
    return res.status(200).json(baseResponse(200, "customer created", customer));
  } catch (error) {
    console.log(error);
  }
};

module.exports = createCustomer;
