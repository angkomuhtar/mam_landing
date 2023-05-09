import MainTemplate from "@/template/MainTemplate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import OffersCard from "@/components/OffersCard";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import WorksCard from "@/components/WorksCard";
import Quotes from "public/assets/icon/Quotes";
import QuotesPrev from "public/assets/icon/QuotesPrev";
import { QuotesNext } from "public/assets/icon";
import Aos from "aos";
import Feedback from "@/layout/Feedback";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <MainTemplate
      meta={{
        title: "Home - PT Mitra Abadi Mahakam",
        description: "PT mitra abadi mahakam",
      }}>
      <main className=''>
        <section className='bg-[url(/assets/images/bg-truck.png)] h-screen bg-fixed bg-no-repeat bg-cover flex items-center'>
          <div className='container mx-auto'>
            <h2
              data-aos='fade-up'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-duration='1000'
              className='text-white uppercase'>
              Pt mitra abadi mahakam
            </h2>
            <h2
              data-aos-duration='1000'
              data-aos='fade-left'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              className='text-white capitalize font-extrabold text-4xl mt-3 mb-20 leading-snug'>
              Creating <span className='text-red-700'>Value</span> and <br />
              Winning <span className='text-red-700'>Trust</span>
            </h2>
            <button
              data-aos='fade-right'
              data-aos-mirror='true'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              className='bg-red-700 px-6 py-3 rounded-md text-sm font-medium flex items-center text-white uppercase'>
              discover More <ArrowSmallRightIcon className='w-6 ml-3' />
            </button>
          </div>
        </section>
        <section className='bg-muted py-20'>
          <div className='container mx-auto py-8'>
            <div className='flex flex-col justify-center items-center'>
              <SectionTitle
                text='Your Reliable partners'
                data-aos='fade-right'
                data-aos-easing='ease-in-out'
                data-aos-mirror='true'
              />
              <p className='mt-8 max-w-xl text-center' data-aos='fade-in'>
                Continuous Improvement Causes us to think about upstream process
                not downstream damage control
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
              <ServiceCard
                data-aos='fade-right'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-mirror='true'
              />
              <ServiceCard
                data-aos='fade-in'
                data-aos-duration='1500'
                data-aos-easing='ease-in-out'
                data-aos-mirror='true'
              />
              <ServiceCard
                data-aos='fade-left'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-mirror='true'
              />
            </div>
          </div>
        </section>
        <section className='container mx-auto py-32 grid md:grid-cols-2 gap-x-12'>
          <div className='flex'>
            <div className='bg-[url(/assets/images/bg-about.png)] bg-cover bg-no-repeat relative w-5/6 aspect-[3/4] mr-16'>
              <div className='bg-red-700 py-3 px-5 absolute -bottom-4 -right-10'>
                <h2 className='font-semibold text-sm+ text-white uppercase '>
                  10 Years OF experiences
                </h2>
              </div>
            </div>
          </div>
          <div className='py-4 grid grid-cols-2 gap-x-6 gap-y-2 content-center'>
            <div className='col-span-2'>
              <SectionTitle text='About Company' />
              <p className='mt-6 font-light text-sm leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className=''>
              <h3 className='text-xl font-semibold'>Our Mission</h3>
              <p className='mt-6 font-light text-sm leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className=''>
              <h3 className='text-xl font-semibold'>Our Vision</h3>
              <p className='mt-6 font-light text-sm leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>
        <section className='bg-muted py-32'>
          <div className='container mx-auto'>
            <div className='grid place-content-center'>
              <SectionTitle text='What Our Offers' />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-24 gap-10 gap-y-20 justify-center'>
              <OffersCard
                title='Exploration'
                icon='compas'
                desc='Lorem ipsum dolor sit amet'
              />
              <OffersCard
                title='Mine Management Service & Contract'
                icon='server'
                desc='Lorem ipsum dolor sit amet'
              />
              <OffersCard
                title='Mining Contractor'
                icon='helm'
                desc='Lorem ipsum dolor sit amet'
              />
              <div className='hidden lg:block' />
              <OffersCard
                title='General Contractor & Supplier'
                icon='truck'
                desc='Lorem ipsum dolor sit amet'
              />
              <div className='hidden md:block lg:hidden' />
              <OffersCard
                title='Stevedoring'
                icon='ship'
                desc='Lorem ipsum dolor sit amet'
              />
            </div>
          </div>
        </section>
        <section className='bg-gradient-to-b from-muted to-white py-32'>
          <div className='container mx-auto'>
            <div className='grid place-content-center'>
              <SectionTitle text='Our Latests Works' />
            </div>
            <div className='my-20'>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className='mySwiper grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
                <SwiperSlide>
                  <WorksCard />
                </SwiperSlide>

                <SwiperSlide>
                  <WorksCard />
                </SwiperSlide>

                <SwiperSlide>
                  <WorksCard />
                </SwiperSlide>

                <SwiperSlide>
                  <WorksCard />
                </SwiperSlide>

                <SwiperSlide>
                  <WorksCard />
                </SwiperSlide>

                <SwiperSlide>
                  <WorksCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        <section className='bg-white'>
          <div className='container mx-auto'>
            <div className='grid place-content-center'>
              <SectionTitle text='Our Teams' />
            </div>
            <div className='my-20 grid place-items-center'>
              <div className='bg-[url(/assets/images/teams1.png)] aspect-[2/3] bg-contain w-56 relative'>
                <div className='absolute bg-red-700 bottom-0 w-full items-center p-2 text-white text-center rounded-md'>
                  <h3 className='font-semibold text-sm+ font-poppins'>
                    Rudy Gunawan
                  </h3>
                  <p className='text-xs+ font-light font-inter'>
                    Chief Executif Officer
                  </p>
                </div>
              </div>
            </div>
            <div className='my-20'>
              <Swiper
                slidesPerView={"3.4"}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className='mySwiper'>
                <SwiperSlide>
                  <div className='bg-[url(/assets/images/teams1.png)] aspect-[2/3] bg-contain w-56 relative'>
                    <div className='absolute bg-red-700 bottom-0 w-full items-center p-2 text-white text-center rounded-md'>
                      <h3 className='font-semibold text-sm+ font-poppins'>
                        V. Vignesh
                      </h3>
                      <p className='text-xs+ font-light font-inter'>
                        General Manager
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='bg-[url(/assets/images/teams1.png)] aspect-[2/3] bg-contain w-56 relative'>
                    <div className='absolute bg-red-700 bottom-0 w-full items-center p-2 text-white text-center rounded-md'>
                      <h3 className='font-semibold text-sm+ font-poppins'>
                        Moh Ramli
                      </h3>
                      <p className='text-xs+ font-light font-inter'>
                        Operational Manager
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='bg-[url(/assets/images/teams1.png)] aspect-[2/3] bg-contain w-56 relative'>
                    <div className='absolute bg-red-700 bottom-0 w-full items-center p-2 text-white text-center rounded-md'>
                      <h3 className='font-semibold text-sm+ font-poppins'>
                        V. Vignesh
                      </h3>
                      <p className='text-xs+ font-light font-inter'>
                        General Manager
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='bg-[url(/assets/images/teams1.png)] aspect-[2/3] bg-contain w-56 relative'>
                    <div className='absolute bg-red-700 bottom-0 w-full items-center p-2 text-white text-center rounded-md'>
                      <h3 className='font-semibold text-sm+ font-poppins'>
                        V. Vignesh
                      </h3>
                      <p className='text-xs+ font-light font-inter'>
                        General Manager
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <Feedback />
      </main>
    </MainTemplate>
  );
}
