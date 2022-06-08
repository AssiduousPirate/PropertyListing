import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
import NavPage from './Components/Nav'
import Footer from './Components/Footer'
import ListingPage from './Pages/ListingPage'
import CreateProfile from './Pages/CreateProfile'
import CreateListing from './Pages/CreateListing'
import AgentsPages from './Pages/AgentsPages'
import ScrollToTop from './Components/ScrollToTop'
export default class App extends React.Component
{
    render(){
        return(
            <div className="body">
                <Router>
                    <ScrollToTop>
                    <NavPage />
                        <Routes>
                            <Route path={"/"} element={ <HomePage />}></Route>
                            <Route path={"/CreateListing"} element={ <CreateListing />}></Route>
                            <Route path={"/Listings"} element={ <Homes />}></Route>
                            <Route path={"/ListingPage"} element={ <ListingPage /> }></Route>
                            <Route path={"/ListingUpdate"} element={ <ListingUpdate />}></Route>
                            <Route path={"/CreateProfile"} element={ <CreateProfile />}></Route>
                            <Route path={"/Profile"} element={ <ProfilePage />}></Route>
                            <Route path={"/ProfileUpdate"} element={ <ProfileUpdate />}></Route>
                            <Route path={"/Agents"} element={ <AgentsPages /> }></Route>
                            <Route path={"/Search"} element={ <Search />}></Route>
                            <Route path={"/Contact"} element={ <Contact />}></Route>
                            <Route path={"/Error"} element={ <ErrorPage />}></Route>
                            <Route path={"/Login"} element={ <Login />}></Route>
                            <Route path={"/Register"} element={ <Register />}></Route>
                            <Route path={"/PasswordEmail"} element={ <PasswordEmail />}></Route>
                            <Route path={"/PasswordReset"} element={ <PasswordReset />}></Route>
                            <Route path={"/ThankYou"} element={ <ThankYou />}></Route>
                        </Routes>
                    <Footer />
                    </ScrollToTop>
                </Router>
            </div>
        )
    }
}
