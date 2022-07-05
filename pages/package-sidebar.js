import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import PackageSidebar from "../components/pages/packageSidebar/PackageSIdebar";

const index = () => {
  const data = {
    title: "Package Sidebar | TourXPro - Travels Tourism Agency",
    keywords: "Travel, Explore Top Destination",
    description:
      "Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, sus",
    image: "/public/images/meta-images/home-style1.jpg",
  };
  return (
    <LayoutWrapper data={data}>
      <PackageSidebar />
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("package side bar server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
