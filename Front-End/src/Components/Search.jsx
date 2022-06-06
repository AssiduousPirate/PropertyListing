import * as React from "react"
class Search extends React.Component
{
    render()
    {
        return(
            <div>
                <main id="main">
                    <section className="intro-single">
                        <div className="container">
                            <div className="title-box-d">
                                <h3 className="title-d">Search Property</h3>
                            </div>
                            <div className="form">
                                <form className="form-a">
                                    <div className="row">
                                        <div className="col-md-12 mb-2">
                                            <div className="form-group">
                                                <label className="pb-2">Keyword</label>
                                                <input type="text" className="form-control form-control-lg form-control-a" placeholder="Keyword" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="form-group mt-3">
                                                <label className="pb-2">Type</label>
                                                <select className="form-control form-select form-control-a" id="Type">
                                                    <option>All Type</option>
                                                    <option>For Rent</option>
                                                    <option>For Sale</option>
                                                    <option>Open House</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="form-group mt-3">
                                                <label className="pb-2">City</label>
                                                <select className="form-control form-select form-control-a" id="city">
                                                    <option>All City</option>
                                                    <option>Alabama</option>
                                                    <option>Arizona</option>
                                                    <option>California</option>
                                                    <option>Colorado</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="form-group mt-3">
                                                <label className="pb-2">Bedrooms</label>
                                                <select className="form-control form-select form-control-a" id="bedrooms">
                                                    <option>Any</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="form-group mt-3">
                                                <label className="pb-2">Garages</label>
                                                <select className="form-control form-select form-control-a" id="garages">
                                                    <option>Any</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                    <option>04</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="form-group mt-3">
                                                <label className="pb-2">Bathrooms</label>
                                                <select className="form-control form-select form-control-a" id="bathrooms">
                                                    <option>Any</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-2">
                                            <div className="form-group mt-3">
                                                <label className="pb-2">Min Price</label>
                                                <select className="form-control form-select form-control-a" id="price">
                                                    <option>Unlimite</option>
                                                    <option>$50,000</option>
                                                    <option>$100,000</option>
                                                    <option>$150,000</option>
                                                    <option>$200,000</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-b">Search Property</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
export default Search