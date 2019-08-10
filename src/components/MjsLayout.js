import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const MjsLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="mainContainer">{children}</Container>
      <Footer />
    </>
  )
}

export default MjsLayout
