const jwt = require("jsonwebtoken")
const config = require("../config/auth.config")
verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token']
    if(!token){
        return res.status(403).send({
            message: "No token found!", 
            successfully: false
        })
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
              message: "Unauthorized!", 
              successfully: false
            })
        }
        res.id = decoded.id
        next()
    })
}
const authjwt = {
    verifyToken: verifyToken
}
module.exports = authjwt