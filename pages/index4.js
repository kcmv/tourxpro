import React from 'react'
import HomeFourLayout from "../components/layout/HomeFourLayout";
const index = () => {
  return (
    <HomeFourLayout/>
  )
}

export default index

export async function getServerSideProps(context) {
    console.log("index4 server side call")
    return {
      props: {}, // will be passed to the page component as props
    }
  }