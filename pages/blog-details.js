import React from 'react'
import BlogDetailsPage from "../components/pages/blog/blogdetails/BlogDetailsPage";
const index = () => {
  return (
    <BlogDetailsPage/>
  )
}

export default index

export async function getServerSideProps(context) {
    console.log("blog-details server side call")
    return {
      props: {}, // will be passed to the page component as props
    }
  }