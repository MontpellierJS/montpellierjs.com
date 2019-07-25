import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MjsLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MjsLayout
