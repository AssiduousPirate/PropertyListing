import * as React from "react"
import "../Components/Auth.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons"
let API_URL = "http://localhost:8080/api/auth/setpass"
class PasswordReset extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            password: "",
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
        const visible = document.querySelector(".visible")
        const unvisible = document.querySelector(".unvisible")
        const input = document.querySelector(".input")
        unvisible.addEventListener("click", () => {
            input.setAttribute("type", "text")
            input.removeAttribute("type", "password")
            visible.style.display = "block"
            unvisible.style.display = "none"
        })
        visible.addEventListener("click", () => {
            input.removeAttribute("type", "text")
            input.setAttribute("type", "password")
            visible.style.display = "none"
            unvisible.style.display = "block"
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
            <div className="auth mt-5 h-full">
                <div className="container auth-controller d-flex justify-content-center align-items-center">
                    <div className="card mt-5">
                        <div className="text-center mt-3">
                            <h3>Set password</h3>
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
                                <div className="form">
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control mb-4 input" placeholder="Password" />
                                    <FontAwesomeIcon className="icons visible" onChange={this.handleChange} icon={ faEye } />
                                    <FontAwesomeIcon className="icons unvisible" onChange={this.handleChange} icon={ faEyeSlash } />
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <button className="btn btn-danger btn-block continue">Continue</button>
                                </div>
                            </form>
                        </div>
                        <div className="p-3 d-flex flex-row justify-content-center align-items-center member">
                            <span>Back to? </span>
                            <Link to="/Login" className="text-decoration-none ml-2">Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PasswordReset
