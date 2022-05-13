import React, {useEffect, useState} from 'react';
import {Read} from "../../APIServices/CRUDServices";
import FullScreenLoader from "../Common/FullScreenLoader";

const ListTable = () => {

    let [DataList,SetDataList]=useState([]);

    useEffect(()=>{
        Read().then((Result)=>{
            SetDataList(Result)
        })
    },[])


    if(DataList.length>0){
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Image</th>
                        <th>Unit Price</th>
                        <th>Qty</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        DataList.map((item,i)=>{
                            return(
                                <tr>
                                    <td>{item.ProductName}</td>
                                    <td>{item.ProductCode}</td>
                                    <td><img className="list-img" src={item.Img} alt=""/></td>
                                    <td>{item.UnitPrice}</td>
                                    <td>{item.Qty}</td>
                                    <td>{item.TotalPrice}</td>
                                    <td>
                                        <button className="btn btn-danger mx-1">Delete</button>
                                        <button className="btn btn-primary mx-1">Update</button>
                                    </td>

                                </tr>
                            )
                        })

                    }
                    </tbody>
                </table>
            </div>
        );
    }
    else{
        return (
            <div>
                <FullScreenLoader/>
            </div>
        )
    }


};

export default ListTable;