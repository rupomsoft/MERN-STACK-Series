import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import ProductCreateUpdate from "../../components/Product/ProductCreateUpdate";

const ProductCreateUpdatePage = () => {




    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ProductCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ProductCreateUpdatePage;