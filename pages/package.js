import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import PackageGrid from "../components/pages/packageGrid/PackageGrid";

const index = () => {
  const data = {
    title: "Package",
    keywords: "Travel, Explore Top Destination",
    description:
      "Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent",
    image: "/public/images/meta-images/home-style1.jpg",
  };
  return (
    <LayoutWrapper data={data}>
      <PackageGrid />
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("package server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
