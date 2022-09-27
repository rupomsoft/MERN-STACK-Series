import React, {Fragment} from 'react';
import {useSelector} from "react-redux";
import {OnChangeCustomerInput} from "../../redux/state-slice/customer-slice";
import store from "../../redux/store/store";
import {CreateCustomer} from "../../APIRequest/CustomerAPIRequest";

const CustomerCreateUpdate = () => {

    let FormValue=useSelector((state)=>(state.customer.FormValue));

    const SaveChange = async () => {
       await CreateCustomer(FormValue)
    }


    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <h5 >New Customer</h5>
                                    <hr className="bg-light"/>
                                    <div className="col-4 p-2">
                                        <label className="form-label">Customer Name</label>
                                        <input onChange={(e)=>{store.dispatch(OnChangeCustomerInput({Name:"CustomerName",Value:e.target.value}))}} value={FormValue.CustomerName} className="form-control form-control-sm" type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label className="form-label">Mobile No</label>
                                        <input onChange={(e)=>{store.dispatch(OnChangeCustomerInput({Name:"Phone",Value:e.target.value}))}} value={FormValue.Phone} className="form-control form-control-sm" type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label className="form-label">Email </label>
                                        <input onChange={(e)=>{store.dispatch(OnChangeCustomerInput({Name:"Email",Value:e.target.value}))}} value={FormValue.Email} className="form-control form-control-sm" type="text"/>
                                    </div>
                                    <div className="col-12 p-2">
                                        <label className="form-label">Address</label>
                                        <textarea onChange={(e)=>{store.dispatch(OnChangeCustomerInput({Name:"Address",Value:e.target.value}))}} value={FormValue.Address} className="form-control form-control-sm" rows={4}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4 p-2">
                                        <button onClick={SaveChange} className="btn btn-sm my-3 btn-success">Save Change</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CustomerCreateUpdate;