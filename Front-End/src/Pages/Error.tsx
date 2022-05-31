import * as React from "react"
class ErrorPage extends React.Component<any, any>
{
    render(): React.ReactNode 
    {
        return(
            <h1 className={"text-center pt-20 text-medium text-red-300"}>Error Page</h1>
        )
    }
}
export default ErrorPage