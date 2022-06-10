import React, {Fragment} from 'react';
import MasterLayout from "../components/masterLayout/masterLayout";
import {Container, Row} from "react-bootstrap";

const CreatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Container fluid={true} className="content-body">
                    <Row className="d-flex justify-content-center">
                        <div className="col-12 col-lg-8 col-sm-12 col-md-8  p-2">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h4 >Create New</h4>
                                    <br/>
                                    <input placeholder="Task Name" className="form-control" type="text"/>
                                    <br/>
                                    <textarea rows={5} placeholder="Task Description" className="form-control" type="text"/>
                                    <br/>
                                    <button className="btn float-end btn-primary">Create</button>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </MasterLayout>
        </Fragment>
    );
};

export default CreatePage;