import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import ProductList from "../../components/Product/ProductList";
const ProductListPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ProductList/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};
export default ProductListPage;