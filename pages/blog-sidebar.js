import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import BlogSidebar from "../components/pages/blog/BlodSidebar/BlogSidebar";
const index = () => {
  const data = {
    title: "Blog Sidebar",
    keywords: "Travel, Explore Top Destination",
    description:
      "Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, sus",
    image: "/public/images/meta-images/home-style1.jpg",
  };
  return (
    <LayoutWrapper data={data}>
      <BlogSidebar />
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("blog-sidebar server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
