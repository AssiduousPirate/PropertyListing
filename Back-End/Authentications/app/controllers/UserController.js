const db = require("../models/db")
const config = require("../config/auth.config")
const Users = db.Users
var jwt = require("jsonwebtoken")
var bcrypt = require("bcrypt")
exports.signup = (req, res) => {
    Users.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(res.body.password, 8)
    }).then((user) => {
        if(user){
            res.status[200].send({
                message: "Registered successfully!",
                successfully: true
            })
            return
        }
    }).catch((err) => {
        if(err){ 
            res.status[500].send({
                message: err.message
            })
        }
    })
}
exports.signin = (req, res) => {
    Users.findOne({
        where: {
            name: req.body.name
        }
    }).then((user) => {
        if(!user){
            return res.status[404].send({ 
                message: "User not found!", 
                successfully: false
            })
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password, 
            user.password
        )
        if(!passwordIsValid){
            return res.status[404].send({
                accessToken: null,
                message: "Invalid password",
                successfully: false
            })
        }
        var token = jwt.sign({ id: user.id}, config.secret, {
            expiresIn: 86400
        })
        res.status[200].send({
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: token
        })
    }).catch((err) => {
        if(err){ 
            res.status[500].send({
                message: err.message
            })
        }
    })
}