import * as React from "react"
class CreateProfile extends React.Component{
    render(){
        return(
            <div className="p-5 m-5">
                <form className="p-5 m-5">
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <label class="form-label">First name</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <label class="form-label">Last name</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label">Company name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label">Address</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label">Phone</label>
                        <input type="number" class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label">Additional information</label>
                        <textarea class="form-control" cols={45} rows={8}></textarea>
                    </div>
                    <div class="form-check d-flex justify-content-center mb-4">
                        <input class="form-check-input me-2" type="checkbox" value="" checked />
                        <label class="form-check-label"> Create an account? </label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mb-4">Create</button>
                </form>
            </div>
        )
    }
}
export default CreateProfile
