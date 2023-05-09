import React from "react";

const SectionTitle = (props) => {
  return (
    <div className='' {...props}>
      <h2 className='text-[25px] font-Inter font-bold capitalize'>
        {props.text}
      </h2>
      <div className='h-1 w-24 bg-red-700' />
    </div>
  );
};

export default SectionTitle;
