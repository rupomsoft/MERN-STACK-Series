import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import BrandList from "../../components/Brand/BrandList";
const BrandListPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                        <BrandList/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};
export default BrandListPage;