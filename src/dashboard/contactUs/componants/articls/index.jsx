import React from "react";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import { useDispatch, useSelector } from "react-redux";

function ArticlContactUs({text,title,rows,setDataToUpdate,dataToUpdate,id}) {

  return (
    <div className="w-full" >
      <div className="font-semibold text-[16px] mb-2">
        {title}
      </div>
      <textarea 
      onClick={(e) => setDataToUpdate({...dataToUpdate,id:id})}
      defaultValue={text}
      onChange={(e) => setDataToUpdate({...dataToUpdate,[text]:e.target.value})}
        rows={rows}  
        className=" bg-Grayblack rounded-lg resize-none cursor-pointer py-4 px-3 text-[12px] w-full"
      >
      </textarea>
    </div>
  );
}

export default ArticlContactUs;
