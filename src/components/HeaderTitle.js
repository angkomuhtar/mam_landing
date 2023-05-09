import Aos from "aos";
import React, { useEffect } from "react";

const HeaderTitle = (props) => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <section className='bg-[url(/assets/images/bg-truck.png)] py-[150px] bg-fixed bg-no-repeat bg-cover flex items-center'>
      <div className='container mx-auto grid place-content-center text-center'>
        <div className='h-[120px]' />
        <h2
          data-aos='fade-up'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-duration='1000'
          className='text-white uppercase text-sm tracking-widest'>
          HOME / {props.pretitle}
        </h2>
        <h2
          data-aos='fade-left'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-duration='1000'
          className='text-white capitalize font-extrabold text-4xl my-3 leading-snug'>
          {props.children}
        </h2>
        <p
          data-aos='fade-down'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-duration='1000'
          className='font-light text-white '>
          {props.subheader}
        </p>
      </div>
    </section>
  );
};

export default HeaderTitle;
