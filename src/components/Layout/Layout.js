import React from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { GlobalStyle } from "../../styles/GlobalStyle"

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle/>
    <Header />
      <main>{children}</main>  
      <Footer/> 
  </>
  )
}
export default Layout