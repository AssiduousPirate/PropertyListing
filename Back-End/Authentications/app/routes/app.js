const { verify } = require("../middlewares/verify")
const UserController = require("../controllers/UserController")
module.exports = function(app){
    app.use(function (req, res, next){
        res.headers(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        )
        next()
    })
    app.post("http://localhost:8080/api/auth/signup", [
        verify.checkDuplecateUsernameOrEmail
    ],
    UserController.signup
    )
    app.post("http://localhost:8080/api/auth/signin", UserController.signin)
}
