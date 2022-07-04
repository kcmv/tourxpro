import React from 'react'
import PackageSidebar from "../components/pages/packageSidebar/PackageSIdebar";

const index = () => {
  return (
    <PackageSidebar/>
  )
}

export default index

export async function getServerSideProps(context) {
    console.log("package side bar server side call")
    return {
      props: {}, // will be passed to the page component as props
    }
  }