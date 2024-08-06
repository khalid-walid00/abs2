import React from 'react';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import { ToggleModelUpdate } from '../../../../tools/redux/Slices/Toggle';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function ImgAndTitle({imgTitle, img, EditColor = "white", DataTochange, dataName,DataToDelete,deleteIcon,className,setElement,element}) {
    const { UpdateModel } = useSelector((state) => state.Toggle);
    const ref = React.useRef();
    const dispatch = useDispatch();
   
    return (
        <div className='relative w-full h-full flex flex-col gap-2'>
            <div className='absolute inset-0 flex items-center justify-center'>
                {deleteIcon ?<DeleteForeverIcon onClick={DataToDelete} 
                    sx={{ 
                        color: "red",
                        border: `2px solid red`,
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: '60px'
                    }} 
                />: <ModeEditTwoToneIcon 
                    onClick={() => ref.current.click()} 
                    sx={{ 
                        color: "gray",
                        border: `2px solid gray`,
                        borderRadius: "50%",
                        cursor: "pointer",
                        fontSize: '80px'
                    }} 
                />}
            </div>
            <input 
                type="file" 
                onChange={() =>{
                    if(DataTochange){
                        DataTochange(ref.current.files[0]);   
                    }else{

                        setElement({...element,image:ref.current.files[0]})
                    }
                }}  
                ref={ref} 
                className="hidden" 
            />
            <img className={`w-full rounded-xl min-h-40  ${className}`}src={img} alt="icon" />
            {imgTitle && 
                <div className={`flex ${imgTitle ? "justify-between" : "justify-end"}`}>
                    {imgTitle}
                    <BorderColorTwoToneIcon 
                        onClick={() => dispatch(ToggleModelUpdate(true))} 
                        sx={{ color: "#606060", cursor: "pointer" }} 
                    />
                </div>
            }
        </div>
    );
}

export default ImgAndTitle;
