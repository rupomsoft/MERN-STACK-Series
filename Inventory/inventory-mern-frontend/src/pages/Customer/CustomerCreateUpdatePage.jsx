import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import CustomerCreateUpdate from "../../components/Customer/CustomerCreateUpdate";

const CustomerCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <CustomerCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CustomerCreateUpdatePage;