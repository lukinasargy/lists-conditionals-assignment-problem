import React from 'react';
const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
    cursor: 'pointer',
};

const charComponent = (props) => {
    return (
        <div style={style} onClick={props.click}> {props.item} </div>
    );
};
export default charComponent;