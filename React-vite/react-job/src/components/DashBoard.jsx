import React from 'react'
import Content from './Content'
import Bestprod from './Bestprod'
import Products from './Products'
import Footer from './Footer'
import NavBar from './NavBar'
import BesteDealers from './BesteDealers'

function DashBoard() {
  return (
    <>
    <NavBar/>
    <Content/> 
    <Bestprod/>
    <Products/>
    <Footer/>
    </>
  )
}

export default DashBoard