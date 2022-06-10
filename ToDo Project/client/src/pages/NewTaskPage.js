import React, {Fragment, useState} from 'react';
import MasterLayout from "../components/masterLayout/masterLayout";
import {Button, Container, Modal} from "react-bootstrap";
import {AiOutlineCalendar, AiOutlineDelete} from "react-icons/all";
import {AiOutlineEdit} from "react-icons/ai";
import Swal from 'sweetalert2';

const NewTaskPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }


    const DeleteAlert = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#CB0C9F',
            cancelButtonColor: '#344767',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <Fragment>
            <MasterLayout>
                <Container fluid={true} className="content-body">
                    <div className="row p-0 m-0">
                        <div className="col-12 col-md-6 col-lg-8 px-3">
                            <h5>Task Completed</h5>
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
                                        <a onClick={handleShow} className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a onClick={DeleteAlert} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className="badge float-end bg-info">New</a>
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
                                        <a onClick={handleShow}  className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a onClick={DeleteAlert} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className="badge float-end bg-info">New</a>
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
                                        <a onClick={handleShow}  className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a onClick={DeleteAlert} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className="badge float-end bg-info">New</a>
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
                                        <a onClick={handleShow}  className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a onClick={DeleteAlert} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className="badge float-end bg-info">New</a>
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
                                        <a onClick={handleShow}  className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a onClick={DeleteAlert} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className="badge float-end bg-info">New</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </MasterLayout>

            <Modal animation={false} className="animated zoomIn " centered  backdrop="static" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h5>Change Status</h5>
                </Modal.Header>
                <Modal.Body>
                    <select className="form-select form-control">
                        <option value="">Select Status</option>
                        <option value="New">New</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Canceled">Canceled</option>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </Fragment>
    );
};

export default NewTaskPage;