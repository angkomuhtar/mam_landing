import {
  OffersCompas,
  OffersServer,
  OffersShip,
  OffersTruck,
} from "public/assets/icon";
import OffersHelm from "public/assets/icon/OffersHelm";
import React from "react";

const OffersCard = ({ icon, title, desc }) => {
  const iconS = () => {
    switch (icon) {
      case "eksplor":
        return <OffersHelm className='w-12' />;
      case "ship":
        return <OffersShip className='w-12' />;
      case "server":
        return <OffersServer className='w-12' />;
      case "compas":
        return <OffersCompas className='w-12' />;
      case "truck":
        return <OffersTruck className='w-12' />;
      default:
        return <OffersHelm className='w-12' />;
    }
  };

  return (
    <div className='relative bg-white p-8 shadow-lg rounded-sm col-span-2'>
      <div className='bg-red-700 p-4 absolute -top-8 text-white'>{iconS()}</div>
      <h4 className='mt-8 mb-4 font-bold text-lg'>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default OffersCard;

{
  /* <div class="grid grid-cols-[repeat(auto-fit,_16.666666%)] m-auto p-24 justify-center bg-slate-500">
        <div class="w-full p-8 col-span-2 justify-center justify-self-center mx-auto bg-slate-900 text-white text-center text-lg">
          2 cols, should be centered
        </div>
      </div> */
}
