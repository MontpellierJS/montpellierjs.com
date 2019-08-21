import React, { useState } from 'react'
import MjsLayout from '../components/MjsLayout'
import { graphql } from 'gatsby'
import { ListGroup, Row, Col } from 'react-bootstrap'
import Meetup from '../components/Meetups/Meetup'
import MeetupSidebar from '../components/Meetups/MeetupSidebar'

const meetups = ({ data }) => {
  const [datefilter, setDatefilter] = useState(null)
  const meetupsToDisplay = data.allContentfulMeetupPost.nodes
    .filter((node) => {
      const dateToCheck = new Date(node.date)
      if (!datefilter) {
        return true
      }
      if (
        dateToCheck.getMonth() === datefilter.getMonth() &&
        dateToCheck.getFullYear() === datefilter.getFullYear()
      ) {
        return true
      }
    })
    .map((node) => <Meetup key={node.id} meetupData={node}></Meetup>)

  const onDateFilterChanged = (filter) => {
    if (!filter) {
      setDatefilter(null)
    } else {
      const date = new Date(filter)
      setDatefilter(date)
    }
  }

  return (
    <MjsLayout>
      <Row>
        <Col xs={12} sm={12} md={12} lg={8}>
          <ListGroup>{meetupsToDisplay}</ListGroup>
        </Col>
        <Col className="d-none d-lg-block" lg={4}>
          <MeetupSidebar
            onDateFilterSelected={onDateFilterChanged}
            meetups={data.allContentfulMeetupPost.nodes}
          ></MeetupSidebar>
        </Col>
      </Row>
    </MjsLayout>
  )
}

export const query = graphql`
  query meetups_page {
    allContentfulMeetupPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title
        videoLink
        date(formatString: "MMMM DD YYYY")
        speakers
        location
        text {
          json
        }
        id
        logo {
          fluid(maxWidth: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default meetups
