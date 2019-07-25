import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header>
      <Navbar className="justify-content-between">
        <Navbar.Brand>Brand link</Navbar.Brand>
        <Nav className="ml-auto">
          <Link activeClassName="active" className="nav-link" to="/">
            Home
          </Link>
          <Link activeClassName="active" className="nav-link" to="/meetups">
            Meetups
          </Link>
          <Link activeClassName="active" className="nav-link" to="/team">
            Team
          </Link>
          <Link activeClassName="active" className="nav-link" to="/contact">
            Contact
          </Link>
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header
