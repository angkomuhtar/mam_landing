import HeaderTitle from "@/components/HeaderTitle";
import SectionTitle from "@/components/SectionTitle";
import Feedback from "@/layout/Feedback";
import MainTemplate from "@/template/MainTemplate";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const about = () => {
  return (
    <MainTemplate
      active='about'
      meta={{
        title: "About - PT Mitra Abadi Mahakam",
        description: "PT mitra abadi mahakam",
      }}>
      <main>
        <HeaderTitle
          pretitle='ABOUT'
          subheader='The perfect choice for your next project'>
          Meet Our <span className='text-red-700'>Company</span>
        </HeaderTitle>
        <section className='container mx-auto grid py-16 place-content-center place-items-center'>
          <div className='w-4/6'>
            <h2 className='font-extrabold text-center font-poppins text-3xl'>
              We are mitra abadi mahakam, <br />
              We create solutions
            </h2>
            <p className='text-center text-secondary text-[19px] mt-5 leading-8 font-light'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum magnam sit consequuntur quos, repellendus, autem
              inventore quae necessitatibus ad amet facilis nam dolore corrupti
              incidunt quo saepe at perferendis enim.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-x-10 py-20'>
            <div className=''>
              <h2 className='font-bold uppercase'>OUR Mission</h2>
              <p className='text-secondary text-sm mt-3 leading-5 font-light font-poppins'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti exercitationem fugit aut veritatis veniam explicabo
                pariatur excepturi, labore repudiandae voluptatibus atque esse.
                Earum fuga alias qui fugiat, laboriosam ipsum sit.
              </p>
            </div>
            <div className=''>
              <h2 className='font-bold uppercase'>OUR Vision</h2>
              <p className='text-secondary text-sm mt-3 leading-5 font-light font-poppins'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti exercitationem fugit aut veritatis veniam explicabo
                pariatur excepturi, labore repudiandae voluptatibus atque esse.
                Earum fuga alias qui fugiat, laboriosam ipsum sit.
              </p>
            </div>
            <div className=''>
              <h2 className='font-bold uppercase'>WHY US</h2>
              <p className='text-secondary text-sm mt-3 leading-5 font-light font-poppins'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti exercitationem fugit aut veritatis veniam explicabo
                pariatur excepturi, labore repudiandae voluptatibus atque esse.
                Earum fuga alias qui fugiat, laboriosam ipsum sit.
              </p>
            </div>
          </div>
        </section>

        <section className='bg-muted py-16'>
          <div className='container mx-auto grid md:grid-cols-2 gap-10'>
            <div>
              <h2 className='font-extrabold font-poppins text-2xl'>
                Who we are
              </h2>
              <p className=' text-secondary text-[19px] mt-5 leading-8 font-light'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum magnam sit consequuntur quos, repellendus, autem
              </p>
              <p className='text-secondary text-sm mt-3 leading-5 font-light font-poppins'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti exercitationem fugit aut veritatis veniam explicabo
                pariatur excepturi, labore repudiandae voluptatibus atque esse.
                Earum fuga alias qui fugiat, laboriosam ipsum sit.
              </p>
              <p className='text-secondary text-sm mt-3 leading-5 font-light font-poppins'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti exercitationem fugit aut veritatis veniam explicabo
                pariatur excepturi, labore repudiandae voluptatibus atque esse.
                Earum fuga alias qui fugiat, laboriosam ipsum sit.
              </p>
            </div>
            <div className='relative grid place-items-end'>
              <div className='hidden md:block bg-[url(/assets/images/bg-about.png)] w-1/3 aspect-square bg-cover absolute left-0 top-10'></div>
              <div className='hidden md:block bg-[url(/assets/images/bg-truck.png)] w-1/3 aspect-square bg-cover absolute -top-14 left-24'></div>
              <div className='bg-[url(/assets/images/bg-about.png)] w-full md:w-3/5 aspect-square bg-cover relative'></div>

              {/* <WorksCard /> */}
            </div>
          </div>
        </section>
        <Feedback />
      </main>
    </MainTemplate>
  );
};

export default about;
