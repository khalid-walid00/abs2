import React from 'react';

function GridShape({ dataHeader }) {
    console.log(dataHeader);
    return (
        <div className='grid md:grid-cols-2 gap-4'>
            {dataHeader?.map((item, index) => (
                <div key={index} className='flex flex-col items-center w-10/12'>
                    <img
                        className='h-[500px] w-full object-cover rounded-2xl flex-shrink-0'
                        alt="icon"
                        src={item?.image}
                    />
                    <div className='mt-5 text-center font-bold text-[20px]'>
                        {item?.title}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GridShape;
