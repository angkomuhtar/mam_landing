import HeaderTitle from "@/components/HeaderTitle";
import MainTemplate from "@/template/MainTemplate";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const works = () => {
  const url = () => {
    return "https://source.unsplash.com/random/?mining";
  };
  return (
    <MainTemplate
      active='works'
      meta={{
        title: "works - PT Mitra Abadi Mahakam",
        description: "PT mitra abadi mahakam",
      }}>
      <HeaderTitle
        pretitle='WORKS'
        subheader={`We're always looking for rockstars`}>
        Our Latests <span className='text-red-700'>Works</span>
      </HeaderTitle>
      <main className='min-h-screen container mx-auto'>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter='2'>
            <Image alt='last work' className='p-4' src={url()} />
            <Image alt='last work' className='p-4' src={url()} />
            <Image alt='last work' className='p-4' src={url()} />
            <Image alt='last work' className='p-4' src={url()} />
            <Image alt='last work' className='p-4' src={url()} />
            <Image alt='last work' className='p-4' src={url()} />
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </MainTemplate>
  );
};

export default works;

// https://source.unsplash.com/random/?mining,industry
