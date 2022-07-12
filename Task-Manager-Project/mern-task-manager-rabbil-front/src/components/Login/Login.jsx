import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
const Login = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h5>Sign In</h5>
                                <br/>
                                <input placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <input  placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                                <div className="text-center w-100">
                                    <Link className="text-center animated fadeInUp" to="/Registration">Sign Up</Link>
                                    <br/>
                                    <Link className="text-center animated fadeInUp" to="/Forgetpass">Forget Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Login;