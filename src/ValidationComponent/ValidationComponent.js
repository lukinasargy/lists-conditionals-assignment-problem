import React from 'react';
const validation =(props) => {
    return (
        <div className={"validation"}>
            <p>{props.textLength < 5 ? "Text too short" : "Text long enough"}  </p>
        </div>
    );
};

export default validation;