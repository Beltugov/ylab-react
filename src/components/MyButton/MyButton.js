import React from 'react';
import "./MyButton.scss"
const MyButton = ({children, ...props}) => {
    return (
        <button className="my-button " {...props}>
            {children}
        </button>
    );
};

export default MyButton;