import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import Contact from "../components/pages/contact/Contact";
const index = () => {
  return (
    <LayoutWrapper>
      <Contact />
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("contact server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
