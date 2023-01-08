const baseResponse = require('../../helper/baseResponse/baseResponse');


const deleteUser = (req, res) => {
    const { username } = req.body;
    return res.status(200).json(baseResponse(200, "customer deleted", { username }));
};

module.exports = deleteUser;