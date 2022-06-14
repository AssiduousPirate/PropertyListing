import * as React from "react"
import "../Components/Auth.css"
let API_URL = "http://localhost:8080/api/auth/ResetPassword"
class PasswordEmail extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            email: "",
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
        if(this.state.email === " " && this.state.email === null){
            this.setState({
                message: "Email is Required",
                successfully: false
            })
            const body = {
                email: this.state.email,
            }
            console.log(body)
            const requestOptions = {
                method: "POST",
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
                            message: "Email Sent Successfully",
                            successfully: true
                        })
                        this.setState({
                            email: "",
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
    }
    render()
    {
        return(
            <div className="auth mt-5">
                <div className="container auth-controller d-flex justify-content-center align-items-center">
                    <div className="card mt-5">
                        <div className="mt-3 text-center">
                            <h3>Enter your email</h3>
                        </div>
                        {this.state.message && (
                            <div className={this.state.successfully ?
                                "alert alert-success text-center mx-4" :
                                "alert alert-danger text-center mx-4"} role="alert">
                                {this.state.message}
                            </div>
                        )}
                        <div className="p-3 px-4 py-4 border-bottom">
                            <form onSubmit={this.handleSubmit}>
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control mb-4" placeholder="Email" />
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
export default PasswordEmail
