import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import GallaryPage from "../components/pages/gallary/GallaryPage";

const index = () => {
  return (
    <LayoutWrapper>
      <GallaryPage />
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("gallary server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
