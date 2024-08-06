import React from 'react';

function Line({ type = "dotted", color = "#B4B4B4" }) {
  const lineClasses = `${type === "dotted" ? "border-b-2" : "border-b"} w-10/12 h-1 flex relative`;
  const dotClasses = `w-[8px] h-[8px] rounded-full absolute top-[3px] transform -translate-y-1/2`;

  return (
    <div className="flex justify-center relative">
      <div
        className={lineClasses}
        style={{
          borderColor: color,
          borderStyle: type ,
        }}
      ></div>
      <span
        className={dotClasses}
        style={{
          backgroundColor: color,
          left: '97px',
        }}
      ></span>
      <span
        className={dotClasses}
        style={{
          backgroundColor: color,
          right: '97px',
        }}
      ></span>
    </div>
  );
}

export default Line;
