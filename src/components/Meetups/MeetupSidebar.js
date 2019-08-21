import React from 'react'
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'

const MeetupSidebar = ({ meetups, onDateFilterSelected }) => {
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
      <ListGroupItem key={date}>
        <button
          className="btn btn-link"
          onClick={() => {
            onDateFilterSelected(date)
          }}
        >
          {date}
        </button>
      </ListGroupItem>
    )
  })

  return (
    <Row>
      <Col>
        <ListGroup className="meetup-dates">
          <ListGroupItem key="all">
            <button
              className="btn btn-link"
              onClick={() => {
                onDateFilterSelected(null)
              }}
            >
              All
            </button>
          </ListGroupItem>
          {datesToDisplay}
        </ListGroup>
      </Col>
    </Row>
  )
}

export default MeetupSidebar
