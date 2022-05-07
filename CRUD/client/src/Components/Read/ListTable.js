import React, {useEffect, useState} from 'react';
import {Read} from "../../APIServices/CRUDServices";

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
              <table className="table">
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
                  {           DataList.map((item,i)=>{
                      return(
                          <tr>
                              <th>Product Name</th>
                              <th>Product Code</th>
                              <th>Image</th>
                              <th>Unit Price</th>
                              <th>Qty</th>
                              <th>Total Price</th>
                              <th>Action</th>
                          </tr>
                      )
                  })}
                  </tbody>
              </table>
          </div>
      );
  }
  else {
      return (
          <div>

          </div>
      );
  }
};

export default ListTable;