import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import SupplierList from "../../components/Supplier/SupplierList";

const SupplierListPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <SupplierList/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default SupplierListPage;