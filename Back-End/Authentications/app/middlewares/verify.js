const db = require("../models/db")
const Users = db.Users
checkDuplecateUsernameOrEmail = (req, res, next) => {
    Users.findOne({
        where: {
            name: req.body.name
        }
    }).then(user =>{
        if (user) {
            res.status(400).send({
              message: "Failed! Username is already in use!", 
              successfully: false
            })
            return
        }
    })
    Users.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                message: "Failed! Email is already in use!", 
                successfully: false
            })
            return
        }
        next()
    })
}
const verifySignUp = {
    checkDuplecateUsernameOrEmail: checkDuplecateUsernameOrEmail
}
module.exports = verifySignUp