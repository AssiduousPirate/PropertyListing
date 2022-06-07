import * as React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Property1 from "../Assets/img/property-1.jpg"
import Property3 from "../Assets/img/property-3.jpg"
import Property6 from "../Assets/img/property-6.jpg"
import Property7 from "../Assets/img/property-7.jpg"
import Property8 from "../Assets/img/property-8.jpg"
import Property10 from "../Assets/img/property-10.jpg"
class LatestHome extends React.Component
{
    render()
    {
        return(
            <div>
                <section className="section-property section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Latest Properties</h2>
                                    </div>
                                    <div className="title-link">
                                        <Link className="text-decoration-none text-dark" to="/Listings">All Property
                                            <FontAwesomeIcon icon={ faChevronRight } />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="property-grid grid">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card-box-a card-shadow">
                                            <div className="img-box-a">
                                                <img src={ Property1 } alt="" className="img-a img-fluid" />
                                            </div>
                                            <div className="card-overlay">
                                                <div className="card-overlay-a-content">
                                                    <div className="card-header-a">
                                                        <h2 className="card-title-a">
                                                        <Link className="text-decoration-none text-white"  to="/ListingPage">205 Mount
                                                            <br /> Olive Road Two</Link>
                                                        </h2>
                                                    </div>
                                                    <div className="card-body-a">
                                                        <div className="price-box d-flex">
                                                            <span className="price-a">rent | $ 12.000</span>
                                                        </div>
                                                        <Link className="text-decoration-none text-white link-a" to="/ListingPage">Click here to view
                                                            <FontAwesomeIcon icon={ faChevronRight } />
                                                        </Link>
                                                    </div>
                                                    <div className="card-footer-a">
                                                        <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">Area</h4>
                                                            <span>340m
                                                            <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Beds</h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Baths</h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Garages</h4>
                                                            <span>1</span>
                                                        </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-box-a card-shadow">
                                            <div className="img-box-a">
                                                <img src={ Property3 } alt="" className="img-a img-fluid" />
                                            </div>
                                            <div className="card-overlay">
                                                <div className="card-overlay-a-content">
                                                    <div className="card-header-a">
                                                        <h2 className="card-title-a">
                                                        <Link className="text-decoration-none text-white" to="/ListingPage">204 Mount
                                                            <br /> Olive Road Two</Link>
                                                        </h2>
                                                    </div>
                                                    <div className="card-body-a">
                                                        <div className="price-box d-flex">
                                                        <span className="price-a">rent | $ 12.000</span>
                                                        </div>
                                                        <Link className="text-decoration-none text-white link-a" to="/ListingPage">Click here to view
                                                        <FontAwesomeIcon icon={ faChevronRight } />
                                                        </Link>
                                                    </div>
                                                    <div className="card-footer-a">
                                                        <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">Area</h4>
                                                            <span>340m
                                                            <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Beds</h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Baths</h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Garages</h4>
                                                            <span>1</span>
                                                        </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-box-a card-shadow">
                                            <div className="img-box-a">
                                                <img src={ Property6 } alt="" className="img-a img-fluid" />
                                            </div>
                                            <div className="card-overlay">
                                                <div className="card-overlay-a-content">
                                                    <div className="card-header-a">
                                                        <h2 className="card-title-a">
                                                        <Link className="text-decoration-none text-white" to="/ListingPage">204 Mount
                                                            <br /> Olive Road Two</Link>
                                                        </h2>
                                                    </div>
                                                    <div className="card-body-a">
                                                        <div className="price-box d-flex">
                                                        <span className="price-a">rent | $ 12.000</span>
                                                        </div>
                                                        <Link className="text-decoration-none text-white link-a" to="/ListingPage">Click here to view
                                                        <FontAwesomeIcon icon={ faChevronRight } />
                                                        </Link>
                                                    </div>
                                                    <div className="card-footer-a">
                                                        <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">Area</h4>
                                                            <span>340m
                                                            <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Beds</h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Baths</h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Garages</h4>
                                                            <span>1</span>
                                                        </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default LatestHome
