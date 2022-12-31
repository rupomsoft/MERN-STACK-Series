import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import PurchaseCreateUpdate from "../../components/Purchase/PurchaseCreateUpdate";

const PurchaseCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <PurchaseCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default PurchaseCreateUpdatePage;