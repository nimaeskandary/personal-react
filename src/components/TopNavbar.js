import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../custom-css/TopNavbar.css'

function viewLinks(mobile, ROUTES) {
  if(mobile) {
    return (
      ROUTES.map((route) => (
        <Navbar.Text key={route.title}>
          <Link className='top-navbar-link' to={route.path}>
            <FontAwesome name={route.icon} />&ensp;{route.title}
          </Link>
        </Navbar.Text>
      ))
    )
  } else return ''
}

function TopNavbar(props) {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a target="_blank" rel="noopener noreferrer" href="https://cs.drexel.edu">
            Drexel &ensp;
            <FontAwesome name="university" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <div className="pull-right">
          <Navbar.Text>
            <Navbar.Link href="https://github.com/nimaeskandary/personal-react"
                         target="_blank" rel="noopener noreferrer">
               <FontAwesome name="file-code-o" />&ensp;Github
            </Navbar.Link>
          </Navbar.Text>
          <Navbar.Text>
            <Navbar.Link href="https://linkedin.com/in/nimaeskandary"
                         target="_blank" rel="noopener noreferrer">
               <FontAwesome name="briefcase" />&ensp;LinkedIn
            </Navbar.Link>
          </Navbar.Text>
          {viewLinks(props.mobile, props.ROUTES)}
      </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
