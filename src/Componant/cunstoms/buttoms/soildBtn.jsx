import React from 'react';

function SoildBtn({className,text,onClick}) {
    return (
        <button onClick={onClick} className={`text-center shadow-sm drop-shadow-xl  text-white font-[600] bg-secoundColor rounded-lg py-3  ${className}`}>
           {text} 
        </button>
    );
}

export default SoildBtn;