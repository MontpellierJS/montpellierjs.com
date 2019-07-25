import React from 'react'

import MjsLayout from '../components/MjsLayout'
import SEO from '../components/seo'
import { Container } from 'react-bootstrap'

const IndexPage = () => (
  <MjsLayout>
    <SEO title="Home" />
    <Container fluid>home</Container>
  </MjsLayout>
)

export default IndexPage
