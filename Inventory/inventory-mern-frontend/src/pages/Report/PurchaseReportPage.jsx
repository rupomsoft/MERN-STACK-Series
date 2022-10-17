import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import PurchaseReport from "../../components/Report/PurchaseReport";

const PurchaseReportPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <PurchaseReport/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default PurchaseReportPage;