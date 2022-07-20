import React, {Fragment, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import {GetProductList} from "../APIRequest/APIRequest";

const ProductList = () => {

    let [searchKeyword,setSearchKeyword]=useState("0");
    let [perPage,setPerPage]=useState(5);

    useEffect(()=>{
        GetProductList(1,perPage,searchKeyword);
    },[])

    let ALLProduct=useSelector((state)=>(state.product.ALLProduct));
    let Total=useSelector((state)=>(state.product.Total))

    const handlePageClick = (event) => {
        GetProductList(event.selected+1,perPage,searchKeyword)
    };

    const searchData=()=>{
        GetProductList(1,perPage,searchKeyword)
    }
    const perPageOnChange=(e)=>{
        setPerPage(parseInt(e.target.value))
        GetProductList(1,e.target.value,searchKeyword)
    }

    const searchKeywordOnChange=(e)=>{
        setSearchKeyword(e.target.value)
        if((e.target.value).length===0){
            setSearchKeyword("0")
            GetProductList(1,perPage,"0")
        }
    }


    return (
        <Fragment>

            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                              <div className="container-fluid">
                                  <div className="row">
                                      <div className="col-6">
                                          <h5>My Product List</h5>
                                      </div>
                                      <div className="col-2">
                                          <select onChange={perPageOnChange} className="form-control mx-2 form-select-sm form-select form-control-sm" >
                                              <option value="5">5 Per Page</option>
                                              <option value="10">10 Per Page</option>
                                              <option value="20">20 Per Page</option>
                                              <option value="30">30 Per Page</option>
                                              <option value="50">50 Per Page</option>
                                              <option value="100">100 Per Page</option>
                                          </select>
                                      </div>
                                      <div className="col-4">
                                          <div className="input-group mb-3">
                                              <input onChange={searchKeywordOnChange} type="text" className="form-control form-control-sm" placeholder="Search.." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                              <button onClick={searchData} className="btn  btn-outline-primary btn-sm mb-0" type="button">Search</button>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-12">
                                          <div className="table-responsive data-table">
                                              <table className="table ">
                                                  <thead className="sticky-top bg-white">
                                                  <tr>
                                                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Product</th>
                                                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Price</th>
                                                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Stock</th>
                                                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Code</th>
                                                  </tr>
                                                  </thead>
                                                  <tbody>
                                                  {
                                                      ALLProduct.map((item,i)=>
                                                          <tr>
                                                              <td>
                                                                  <div className="d-flex px-2 py-1">
                                                                      <div>
                                                                          <img src={item.image} className="avatar me-3"/>
                                                                      </div>
                                                                      <div className="d-flex flex-column justify-content-center">
                                                                          <h6 className="mb-0  text-xs">{item.title}</h6>
                                                                          <p className="text-xs  text-secondary mb-0">{item.category}</p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                              <td>
                                                                  <p className="text-xs font-weight-bold mb-0">{item.brand}</p>
                                                                  <p className="text-xs  text-secondary mb-0">{item.price} Taka </p>
                                                              </td >
                                                              <td>
                                                                  <p className="badge  bg-gradient-success">{item.stock}</p>
                                                              </td>
                                                              <td>
                                                                  <span className="text-secondary text-xs font-weight-bold">{item.product_code}</span>
                                                              </td>
                                                          </tr>
                                                      )
                                                  }


                                                  </tbody>
                                              </table>
                                          </div>
                                      </div>
                                      <div className="col-12 mt-5">
                                          <nav aria-label="Page navigation example">
                                              <ReactPaginate
                                                  previousLabel="<"
                                                  nextLabel=">"
                                                  pageClassName="page-item"
                                                  pageLinkClassName="page-link"
                                                  previousClassName="page-item"
                                                  previousLinkClassName="page-link"
                                                  nextClassName="page-item"
                                                  nextLinkClassName="page-link"
                                                  breakLabel="..."
                                                  breakClassName="page-item"
                                                  breakLinkClassName="page-link"
                                                  pageCount={Total/perPage}
                                                  marginPagesDisplayed={2}
                                                  pageRangeDisplayed={5}
                                                  onPageChange={handlePageClick}
                                                  containerClassName="pagination"
                                                  activeClassName="active"
                                              />
                                          </nav>
                                      </div>
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

export default ProductList;