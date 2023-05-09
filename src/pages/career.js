import HeaderTitle from "@/components/HeaderTitle";
import MainTemplate from "@/template/MainTemplate";

const career = () => {
  return (
    <MainTemplate
      active='career'
      meta={{
        title: "Career - PT Mitra Abadi Mahakam",
        description: "PT mitra abadi mahakam",
      }}>
      <HeaderTitle
        pretitle='ABOUT'
        subheader={`We're always looking for rockstars`}>
        Find your dream <span className='text-red-700'>Careers</span>
      </HeaderTitle>
      <main>
        <section className='container mx-auto py-20 flex'>
          <div className='w-3/4 pr-5'>
            <h2 className='font-extrabold font-poppins text-2xl'>
              <span className='font-light'>Find Your </span>Opportunity
            </h2>
            <p className=' text-secondary text-[19px] mt-5 leading-8 font-light'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum magnam sit consequuntur quos, repellendus, autem
            </p>
            <p className='text-secondary text-sm mt-3 leading-5 font-light font-poppins'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              exercitationem fugit aut veritatis veniam explicabo pariatur
              excepturi, labore repudiandae voluptatibus atque esse. Earum fuga
              alias qui fugiat, laboriosam ipsum sit.
            </p>
          </div>

          <div className='flex-1 bg-muted rounded-md p-6 self-start'>
            <blockquote className='text-secondary text-sm mt-3 leading-5 font-light font-poppins'>
              " Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti exercitationem fugit aut veritatis veniam explicabo
              pariatur excepturi, labore repudiandae voluptatibus atque esse.
              Earum fuga alias qui fugiat, laboriosam ipsum sit. "
            </blockquote>
          </div>
        </section>
        <section className='bg-muted'>
          <div className='container mx-auto py-20'></div>
        </section>
      </main>
    </MainTemplate>
  );
};

export default career;
