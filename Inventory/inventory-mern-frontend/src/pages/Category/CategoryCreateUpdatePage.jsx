import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import CategoryCreateUpdate from "../../components/Category/CategoryCreateUpdate";

const CategoryCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <CategoryCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CategoryCreateUpdatePage;