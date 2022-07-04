import React from 'react'
import Error from "../components/pages/error/Error";

const index = () => {
  return (
    <Error/>
  )
}

export default index

export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }