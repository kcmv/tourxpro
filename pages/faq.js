import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import FaqPage from "../components/pages/faq/FaqPage";

const index = () => {
  return (
    <LayoutWrapper>
      <FaqPage />
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("faq server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
