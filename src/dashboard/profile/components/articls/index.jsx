import React from "react";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { ToggleModelUpdate } from "../../../../tools/redux/Slices/Toggle";

function ArticlProfile({ text, rows, name, setElement, element,dataName }) {
  const { UpdateModel } = useSelector((state) => state.Toggle);
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="font-semibold text-[16px] mb-2"></div>
      <textarea
        onClick={() => {
          dispatch(ToggleModelUpdate({ name: dataName, value: true }));
          setElement({ ...element,id:dataName});
        }}
        defaultValue={text}
        rows={rows}
        className="bg-Grayblack rounded-lg resize-none cursor-pointer py-4 px-3 text-[12px] w-full"
      ></textarea>
    </div>
  );
}

export default ArticlProfile;
