import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import BlogGridPage from "../components/pages/blog/BlogGrid/BlogGridPage";
const index = () => {
  const data = {
    title: "Blog",
    keywords: "Travel, Explore Top Destination",
    description:
      "Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, sus",
    image: "/public/images/meta-images/home-style1.jpg",
  };
  return (
    <LayoutWrapper data={data}>
      <BlogGridPage />
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("blog server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
