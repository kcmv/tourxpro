import React from 'react'
import HomethreeLayout from "../components/layout/HomethreeLayout";
const index = () => {
  return (
    <HomethreeLayout/>
  )
}

export default index
export async function getServerSideProps(context) {
    console.log("index3 server side call")
    return {
      props: {}, // will be passed to the page component as props
    }
  }