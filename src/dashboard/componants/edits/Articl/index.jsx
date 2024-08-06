import React from "react";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { ToggleModelUpdate } from "../../../../tools/redux/Slices/Toggle";

function Articl({ editTitle = false, text,title,rows,DataTochange,dataName,value,sliceName ,name}) {
  const {UpdateModel} = useSelector((state) => state.Toggle);
  const  dispatch = useDispatch()

  return (
    <div className="w-full" >
      <div className="font-semibold text-[16px] mb-2">
        {title} {editTitle && <ModeEditTwoToneIcon  onClick={() => dispatch(ToggleModelUpdate(true))} sx={{ color: "#606060", cursor: "pointer" }} />}
      </div>
      <textarea 
      onClick={() => dispatch(ToggleModelUpdate({name:name,value:true,sliceName,dataName}))}
      defaultValue={text}
        rows={rows} // حساب عدد الأسطر بناءً على النص المعطى  
        className=" bg-Grayblack rounded-lg resize-none cursor-pointer py-4 px-3 text-[12px] w-full"
      >
      </textarea>
    </div>
  );
}

export default Articl;
