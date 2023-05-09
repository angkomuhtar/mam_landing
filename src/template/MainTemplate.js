import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Meta from "@/layout/Meta";
import React from "react";

const MainTemplate = (props) => {
  return (
    <>
      <Meta title={props.meta.title} description={props.meta.description} />
      <Header active={props.active} />
      <>{props.children}</>
      <Footer />
    </>
  );
};

export default MainTemplate;
