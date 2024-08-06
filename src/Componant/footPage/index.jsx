import React from 'react';

function FooterPage({classNameParent,classNameChild,img}) {
    return (
        <div className={` bg-thirdColor flex justify-center rounded-t-[87px]    ${classNameParent}`}>

        <div className=" w-11/12 relative flex justify-center">
         <img className={`${classNameChild}  rounded-[32px] absolute `} alt="icon" src={img} />
        </div>
    </div>
    );
}

export default FooterPage;