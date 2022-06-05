import * as React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage';
import ListingPage from './Pages/ListingPage';
import ListingUpdate from './Pages/ListingUpdate';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PasswordEmail from './Pages/PasswordEmail';
import PasswordReset from './Pages/PasswordReset';
import ThankYou from './Pages/ThankYou';
import ProfilePage from './Pages/ProfilePage';
import ProfileUpdate from './Pages/ProfileUpdate';
import ErrorPage from './Pages/Error';
export default class App extends React.Component<any, any>
{
    render(){
        return(
            <div className="body">
                <Router>
                    <Routes>
                        <Route path={"/"} element={ <HomePage />}></Route>
                        <Route path={"/Listings"} element={ <ListingPage />}></Route>
                        <Route path={"/ListingUpdate"} element={ <ListingUpdate />}></Route>
                        <Route path={"/Login"} element={ <Login />}></Route>
                        <Route path={"/Register"} element={ <Register />}></Route>
                        <Route path={"/PasswordEmail"} element={ <PasswordEmail />}></Route>
                        <Route path={"/PasswordReset"} element={ <PasswordReset />}></Route>
                        <Route path={"/ThankYou"} element={ <ThankYou />}></Route>
                        <Route path={"/Profile"} element={ <ProfilePage />}></Route>
                        <Route path={"/ProfileUpdate"} element={ <ProfileUpdate />}></Route>
                        <Route path={"/Error"} element={ <ErrorPage />}></Route>
                    </Routes>
                </Router>
            </div>
        )
    }
}
