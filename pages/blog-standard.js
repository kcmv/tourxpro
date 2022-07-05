import LayoutWrapper from "@/layout/LayoutWrapper";
import React from "react";
import BlogStandard from "../components/pages/blog/BlogStandard/BlogStandard";

const index = () => {
  return (
    <LayoutWrapper>
      <BlogStandard />
    </LayoutWrapper>
  );
};

export default index;

export async function getServerSideProps(context) {
  console.log("blog-standard server side call");
  return {
    props: {}, // will be passed to the page component as props
  };
}
