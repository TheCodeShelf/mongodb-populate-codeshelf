const jwt = require('jsonwebtoken');
require('dotenv').config();

// function authenticateUser( req, res, next ){
//     let token;
//     if(req.cookies.token) token = req.cookies.token;
//     else if(req.headers.authorization) token = req.headers.authorization.split(" ")[1];
//     else return res.redirect('/login');

//     if(token == null ) return res.redirect('/login');
//     jwt.verify(token, process.env.ACCESS_TOKEN , (err, authData) => {
//         if(err) return res.redirect('/login'); // invalid token here
//         req.user = authData.user;
//         next();
//     });
// }

const generateJwtToken = (user) => {
    return jwt.sign({user}, process.env.ACCESS_TOKEN , {expiresIn:'15d'});
}


module.exports = {
    generateJwtToken
}