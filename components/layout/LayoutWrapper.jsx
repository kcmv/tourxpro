import React from 'react'
import Footer from "../common/Footer";
import Header from "../common/Header";

const LayoutWrapper = ({children, data}) => {
  return (
    <>
     <Header data={data}/>
     {children}
     <Footer className="footer-area mt-110" />
    </>
  )
}

export default LayoutWrapper