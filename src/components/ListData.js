import React from "react";

const ListData = ({ title, value, col = 2, className = "" }) => {
  return (
    <div className={`col-span-${col} flex flex-col ${className}`}>
      <p className='text-tiny text-slate-400 group-hover:text-slate-200 capitalize font-poppins'>
        {title}
      </p>
      <p className='text-xs font-semibold text-slate-700 capitalize group-hover:text-white whitespace-pre'>
        {value}
      </p>
    </div>
  );
};

export default ListData;
