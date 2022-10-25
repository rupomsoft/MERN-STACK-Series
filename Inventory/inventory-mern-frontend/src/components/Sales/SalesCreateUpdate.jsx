import React, {Fragment, useEffect} from 'react';
import {CustomerDropDownRequest} from "../../APIRequest/SaleAPIRequest";
import {useSelector} from "react-redux";
import store from "../../redux/store/store";
import {OnChangeProductInput} from "../../redux/state-slice/product-slice";



const SalesCreateUpdate = () => {

    useEffect(()=>{
        (async () => {
            await CustomerDropDownRequest();
        })();
    },[])

    let CustomerDropDown=useSelector((state)=>(state.sale.CustomerDropDown));



    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-12 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <h5 >Create Sales</h5>
                                    <hr className="bg-light"/>



                                    <div className="col-4 p-2">
                                        <label className="form-label">Customer</label>
                                        <select  className="form-select form-select-sm">
                                            <option value="">Select Type</option>
                                            {
                                                CustomerDropDown.map((item,i)=>{
                                                    return( <option key={i.toLocaleString()} value={item._id}>{item.CustomerName}</option>)
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div className="col-4 p-2">
                                        <label className="form-label">Vat/Tax</label>
                                        <input  className="form-control form-control-sm" type="number"/>
                                    </div>

                                    <div className="col-4 p-2">
                                        <label className="form-label">Discount</label>
                                        <input  className="form-control form-control-sm" type="number"/>
                                    </div>

                                    <div className="col-4 p-2">
                                        <label className="form-label">OtherCost</label>
                                        <input  className="form-control form-control-sm" type="number"/>
                                    </div>

                                    <div className="col-4 p-2">
                                        <label className="form-label">ShippingCost</label>
                                        <input  className="form-control form-control-sm" type="number"/>
                                    </div>

                                    <div className="col-4 p-2">
                                        <label className="form-label">GrandTotal</label>
                                        <input  className="form-control form-control-sm" type="number"/>
                                    </div>


                                    <div className="col-4 p-2">
                                        <label className="form-label">Note</label>
                                        <input  className="form-control form-control-sm" type="number"/>
                                    </div>


                                </div>
                                <div className="row">
                                    <div className="col-4 p-2">
                                        <button  className="btn btn-sm my-3 btn-success">Create</button>
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

export default SalesCreateUpdate;