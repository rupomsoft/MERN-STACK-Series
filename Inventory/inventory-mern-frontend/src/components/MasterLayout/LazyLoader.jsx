import React, {Fragment} from 'react';
const LazyLoader = () => {
    return (
        <Fragment>
            <div  className="LoadingOverlay">
                <div className="Line-Progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        </Fragment>
    );
};

export default LazyLoader;