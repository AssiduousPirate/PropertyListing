import * as React from "react"
let API_URL = "http://localhost:8080/api/auth/ResetPassword"
class PasswordEmail extends React.Component<any, any>
{
    constructor(props: any){
        super(props)
        this.state = {
            email: "",
            message: "",
            successfully: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event: any){
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event: any){
        event.preventDefault()
        if(this.state.email === " " && this.state.email === null){
            this.setState({
                message: "Email is Required",
                successfully: false
            })
            const body = {
                email: this.state.email,
            }
            console.log(body)
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(body),
            }
            fetch(API_URL, requestOptions)
                .then((response) => {
                    return response.json()
                })
                .then((results) => {
                    if(results){
                        this.setState({
                            message: "Email Sent Successfully",
                            successfully: true
                        })
                        this.setState({
                            email: "",
                        })
                        window.location.reload()
                    }
                })
                .catch((error) => {
                    console.log("There are some error" + ":" + error)
                    this.setState({
                        message: "There are some error" + ":" + error,
                        successfully: false
                    })
                })
        }
    }
    render(): React.ReactNode 
    {
        return(
            <div>
                <section className="bg-[#F4F7FF] pl-12">
                    <div className="container">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4">
                                <div className="max-w-[525px] mx-auto text-center bg-white rounded-lg relative overflow-hidden py-16 px-10 sm:px-12 md:px-[60px]">
                                    <div className="mb-10 md:mb-16 text-center">
                                        <div className="inline-block max-w-[160px] mx-auto">
                                            <h2 className={"text-2xl font-semibold text-[#adadad]"}>Enter Email</h2>
                                        </div>
                                    </div>
                                    <div className={this.state.successfully ? 
                                        "bg-green-200 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3" : 
                                        "bg-red-200 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"} role="alert">
                                        {this.state.message}
                                    </div>
                                    <form onSubmit={this.handleSubmit} method="POST">
                                        <div className="mb-6">
                                            <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} className="w-full rounded-md border border-[#E9EDF4] py-3 px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-blue-500 " />
                                        </div>
                                        <div className="mb-10">
                                            <input type="submit" value="Sent" className="w-full rounded-md border border-blue-500 py-3 px- bg-blue-500 text-base text-white cursor-pointer hover:bg-opacity-90 transition" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default PasswordEmail