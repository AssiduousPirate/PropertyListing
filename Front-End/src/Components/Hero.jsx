import * as React from "react"
import { Link } from "react-router-dom"
import backgroundImage1 from "../Assets/img/slide-1.jpg"
import backgroundImage2 from "../Assets/img/slide-2.jpg"
import backgroundImage3 from "../Assets/img/slide-3.jpg"
class Hero extends React.Component
{
    render()
    {
        return(
            <div>
                <div className="intro intro-carousel position-relative">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide carousel-item-a bg-image intro-item" style={{ backgroundImage: `url(${backgroundImage1})` }}>
                            <div className="overlay overlay-a"></div>
                            <div className="intro-content display-table">
                                <div className="table-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="intro-body">
                                                    <p className="intro-title-top">Doral, Florida
                                                    <br /> 78345
                                                    </p>
                                                    <h1 className="intro-title mb-4 ">
                                                        <span className="color-b">204 </span> Mount
                                                        <br /> Olive Road Two
                                                    </h1>
                                                    <p className="intro-subtitle intro-price">
                                                        <Link className="text-decoration-none text-white" to="/ListingPage"><span className="price-a">rent | $ 12.000</span></Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
export default Hero
