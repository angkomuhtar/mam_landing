import { Quotes, QuotesNext, QuotesPrev } from "public/assets/icon";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

const Feedback = () => {
  return (
    <section className='container mx-auto grid grid-cols-4 py-16'>
      <h3 className='text-2xl font-poppins font-bold capitalize'>
        Valuable feedback from our customers
      </h3>
      <div className='col-span-3'>
        <div className='grid grid-cols-2'>
          <Quotes className='w-12' />
          <div className='flex justify-end text-black space-x-4'>
            <button>
              <QuotesPrev className='w-8 swiper-button-next' />
            </button>
            <button>
              <QuotesNext className='w-8' />
            </button>
          </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper col-span-2'>
            <SwiperSlide className=''>
              <p className='my-5 px-5'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <h2 className='font-bold text-xl'>Elon Musk</h2>
              <p className='font-light text-xs'>
                <i>Twitter</i> Chief Executif Officer
              </p>
            </SwiperSlide>

            <SwiperSlide className=''>
              <p className='my-5 px-5'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <h2 className='font-bold text-xl'>Elon Musk</h2>
              <p className='font-light text-xs'>
                <i>Twitter</i> Chief Executif Officer
              </p>
            </SwiperSlide>

            <SwiperSlide className=''>
              <p className='my-5 px-5'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <h2 className='font-bold text-xl'>Elon Musk</h2>
              <p className='font-light text-xs'>
                <i>Twitter</i> Chief Executif Officer
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
