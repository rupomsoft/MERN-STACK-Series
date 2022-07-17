import React, {Fragment, useRef} from 'react';
import {ErrorToast, IsEmail} from "../../helper/FormHelper";
import {RecoverVerifyEmailRequest} from "../../APIRequest/APIRequest";
import {useNavigate} from "react-router-dom";

const SendOTP = () => {
    let emailRef=useRef();
    let navigate=useNavigate();
    const VerifyEmail=()=>{
        let email=emailRef.value;
        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        }
        else{
            RecoverVerifyEmailRequest(email).then((result)=>{
                if(result===true){
                    navigate("/VerifyOTP")
                }
            })
        }
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4>EMAIL ADDRESS</h4>
                                <br/>
                                <label>Your email address</label>
                                <input ref={(input)=>emailRef=input}  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <button onClick={VerifyEmail}  className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SendOTP;