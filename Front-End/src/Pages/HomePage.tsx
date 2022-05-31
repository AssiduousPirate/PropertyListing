import * as React from "react"
import { Link } from "react-router-dom"
class HomePage extends React.Component<any, any>
{
    render(): React.ReactNode 
    {
        return(
            <div>
                <h1 className={"text-center pt-20 text-medium text-red-300"}>Home Page</h1>
                <Link className={"text-center pt-20 text-medium text-red-300"} to={"/Listings"}>Listings Page</Link>
                <br />
                <Link className={"text-center pt-20 text-medium text-red-300"} to={"/Register"}>Register Page</Link>
            </div>
        )
    }
}
export default HomePage