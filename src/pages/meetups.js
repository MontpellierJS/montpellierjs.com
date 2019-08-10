import React from 'react'
import MjsLayout from '../components/MjsLayout'
import { graphql } from 'gatsby'
import { ListGroup } from 'react-bootstrap'
import Meetup from '../components/Meetups/Meetup'

const meetups = ({ data }) => {
  const meetupsToDisplay = data.allContentfulMeetupPost.nodes.map((node) => (
    <Meetup meetupData={node}></Meetup>
  ))

  return (
    <MjsLayout>
      <ListGroup>{meetupsToDisplay}</ListGroup>
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
