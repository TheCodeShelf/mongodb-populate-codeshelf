const baseResponse = require('../../helper/baseResponse/baseResponse');

const createUser = (req, res) => {
    const { username, password } = req.body;
    return res.status(200).json(baseResponse(200, "customer created", { username, password }));
};

module.exports = createUser;