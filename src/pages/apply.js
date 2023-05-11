import HeaderTitle from "@/components/HeaderTitle";
import MainTemplate from "@/template/MainTemplate";
import { Education, Personal } from "@/section/apply";
import { createRef, useRef, useState } from "react";
import Family from "@/section/apply/Family";
import Experience from "@/section/apply/Experience";
import Question from "@/section/apply/Question";

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currId, setCurrId] = useState(0);
  console.log(currentStep);
  return (
    <MainTemplate
      active='career'
      meta={{
        title: "Career - PT Mitra Abadi Mahakam",
        description: "PT mitra abadi mahakam",
      }}>
      <div className='h-20'></div>
      <main>
        <section className='container mx-auto py-20 grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-4'>
          <div className='md:col-span-3 md:pr-5'>
            <h2 className='font-extrabold font-poppins text-2xl'>
              <span className='font-light'>Apply Your </span>Document
            </h2>
            <p className=' text-secondary text-[19px] mt-5 leading-8 font-light hidden'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum magnam sit consequuntur quos, repellendus, autem
            </p>
            <p className='text-secondary text-sm mt-3 leading-5 font-light font-poppins hidden'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              exercitationem fugit aut veritatis veniam explicabo pariatur
              excepturi, labore repudiandae voluptatibus atque esse. Earum fuga
              alias qui fugiat, laboriosam ipsum sit.
            </p>
          </div>

          <div className='flex-1 bg-muted rounded-md p-6 self-start hidden'>
            <blockquote className='text-secondary text-sm mt-3 leading-5 font-light font-poppins italic'>
              You can have the best strategy and the best building in the world,
              but if you don’t have the hearts and minds of the people who work
              with you, none of it comes to life
            </blockquote>
          </div>
        </section>
        <Personal
          step={setCurrentStep}
          setid={setCurrId}
          className={currentStep == 1 ? "" : "hidden"}
        />
        <Education
          step={setCurrentStep}
          appl_id={currId}
          className={currentStep == 2 ? "" : "hidden"}
        />
        <Family
          step={setCurrentStep}
          appl_id={currId}
          className={currentStep == 3 ? "" : "hidden"}
        />
        <Experience
          step={setCurrentStep}
          appl_id={currId}
          className={currentStep == 4 ? "" : "hidden"}
        />
        <Question
          step={setCurrentStep}
          appl_id={currId}
          className={currentStep == 5 ? "" : "hidden"}
        />
      </main>
    </MainTemplate>
  );
};

export default Apply;
