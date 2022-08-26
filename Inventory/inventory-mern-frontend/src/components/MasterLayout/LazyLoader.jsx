import React from 'react';
const LazyLoader = () => {
    return (
        <div className="LoadingOverlay">
            <div className="Line-Progress">
                <div className="indeterminate"/>
            </div>
        </div>
    );
};
export default LazyLoader;