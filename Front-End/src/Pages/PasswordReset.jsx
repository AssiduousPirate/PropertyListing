import * as React from "react"
import "../Components/Auth.css"
let API_URL = "http://localhost:8080/api/auth/setpass"
class PasswordReset extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            password: "",
            repassword: "",
            message: "",
            successfully: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        if(this.state.password === " " && this.state.password === null){
            this.setState({
                message: "Password is Required",
                successfully: false
            })
        }
        if(this.state.password !== this.state.repassword){
            this.setState({
                message: "Password doesn't matches",
                successfully: false
            })
        }
        const body = {
            password: this.state.password,
        }
        console.log(body)
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        }
        fetch(API_URL, requestOptions)
            .then((response) => {
                return response.json()
            })
            .then((results) => {
                if(results){
                    this.setState({
                        message: "Password updatede successfully",
                        successfully: true
                    })
                    this.setState({
                        password: ""
                    })
                    window.location.reload()
                }
            })
            .catch((error) => {
                console.log("There are some error" + ":" + error)
                    this.setState({
                        message: "There are some error" + ":" + error,
                        successfully: false
                    })
            })
    }
    render()
    {
        return(
            <div className="auth">
                <div className="container auth-controller d-flex justify-content-center align-items-center">
                    <div className="card">
                        <div className="p-3 border-bottom d-flex align-items-center justify-content-center">
                            <h5>Set Password</h5>
                        </div>
                        {this.state.message && (
                            <div className={this.state.successfully ?
                                "alert alert-success text-center" :
                                "alert alert-danger text-center"} role="alert">
                                {this.state.message}
                            </div>
                        )}
                        <div className="p-3 px-4 py-4 border-bottom">
                            <form onSubmit={this.handleSubmit}>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}className="form-control mb-4" placeholder="Password" />
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}className="form-control mb-4" placeholder="RePassword" />
                                <div className="d-flex align-items-center justify-content-center">
                                    <button className="btn btn-danger btn-block continue">Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PasswordReset
