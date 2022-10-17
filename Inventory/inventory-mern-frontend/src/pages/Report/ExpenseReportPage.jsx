import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import ExpenseReport from "../../components/Report/ExpenseReport";

const ExpenseReportPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                        <ExpenseReport/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ExpenseReportPage;