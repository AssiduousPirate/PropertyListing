import * as React from "react"
let API_URL = "http://localhost:8000/User/Create"
class CreateProfile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Fname: "",
            Lname: "",
            Desination: "",
            Address: "",
            Phone: "",
            Mobile: "",
            Email: "",
            Skype: "",
            Image: "",
            AdditionalInfo: "",
            message: "",
            successfully: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        if(this.state.Fname === " " && this.state.Fname === null){
            this.setState({
                message: "First Name is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateProfile")
            window.location.reload()
        }
        if(this.state.Lname === " " && this.state.Lname === null){
            this.setState({
                message: "Last Name is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateProfile")
            window.location.reload()
        }
        if(this.state.Desination === " " && this.state.Desination === null){
            this.setState({
                message: "Desination is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateProfile")
            window.location.reload()
        }
        if(this.state.Address === " " && this.state.Address === null){
            this.setState({
                message: "Address is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateProfile")
            window.location.reload()
        }
        if(this.state.Phone === " " && this.state.Phone === null){
            this.setState({
                message: "Phone is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateProfile")
            window.location.reload()
        }
        if(this.state.Mobile === " " && this.state.Mobile === null){
            this.setState({
                message: "Mobile is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateProfile")
            window.location.reload()
        }
        if(this.state.Email === " " && this.state.Email === null){
            this.setState({
                message: "Email is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateProfile")
            window.location.reload()
        }
        if(this.state.Skype === " " && this.state.Skype === null){
            this.setState({
                message: "Skype is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateProfile")
            window.location.reload()
        }
        if(this.state.Image === " " && this.state.Image === null){
            this.setState({
                message: "Image is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateProfile")
            window.location.reload()
        }
        if(this.state.AdditionalInfo === " " && this.state.AdditionalInfo === null){
            this.setState({
                message: "AdditionalInfo is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateProfile")
            window.location.reload()
        }
        const body = {
            Fname: this.state.Fname,
            Lname: this.state.Lname,
            Desination: this.state.Desination,
            Address: this.state.Address,
            Phone: this.state.Phone,
            Mobile: this.state.Mobile,
            Email: this.state.Email,
            Skype: this.state.Skype,
            Image: this.state.Image,
            AdditionalInfo: this.state.AdditionalInfo
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
                    alert("User Craeted Successfully")
                    this.setState({
                        message: "User Craeted Successfully",
                        successfully: true
                    })
                    this.setState({
                        Fname: "",
                        Lname: "",
                        Desination: "",
                        Address: "",
                        Phone: "",
                        Mobile: "",
                        Email: "",
                        Skype: "",
                        Image: "",
                        AdditionalInfo: ""
                    })
                    this.props.history.push("/Profile")
                    window.location.reload()
                }
            })
            .catch((error) => {
                alert("There are some error:" + error)
                this.setState({
                    message: "There are some error:" + error,
                    successfully: false
                })
            })
    }
    render(){
        return(
            <div className="p-5 m-5">
            <div className="title-box-d">
                <h3 className="title-d">Create Profile</h3>
            </div>
                {this.state.message && (
                    <div className={this.state.successfully ?
                        "alert alert-success text-success text-center" :
                        "alert alert-danger text-danger text-center"} role="alert">
                        {this.state.message}
                    </div>
                )}
                <form className="p-5 m-5" onSubmit={this.handleSubmit} method="POST">
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label">First name</label>
                                <input type="text" name="Fname" value={this.state.Fname} onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label">Last name</label>
                                <input type="text" name="Lname" value={this.state.Lname} onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline mb-4">
                                <label className="form-label">Desination</label>
                                <input type="text" name="Desination" value={this.state.Desination} onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline mb-4">
                                <label className="form-label">Address</label>
                                <input type="text" name="Address" value={this.state.Address} onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline mb-4">
                                <label className="form-label">Phone</label>
                                <input type="number" name="Phone" value={this.state.Phone} onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline mb-4">
                                <label className="form-label">Mobile</label>
                                <input type="number" name="Mobile" value={this.state.Mobile} onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline mb-4">
                                <label className="form-label">Email</label>
                                <input type="email" name="Email" value={this.state.Email} onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline mb-4">
                                <label className="form-label">Skype</label>
                                <input type="number" name="Skype" value={this.state.Skype} onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label">Image</label>
                        <input type="file" name="Image" value={this.state.Image} onChange={this.handleChange} className="form-control" />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label">Additional information</label>
                        <textarea type="textarea" name="AdditionalInfo" value={this.state.AdditionalInfo} onChange={this.handleChange} className="form-control" cols={45} rows={80}></textarea>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" value="" checked />
                        <label className="form-check-label"> Create your Property </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-4">Add Property</button>
                </form>
            </div>
        )
    }
}
export default CreateProfile
