import React, {Fragment} from 'react';
import MasterLayout from "../components/masterLayout/masterLayout";
import {Container, Row} from "react-bootstrap";
import {AiOutlineCalendar, AiOutlineDelete} from "react-icons/all";
import {AiOutlineEdit} from "react-icons/ai";

const DashboardPage = () => {
  return (
    <Fragment>
      <MasterLayout>
          <Container fluid={true} className="content-body">
                <Row>
                    <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 >Total Task</h5>
                                <h6 className="text-secondary">10,00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5  >New Task</h5>
                                <h6 className="text-secondary">10,00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5>Completed Task</h5>
                                <h6 className="text-secondary">10,00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5>Progress Task</h5>
                                <h6 className="text-secondary">10,00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5>Canceled Task</h5>
                                <h6 className="text-secondary">10,00</h6>
                            </div>
                        </div>
                    </div>
                </Row>
           </Container>
      </MasterLayout>
    </Fragment>
  );
};
export default DashboardPage;
