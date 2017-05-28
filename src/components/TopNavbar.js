import React from 'react';
import { Navbar } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

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
               Github &ensp;
               <FontAwesome name="file-code-o" />
            </Navbar.Link>
          </Navbar.Text>
          <Navbar.Text>
            <Navbar.Link href="https://linkedin.com/in/nimaeskandary"
                         target="_blank" rel="noopener noreferrer">
               LinkedIn &ensp;
               <FontAwesome name="briefcase" />
            </Navbar.Link>
          </Navbar.Text>
      </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
