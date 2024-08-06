import React from 'react';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import { ToggleModelUpdate } from '../../../../tools/redux/Slices/Toggle';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function ImgAndTitleInspecion({img,DataTochange,className,id}) {
    
    const ref = React.useRef();
    return (
        <div className='relative w-full h-full flex flex-col gap-2'>
            <div className='absolute inset-0 flex items-center justify-center'>
         <ModeEditTwoToneIcon 
                    onClick={() => ref.current.click()} 
                    sx={{ 
                        color: "gray",
                        border: `2px solid gray`,
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: '80px'
                    }} 
                />
            </div>
            <input 
                type="file" 
                onChange={() =>{
                        DataTochange(ref.current.files[0],id);   
              
                }}  
                ref={ref} 
                className="hidden" 
            />
            <img className={`w-full rounded-xl min-h-40 bg-cover  ${className}`}src={img} alt="icon" />
          
        </div>
    );
}

export default ImgAndTitleInspecion;
