import React, {Fragment} from 'react';
const FullscreenLoader = () => {
    return (
        <Fragment>
            <div  className={"LoadingOverlay d-none"}>
                <div className="Line-Progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        </Fragment>
    );
};
export default FullscreenLoader;