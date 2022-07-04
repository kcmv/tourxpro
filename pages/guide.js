import React from "react";
import GuidePage from "../components/pages/guide/GuidePage";

const index = () => {
  return <GuidePage />;
};

export default index;

export async function getServerSideProps(context) {
  console.log("guide server side call")
  return {
    props: {}, // will be passed to the page component as props
  }
}