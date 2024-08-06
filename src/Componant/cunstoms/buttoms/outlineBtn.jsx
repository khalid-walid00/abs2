import React from 'react';

function OutlineBtn({className,text,onClick}) {
    return (
        <button onClick={onClick} className={`text-center shadow-sm drop-shadow-xl  text-secoundColor border border-secoundColor font-[600] bg-transparent rounded-lg py-3  ${className}`}>
        {text} 
     </button>
    );
}

export default OutlineBtn;