import * as React from "react"
import { Link } from "react-router-dom"
class ListingPage extends React.Component<any, any>
{
    render(): React.ReactNode {
        return(
            <div>
                <h1 className={"text-center pt-20 text-medium text-red-300"}>Listing Page</h1>
                <Link className={"text-center pt-20 text-medium text-red-300"} to={"/ListingUpdate"}>Listing Update Page</Link>
            </div>
        )
    }
}
export default ListingPage