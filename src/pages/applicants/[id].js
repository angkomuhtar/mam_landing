import HeaderTitle from "@/components/HeaderTitle";
import MainTemplate from "@/template/MainTemplate";
import React from "react";

const details = () => {
  return (
    <MainTemplate
      active='career'
      meta={{
        title: "Career - PT Mitra Abadi Mahakam",
        description: "PT mitra abadi mahakam",
      }}>
      <div className='h-20'></div>
      <main>
        <section className='container mx-auto py-20 flex'></section>
      </main>
    </MainTemplate>
  );
};

export default details;
