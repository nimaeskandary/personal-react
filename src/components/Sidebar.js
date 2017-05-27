import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import '../custom-css/Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <Nav className='sidebar-center' bsStyle="pills" stacked>
        {
          this.props.ROUTES.map((route, index) => (
            <IndexLinkContainer to={route.path} key={index}>
              <NavItem>
                {route.title}&emsp;
                <FontAwesome name={route.icon} />
              </NavItem>
            </IndexLinkContainer>
          ))
        }
      </Nav>
    );
  };
}

export default Sidebar
