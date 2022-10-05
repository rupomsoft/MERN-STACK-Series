import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import SupplierCreateUpdate from "../../components/Supplier/SupplierCreateUpdate";

const SupplierCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <SupplierCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default SupplierCreateUpdatePage;