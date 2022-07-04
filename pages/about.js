import React from "react";
import About from "../components/pages/about/About"
const index = () => {
  return <About />;
};

export default index;

export async function getServerSideProps(context) {
  console.log("about server side call")
  return {
    props: {}, // will be passed to the page component as props
  }
}