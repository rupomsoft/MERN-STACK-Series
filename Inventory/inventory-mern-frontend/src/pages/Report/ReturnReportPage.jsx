import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import ReturnReport from "../../components/Report/ReturnReport";

const ReturnReportPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ReturnReport/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ReturnReportPage;