import * as React from "react"
import BestAgent from "../Components/BestAgent"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import LatestHome from "../Components/LatestHome"
import NavPage from "../Components/Nav"
import Search from "../Components/Search"
class HomePage extends React.Component<any, any>
{
    render(): React.ReactNode 
    {
        return(
            <div>
                <div className="click-closed"></div>
                <NavPage />
                <Search />
                <Hero />
                    <main id="main">
                        <LatestHome />
                        <BestAgent />
                    </main>
                    <Footer />
                <div id="preloader"></div>
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
            </div>
        )
    }
}
export default HomePage