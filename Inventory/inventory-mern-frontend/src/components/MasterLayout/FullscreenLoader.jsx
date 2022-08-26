import React, {Fragment} from 'react';
import {useSelector} from "react-redux";
const FullscreenLoader = () => {
    const settings = useSelector((state) => state.settings.loader)
    return (
        <Fragment>
            <div  className={settings + " LoadingOverlay"}>
                <div className="Line-Progress">
                    <div className="indeterminate"/>
                </div>
            </div>
        </Fragment>
    );
};
export default FullscreenLoader;