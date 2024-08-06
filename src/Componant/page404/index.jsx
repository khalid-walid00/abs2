import React from 'react';
import animationData from '../../media/AnimationBNotFound.json';
import Lottie from 'lottie-react';

function PageNotFound(props) {
    return (
        <div className=' w-full h-screen flex  justify-center items-center flex-col '>
            <div className=' text-secoundColor font-bold text-[48px] text-center w-full flex flex-col items-center '>
                <div>Page Not Found</div>
         <div className='w-80'>   <Lottie animationData={animationData} loop={true} />

           </div> </div>
        </div>
    );
}

export default PageNotFound;