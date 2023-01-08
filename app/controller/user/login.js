const baseResponse = require('../../helper/baseResponse/baseResponse');

const users = [
    {
        username: "judy",
        password: '123'
    },
    {
        username: 'rohan',
        password: '123'
    }
];

const login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find( user => { return user.username == username});
    if(user && user.password == password) return res.status(200).json(baseResponse(200, "login successfull", user));
    return res.status(404).json(baseResponse(404, "Incorrect username or password!", []));
};

module.exports = login;