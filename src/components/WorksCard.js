import React from "react";

const WorksCard = () => {
  return (
    <div className='bg-[url(/assets/images/bg-truck.png)] bg-cover aspect-square relative group cursor-pointer'>
      <div className='absolute bottom-0 left-0 right-0 grid place-content-center h-1/6 bg-black/50 text-white group-hover:h-full transform ease-in-out duration-200'>
        <h2 className='font-bold'>PT Explorasi Mandiri</h2>
        <p className='text-xs font-semibold text-center hidden group-hover:block'>
          Mining Contractor
        </p>
        <p className='text-tiny text-center hidden group-hover:block'>
          Samarinda 2010-2012
        </p>
      </div>
    </div>
  );
};

export default WorksCard;
