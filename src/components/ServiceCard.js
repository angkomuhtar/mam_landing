import { ServiceExpert } from "public/assets/icon";
import React from "react";

const ServiceCard = (props) => {
  return (
    <div
      className='bg-white py-7 px-6 rounded-md border border-red-700 shadow-lg'
      {...props}>
      <div className='header'>
        <div className='flex'>
          <div className='bg-muted p-4 rounded-full'>
            <ServiceExpert className='w-8 text-red-700' />
          </div>
          <div className='flex-1 flex flex-col justify-center items-start ml-5 border-b-2 border-red-700'>
            <h2 className='text-lg font-semibold'>Expert Workers</h2>
            <p className='text-xs font-light'>with professional</p>
          </div>
        </div>
      </div>
      <div className='pt-4'>
        <p className='text-xs+ font-light text-center'>
          Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh oleh isi
          tulisan dari sebuah halaman saat ia melihat tata letaknya.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
