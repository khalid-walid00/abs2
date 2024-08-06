import React from 'react';

function FieildInput({placeholder,label,type,icon ,value,event}) {
    return (
        <div className=' relative text-secoundColor'>
            <label className='text-[16px] font-bold '>{label}</label>
            <div className='flex  border bg-grayWhite  border-secoundColor rounded-lg mt-2'>
            <input value={value} onChange={event} type={type} placeholder={placeholder} className=' flex-1 w-full py-2  bg-transparent px-1 rounded-s-lg outline-none  placeholder:text-secoundColor'/>
            <div className=' bg-secoundColor text-white justify-center items-center flex rounded-lg w-[50px] h-[50px]'>{icon}</div>
        </div>
        </div>
    );
}

export default FieildInput;