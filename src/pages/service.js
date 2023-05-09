import HeaderTitle from "@/components/HeaderTitle";
import MainTemplate from "@/template/MainTemplate";

const service = () => {
  return (
    <MainTemplate
      active='service'
      meta={{
        title: "Career - PT Mitra Abadi Mahakam",
        description: "PT mitra abadi mahakam",
      }}>
      <HeaderTitle
        pretitle='ABOUT'
        subheader={`We're always looking for rockstars`}>
        Our <span className='text-red-700'>Services</span> Offer
      </HeaderTitle>
      <main className='min-h-screen'></main>
    </MainTemplate>
  );
};

export default service;
