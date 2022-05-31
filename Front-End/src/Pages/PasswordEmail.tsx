import * as React from "react"
class PasswordEmail extends React.Component<any, any>
{
    render(): React.ReactNode 
    {
        return(
            <div>
                <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
                    <div className="container">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4">
                                <div className="max-w-[525px] mx-auto text-center bg-white rounded-lg relative overflow-hidden py-16 px-10 sm:px-12 md:px-[60px]">
                                    <div className="mb-10 md:mb-16 text-center">
                                        <div className="inline-block max-w-[160px] mx-auto">
                                            <h2 className={"text-2xl font-semibold text-[#adadad]"}>Enter Email</h2>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="mb-6">
                                            <input type="email" placeholder="Email" className="w-full rounded-md border border-[#E9EDF4] py-3 px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-blue-500 " />
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