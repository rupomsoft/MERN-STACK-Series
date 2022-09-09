import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import ExpenseList from "../../components/Expense/ExpenseList";

const ExpenseListPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                        <ExpenseList/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ExpenseListPage;