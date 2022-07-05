import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import PackageDetails from "../components/pages/packageDetails/PackageDetails";
const index = () => {
  return (
    <LayoutWrapper>
      <PackageDetails />
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("package details server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
