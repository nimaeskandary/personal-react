import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import '../custom-css/Sidebar.css';

function Sidebar(props) {
  return (
    <Nav className='sidebar-center' bsStyle="pills" stacked>
      {
        props.ROUTES.map((route, index) => (
          <IndexLinkContainer to={route.path} key={index}>
            <NavItem>
              <FontAwesome name={route.icon} />
              &emsp; {route.title}
            </NavItem>
          </IndexLinkContainer>
        ))
      }
    </Nav>
  );
}

export default Sidebar
