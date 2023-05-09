import HeaderTitle from "@/components/HeaderTitle";
import MainTemplate from "@/template/MainTemplate";

const teams = () => {
  return (
    <MainTemplate
      active='teams'
      meta={{
        title: "Career - PT Mitra Abadi Mahakam",
        description: "PT mitra abadi mahakam",
      }}>
      <HeaderTitle
        pretitle='ABOUT'
        subheader={`We're always looking for rockstars`}>
        Our Great <span className='text-red-700'>Teams</span>
      </HeaderTitle>
      <main className='min-h-screen'></main>
    </MainTemplate>
  );
};

export default teams;
