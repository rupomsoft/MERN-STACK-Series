import React from 'react';
import loader from "../../Assets/img/loader.svg"
const FullScreenLoader = (props) => {
    return (
        <div className={props.isLoading}>
            <div className="ProcessingDiv">
                <div className="center-screen">
                    <img className="loader-size" src={loader}/>
                </div>
            </div>
        </div>
    );
};

export default FullScreenLoader;