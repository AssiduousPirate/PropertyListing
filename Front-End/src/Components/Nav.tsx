import * as React from "react"
import { Link } from "react-router-dom"
class NavPage extends React.Component<any, any>
{
    render(): React.ReactNode {
        return(
            <div>
                <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                    <div className="container">
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <Link className="navbar-brand text-brand" to={"/"}>Estate<span className="color-b">Agency</span></Link>
                        <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link " to={"/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to={"/Listings"}>Property</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to={"/AddProperty"}>Add Property</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to={"/Contact"}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavPage