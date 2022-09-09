import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import CustomerList from "../../components/Customer/CustomerList";
const CustomerListPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <CustomerList/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CustomerListPage;