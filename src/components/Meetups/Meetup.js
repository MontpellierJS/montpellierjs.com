import React from 'react'
import { ListGroupItem, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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
      <Row className="meetup-list-content">
        <Col>{documentToReactComponents(meetupData.text.json)}</Col>
      </Row>
    </ListGroupItem>
  )
}

export default Meetup
