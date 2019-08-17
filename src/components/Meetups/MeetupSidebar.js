import React from 'react'
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'

const MeetupSidebar = ({ meetups }) => {
  const dates = []
  meetups.forEach((meetup) => {
    const date = new Date(meetup.date)
    const monthyear = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    })
    if (!dates.find((d) => monthyear == d)) {
      dates.push(monthyear)
    }
  })

  const datesToDisplay = dates.map((date) => {
    return (
      <ListGroupItem>
        <button className="btn btn-link">{date}</button>
      </ListGroupItem>
    )
  })

  return (
    <Row>
      <Col>
        <ListGroup className="meetup-dates">{datesToDisplay}</ListGroup>
      </Col>
    </Row>
  )
}

export default MeetupSidebar
