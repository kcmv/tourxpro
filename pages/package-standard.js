import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import PackageStandard from "../components/pages/packageStandard/PackageStandard";
const index = () => {
  return (
    <LayoutWrapper>
      <PackageStandard />
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("package standard server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
