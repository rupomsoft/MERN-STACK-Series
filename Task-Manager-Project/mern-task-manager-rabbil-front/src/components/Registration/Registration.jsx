import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {ErrorToast, IsEmail, IsEmpty, IsMobile} from "../../helper/FormHelper";
import {RegistrationRequest} from "../../APIRequest/APIRequest";

const Registration = () => {
    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef=useRef();

    let navigate=useNavigate();

    const onRegistration = () => {

        let email=emailRef.value;
        let fastName=firstNameRef.value;
        let lastName=lastNameRef.value;
        let mobile=mobileRef.value;
        let password= passwordRef.value;

        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        }
        else if(IsEmpty(fastName)){
            ErrorToast("First Name Required !")
        }
        else if(IsEmpty(lastName)){
            ErrorToast("Last Name Required !")
        }
        else if(!IsMobile(mobile)){
            ErrorToast("Valid Mobile  Required !")
        }
        else if(IsEmpty(password)){
            ErrorToast("Password Required !")
        }
        else{
            RegistrationRequest(email,fastName,lastName,mobile,password,"").then((result)=>{
                if(result===true){
                    navigate("/login")
                }
            })
        }
    }


    return (
        <div className="container">
            <div className="row  justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h5>Sign Up</h5>
                            <br/>
                            <input ref={(input)=>emailRef=input}  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                            <br/>
                            <input ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <input ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <input ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                            <br/>
                            <input ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                            <br/>
                            <button onClick={onRegistration} className="btn w-100 float-end btn-primary animated fadeInUp">Next</button>
                            <div className="text-center w-100">
                                <Link className="text-center" to="/Login">Sign In</Link>
                                <br/>
                                <Link className="text-center" to="/Forgetpass">Forget Password</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Registration;