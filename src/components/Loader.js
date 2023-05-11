import React from "react";

const Loader = () => {
  return (
    <div className='fixed top-0 bottom-0 w-full bg-black/70 z-50 flex flex-col  justify-center items-center'>
      <div
        class='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'>
        <span class='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
      <p className='bg-transparent text-white mt-5 capitalize'>
        Tunggu Sejenak
      </p>
    </div>
  );
};

export default Loader;
