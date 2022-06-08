import * as React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
class NavPage extends React.Component
{
    render()
    {
        return(
            <div>
                <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                    <div className="container">
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <Link className="navbar-brand text-brand text-decoration-none text-dark" to={"/"}>Espana<span className="color-b">CR7</span>Agency</Link>
                        <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" to={"/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/Listings"}>Property</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/CreateProfile"}>Add Property</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/Contact"}>Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/Login"}>Login</Link>
                                </li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                            <Link className="text-decoration-none text-white" to="/Search">
                                <FontAwesomeIcon icon={ faSearch } />
                            </Link>
                        </button>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavPage
