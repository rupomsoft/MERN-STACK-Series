import React, {Fragment} from 'react';
import MasterLayout from "../components/masterLayout/masterLayout";
import {Container} from "react-bootstrap";

const CreatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Container fluid={true} className="content-body">

                </Container>
            </MasterLayout>
        </Fragment>
    );
};

export default CreatePage;