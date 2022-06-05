import * as React from "react"
import { Link } from "react-router-dom"
class ThankYou extends React.Component
{
    render() 
    {
        return(
            <div>
                <section className="bg-blue-500 py-[208px]">
                    <div className="container">
                        <div className="mx-4">
                            <div className="w-full">
                                <div className="mx-auto max-w-[400px] text-center">
                                    <h3 className="font-bold text-white mb-2 text-[50px] sm:text-[80px] md:text-[100px] leading-none">Thank You</h3>
                                    <h4 className="text-white font-semibold text-[22px] leading-tight mb-3">We welcome you Here</h4>
                                    <p className="text-lg text-white mb-8">Now check you email for further process!</p>
                                    <Link to="/" className="text-base font-semibold text-white inline-block text-center border border-white rounded-lg px-8 py-3 hover:bg-white hover:text-blue-500 transition">Go To Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default ThankYou