import * as React from "react"
const API_URL = "http://localhost:4000/Listings"
class CreateListing extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Location: "",
            Type: "",
            Area: "",
            Status: "",
            Beds: "",
            Baths: "",
            Garage: "",
            Price: "",
            Amenities: "",
            Photo: "",
            Video: "",
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
        if(this.state.Location === " " && this.state.Location === null){
            this.setState({
                message: "Location is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateListing")
            window.location.reload()
        }
        if(this.state.Type === " " && this.state.Type === null){
            this.setState({
                message: "Property Type is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateListing")
            window.location.reload()
        }
        if(this.state.Area === " " && this.state.Area === null){
            this.setState({
                message: "Area is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateListing")
            window.location.reload()
        }
        if(this.state.Status === " " && this.state.Status === null){
            this.setState({
                message: "Status is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateListing")
            window.location.reload()
        }
        if(this.state.Beds === " " && this.state.Beds === null){
            this.setState({
                message: "Beds are Importent!",
                successfully: true
            })
            this.props.history.push("/CreateListing")
            window.location.reload()
        }
        if(this.state.Baths === " " && this.state.Baths === null){
            this.setState({
                message: "Baths are Importent!",
                successfully: true
            })
            this.props.history.push("/CreateListing")
            window.location.reload()
        }
        if(this.state.Garage === " " && this.state.Garage === null){
            this.setState({
                message: "Garage is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateListing")
            window.location.reload()
        }
        if(this.state.Price === " " && this.state.Price === null){
            this.setState({
                message: "Price is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateListing")
            window.location.reload()
        }
        if(this.state.Amenities === " " && this.state.Amenities === null){
            this.setState({
                message: "Amenities is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateListing")
            window.location.reload()
        }
        if(this.state.Photo === " " && this.state.Photo === null){
            this.setState({
                message: "Photo is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateListing")
            window.location.reload()
        }
        if(this.state.Video === " " && this.state.Video === null){
            this.setState({
                message: "Video is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateListing")
            window.location.reload()
        }
        if(this.state.AdditionalInfo === " " && this.state.AdditionalInfo === null){
            this.setState({
                message: "AdditionalInfo is Importent!",
                successfully: true
            })
            this.props.history.push("/CreateListing")
            window.location.reload()
        }
        const body = {
            Location: this.state.Location,
            Type: this.state.Type,
            Area: this.state.Area,
            Status: this.state.Status,
            Beds: this.state.Beds,
            Baths: this.state.Baths,
            Garage: this.state.Garage,
            Price: this.state.Price,
            Amenities: this.state.Amenities,
            Photo: this.state.Photo,
            Video: this.state.Video,
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
                    alert("Property Listed Successfully")
                    this.setState({
                        message: "Property Listed Successfully",
                        successfully: true
                    })
                    this.setState({
                        Location: "",
                        Type: "",
                        Area: "",
                        Status: "",
                        Beds: "",
                        Baths: "",
                        Garage: "",
                        Price: "",
                        Amenities: "",
                        Photo: "",
                        Video: "",
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
            {this.state.message && (
                <div className={this.state.successfully ?
                    "alert alert-success text-success text-center" :
                    "alert alert-danger text-danger text-center"} role="alert">
                    {this.state.message}
                </div>
            )}
                <form className="p-5 m-5" onSubmit={ this.handleSubmit }>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label">Location</label>
                                <input type="text" name="Location" value={this.state.Location} onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label">Property Type</label>
                                <select className="form-control" name="Type" value={this.state.Type} onChange={this.handleChange} type="select">
                                    <option disabled selected>Home Type</option>
                                    <option value="House">House</option>
                                    <option value="Bungalow">Bungalow</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Farmhouse">Farmhouse</option>
                                    <option value="Mansion">Mansion</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label">Area</label>
                                <input type="text" name="Area" value={this.state.Area} onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label">Status</label>
                                <select className="form-control" name="Status" value={this.state.Status} onChange={this.handleChange} type="select">
                                    <option disabled selected>Status</option>
                                    <option value="Sale">Sale</option>
                                    <option value="Rent">Rent</option>
                                    <option value="Contract">Contract</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label">Beds</label>
                                <select className="form-control" name="Beds" value={this.state.Beds} onChange={this.handleChange} type="select">
                                    <option disabled selected>Beds</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label">Baths</label>
                                <select className="form-control" name="Baths" value={this.state.Baths} onChange={this.handleChange} type="select">
                                    <option disabled selected>Baths</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label">Garage</label>
                                <select className="form-control" name="Garage" value={this.state.Garage} onChange={this.handleChange} type="select">
                                    <option disabled selected>Garage</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline mb-4">
                                <label className="form-label">Price</label>
                                <input type="number" name="Price" value={this.state.Price} onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline mb-4">
                                <label className="form-label">Amenities</label>
                                <select className="form-control" name="Amenities" value={this.state.Amenities} onChange={this.handleChange} type="select">
                                    <option disabled selected>Amenities</option>
                                    <option value="Concrete Flooring">Concrete Flooring</option>
                                    <option value="Sun Room">Sun Room</option>
                                    <option value="Parking">Parking</option>
                                    <option value="Internet">Internet</option>
                                    <option value="Tennis Courts">Tennis Courts</option>
                                    <option value="Deck">Deck</option>
                                    <option value="Cable Tv">Cable Tv</option>
                                    <option value="Outdoor Kitchen">Outdoor Kitchen</option>
                                    <option value="Balcony">Balcony</option>
                                    <option value="Elivator">Elivator</option>
                                    <option value="Heater">Heater</option>
                                    <option value="Fans">Fans</option>
                                    <option value="Lights">Lights</option>
                                    <option value="Wi-Fi">Wi-Fi</option>
                                    <option value="TV">TV</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline mb-4">
                                <label className="form-label">Photo</label>
                                <input type="file" name="Photo" value={this.state.Photo} onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline mb-4">
                                <label className="form-label">Video Tour URL</label>
                                <input type="URL" name="Video" value={this.state.Video} onChange={this.handleChange} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label">Additional information</label>
                        <textarea className="form-control" name="AdditionalInfo" value={this.state.AdditionalInfo} onChange={this.handleChange} cols={45} rows={8}></textarea>
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
export default CreateListing
