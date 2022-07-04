import React from 'react'
import PackageGrid from "../components/pages/packageGrid/PackageGrid";

const index = () => {
  return (
    <PackageGrid/>
  )
}

export default index

export async function getServerSideProps(context) {
    console.log("package server side call")
    return {
      props: {}, // will be passed to the page component as props
    }
  }