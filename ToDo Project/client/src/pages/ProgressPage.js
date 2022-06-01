import React, {Fragment} from 'react';
import MasterLayout from "../components/masterLayout/masterLayout";
import {Container} from "react-bootstrap";
import {AiOutlineCalendar, AiOutlineDelete} from "react-icons/all";
import {AiOutlineEdit} from "react-icons/ai";

const ProgressPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Container fluid={true} className="content-body">
                    <div className="row p-0 m-0">
                        <div className="col-12 col-md-6 col-lg-8 px-3">
                            <h5>Task In Progress</h5>
                        </div>
                        <div className="col-12 float-end col-md-6 col-lg-4 px-2">
                            <div className="row">
                                <div className="col-8">
                                    <input className="form-control w-100"/>
                                </div>
                                <div className="col-4">
                                    <button className="btn btn-primary w-100">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-0 m-0">
                        <div className="col-12 col-lg-4 col-sm-6 col-md-4  p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h6>My Task Name</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy </p>
                                    <p className="m-0 p-0">
                                        <AiOutlineCalendar/> 22/03/3022
                                        <a className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className="badge float-end bg-success">Completed</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-sm-6 col-md-4  p-2 ">
                            <div className="card">
                                <div className="card-body">
                                    <h6>My Task Name</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy </p>
                                    <p className="m-0 p-0">
                                        <AiOutlineCalendar/> 22/03/3022
                                        <a className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className="badge float-end bg-success">Completed</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-sm-6 col-md-4  p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h6>My Task Name</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy </p>
                                    <p className="m-0 p-0">
                                        <AiOutlineCalendar/> 22/03/3022
                                        <a className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className="badge float-end bg-success">Completed</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-sm-6 col-md-4  p-2">
                            <div className="card">
                                <div className="card-body">
                                    <h6>My Task Name</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy </p>
                                    <p className="m-0 p-0">
                                        <AiOutlineCalendar/> 22/03/3022
                                        <a className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className="badge float-end bg-success">Completed</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </MasterLayout>
        </Fragment>
    );
};

export default ProgressPage;