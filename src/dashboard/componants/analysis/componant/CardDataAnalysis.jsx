import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function CardDataAnalysis({title,count,icon,date,present}) {
    return (
        <div className=" shadow-lg flex flex-col gap-8 drop-shadow-md  rounded-lg p-2">
        <div className=" flex justify-between ">
  
        <div>
          <div className=" text-gray">{title}</div>
          <div className=" text-[24px]">{count}</div>
        </div>
       <img className=" w-[60px] h-[60px]" src={icon} alt="icon" />
        </div>
        <div className=" text-gray"><span className="text-green text-[16px]"><TrendingUpIcon/>{present} </span>{date}</div>
      </div>
    );
}

export default CardDataAnalysis;