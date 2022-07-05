import LayoutWrapper from '@/layout/LayoutWrapper';
import React from 'react'
import Error from "../components/pages/error/Error";

const index = () => {
  return (
    <LayoutWrapper>
      <Error/>
    </LayoutWrapper>
  )
}

export default index

export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }