import React from "react";
import { useDispatch } from "react-redux";
import { ToggleModelUpdate } from "../../../../tools/redux/Slices/Toggle";

function ArticlTraning({ text, rows, name, setElement, element }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="font-semibold text-[16px] mb-2"></div>
      <textarea
        onClick={() => {
          dispatch(ToggleModelUpdate({ name: name, value: true }));
          setElement({ ...element ,id:name});
        }}
        defaultValue={text}
        rows={rows}
        className="bg-Grayblack rounded-lg resize-none cursor-pointer py-4 px-3 text-[12px] w-full"
      ></textarea>
    </div>
  );
}

export default ArticlTraning;
