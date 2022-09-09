import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import ExpenseTypeList from "../../components/ExpenseType/ExpenseTypeList";

const ExpenseTypeListPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ExpenseTypeList/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ExpenseTypeListPage;