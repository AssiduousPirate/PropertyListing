import * as React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Property1 from "../Assets/img/property-1.jpg"
import Property3 from "../Assets/img/property-3.jpg"
import Property6 from "../Assets/img/property-6.jpg"
import Property7 from "../Assets/img/property-7.jpg"
import Property8 from "../Assets/img/property-8.jpg"
import Property10 from "../Assets/img/property-10.jpg"
class Homes extends React.Component
{
    render(){
        return(
            <div>
                <main id="main">
                    <section className="intro-single">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                            <h1 className="title-single">Our Amazing Properties</h1>
                            <span className="color-text-a">Grid Properties</span>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                <Link className="text-decoration-none text-dark" to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                Properties
                                </li>
                            </ol>
                            </nav>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="property-grid grid">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-12">
                            <div className="grid-option">
                            <form>
                                <select className="custom-select">
                                <option selected>All</option>
                                <option value="1">New to Old</option>
                                <option value="2">For Rent</option>
                                <option value="3">For Sale</option>
                                </select>
                            </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-box-a card-shadow">
                            <div className="img-box-a">
                                <img src={ Property1 } alt="" className="img-a img-fluid" />
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
                                <img src={ Property3 } alt="" className="img-a img-fluid" />
                            </div>
                            <div className="card-overlay">
                                <div className="card-overlay-a-content">
                                <div className="card-header-a">
                                    <h2 className="card-title-a">
                                    <Link className="text-decoration-none text-white"  to="/ListingPage">204 Mount
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
                        <div className="col-md-4">
                            <div className="card-box-a card-shadow">
                            <div className="img-box-a">
                                <img src={ Property7 } alt="" className="img-a img-fluid" />
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
                                <img src={ Property8 } alt="" className="img-a img-fluid" />
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
                                <img src={ Property10 } alt="" className="img-a img-fluid" />
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
                        <div className="row">
                        <div className="col-sm-12">
                            <nav className="pagination-a">
                            <ul className="pagination justify-content-end">
                                <li className="page-item disabled">
                                <Link className="text-decoration-none text-white" className="page-link" to="#" tabindex="-1">
                                <FontAwesomeIcon icon={ faChevronLeft } />
                                </Link>
                                </li>
                                <li className="page-item">
                                <Link className="text-decoration-none text-white" className="page-link" to="#">1</Link>
                                </li>
                                <li className="page-item active">
                                <Link className="text-decoration-none text-white" className="page-link" to="#">2</Link>
                                </li>
                                <li className="page-item">
                                <Link className="text-decoration-none text-white" className="page-link" to="#">3</Link>
                                </li>
                                <li className="page-item next">
                                <Link className="text-decoration-none text-white" className="page-link" to="#">
                                    <FontAwesomeIcon icon={ faChevronRight } />
                                </Link>
                                </li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                    </div>
                    </section>
                </main>
            </div>
        )
    }
}
export default Homes
