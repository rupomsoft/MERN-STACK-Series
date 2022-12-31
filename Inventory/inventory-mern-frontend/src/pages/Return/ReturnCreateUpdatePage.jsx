import React, {Fragment, Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import ReturnCreateUpdate from "../../components/Return/ReturnCreateUpdate";

const ReturnCreateUpdatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ReturnCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ReturnCreateUpdatePage;