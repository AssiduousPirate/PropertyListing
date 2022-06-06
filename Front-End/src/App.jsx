import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpShortWide } from "@fortawesome/free-solid-svg-icons"
import "./App.css"
import "./Components/Main"
import HomePage from './Pages/HomePage'
import ListingUpdate from './Pages/ListingUpdate'
import Login from './Pages/Login'
import Register from './Pages/Register'
import PasswordEmail from './Pages/PasswordEmail'
import PasswordReset from './Pages/PasswordReset'
import ThankYou from './Pages/ThankYou'
import ProfilePage from './Pages/ProfilePage'
import ProfileUpdate from './Pages/ProfileUpdate'
import ErrorPage from './Pages/Error'
import Homes from './Components/Homes'
import Search from './Components/Search'
import Contact from './Components/Contact'
import Footer from "./Components/Footer"
export default class App extends React.Component
{
    render(){
        return(
            <div className="body">
                <Router>
                    <Routes>
                        <Route path={"/"} element={ <HomePage />}></Route>
                        <Route path={"/Listings"} element={ <Homes />}></Route>
                        <Route path={"/ListingUpdate"} element={ <ListingUpdate />}></Route>
                        <Route path={"/Login"} element={ <Login />}></Route>
                        <Route path={"/Register"} element={ <Register />}></Route>
                        <Route path={"/PasswordEmail"} element={ <PasswordEmail />}></Route>
                        <Route path={"/PasswordReset"} element={ <PasswordReset />}></Route>
                        <Route path={"/ThankYou"} element={ <ThankYou />}></Route>
                        <Route path={"/Profile"} element={ <ProfilePage />}></Route>
                        <Route path={"/ProfileUpdate"} element={ <ProfileUpdate />}></Route>
                        <Route path={"/Search"} element={ <Search />}></Route>
                        <Route path={"/Contact"} element={ <Contact />}></Route>
                        <Route path={"/Error"} element={ <ErrorPage />}></Route>
                    </Routes>
                </Router>
                <Footer />
                {/* <div id="preloader"></div> */}
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={ faArrowUpShortWide } /></a>
            </div>
        )
    }
}
