import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import SalesList from "../../components/Sales/SalesList";

const SalesListPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                        <SalesList/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default SalesListPage;