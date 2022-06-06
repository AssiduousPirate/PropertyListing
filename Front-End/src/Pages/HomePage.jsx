import * as React from "react"
import "../App.css"
import "../index.css"
import '../Components/Main'
import BestAgent from "../Components/BestAgent"
import Hero from "../Components/Hero"
import LatestHome from "../Components/LatestHome"
import NavPage from "../Components/Nav"
class HomePage extends React.Component
{
    render() 
    {
        return(
            <div>
                <NavPage />
                <Hero />
                    <main id="main">
                        <LatestHome />
                        <BestAgent />
                    </main>
            </div>
        )
    }
}
export default HomePage