import React from 'react';
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="container">
            <div className="row  justify-content-center">
                <div className="col-md-7   col-lg-6 center-screen">
                    <div className="card w-90 p-4">
                        <div className="card-body">
                            <h5>Sign In</h5>
                            <br/>
                            <input placeholder="User Email" className="form-control" type="text"/>
                            <br/>
                            <input placeholder="User Password" className="form-control" type="text"/>
                            <br/>
                            <button className="btn w-100 float-end btn-primary">Next</button>
                             <div className="text-center w-100">
                                 <Link className="text-center" to="/Registration">Sign Up</Link>
                                 <br/>
                                 <Link className="text-center" to="/">Forget Password</Link>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;