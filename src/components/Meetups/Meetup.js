import React from 'react'
import { ListGroupItem, Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image'

const Meetup = ({ meetupData }) => {
  return (
    <ListGroupItem className="meetup-list-item" key={meetupData.id}>
      <div className="meetup-list-head">
        <div className="meetup-list-logo">
          <Img fluid={meetupData.logo.fluid}></Img>
        </div>
        <Row>
          <Col>
            <Row>
              <Col className="meetup-list-title">{meetupData.title}</Col>
            </Row>
            <Row>
              <Col className="meetup-list-detail">
                <b>{meetupData.date}</b> • {meetupData.speakers}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </ListGroupItem>
  )
}

export default Meetup
