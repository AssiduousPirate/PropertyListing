import * as React from "react"
import { Link } from "react-router-dom"
class Footer extends React.Component<any, any>
{
    render(): React.ReactNode {
        return(
            <div>
                <section className="section-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <div className="widget-a">
                                    <div className="w-header-a">
                                        <h3 className="w-title-a text-brand">EstateAgency</h3>
                                    </div>
                                    <div className="w-body-a">
                                        <p className="w-text-a color-text-a">
                                            Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis
                                            sed aute irure.
                                        </p>
                                    </div>
                                    <div className="w-footer-a">
                                        <ul className="list-unstyled">
                                            <li className="color-a">
                                                <span className="color-text-a">Phone .</span> contact@example.com
                                            </li>
                                            <li className="color-a">
                                                <span className="color-text-a">Email .</span> +54 356 945234
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 section-md-t3">
                                <div className="widget-a">
                                    <div className="w-header-a">
                                        <h3 className="w-title-a text-brand">The Company</h3>
                                    </div>
                                    <div className="w-body-a">
                                        <div className="w-body-a">
                                            <ul className="list-unstyled">
                                                <li className="item-list-a">
                                                    <i className="bi bi-chevron-right"></i> <Link to="#">Site Map</Link>
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="bi bi-chevron-right"></i> <Link to="#">Legal</Link>
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="bi bi-chevron-right"></i> <Link to="#">Agent Admin</Link>
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="bi bi-chevron-right"></i> <Link to="#">Careers</Link>
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="bi bi-chevron-right"></i> <Link to="#">Affiliate</Link>
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="bi bi-chevron-right"></i> <Link to="#">Privacy Policy</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 section-md-t3">
                                <div className="widget-a">
                                    <div className="w-header-a">
                                        <h3 className="w-title-a text-brand">International sites</h3>
                                    </div>
                                    <div className="w-body-a">
                                        <ul className="list-unstyled">
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <Link to="#">Venezuela</Link>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <Link to="#">China</Link>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <Link to="#">Hong Kong</Link>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <Link to="#">Argentina</Link>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <Link to="#">Singapore</Link>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="bi bi-chevron-right"></i> <Link to="#">Philippines</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="socials-a">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <Link to="#">
                                                <i className="bi bi-facebook" aria-hidden="true"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#">
                                                <i className="bi bi-twitter" aria-hidden="true"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#">
                                                <i className="bi bi-instagram" aria-hidden="true"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#">
                                                <i className="bi bi-linkedin" aria-hidden="true"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright-footer">
                                    <p className="copyright color-text-a">
                                        &copy; Copyright
                                        <span className="color-a">EstateAgency</span> All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer