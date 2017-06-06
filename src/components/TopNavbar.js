import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../custom-css/TopNavbar.css';

class TopNavbar extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      colSmMin: 768
    };
  }

  updateWidth() {
      this.setState({width: window.innerWidth});
  }

  componentWillMount() {
      this.updateWidth();
  }

  componentDidMount() {
      window.addEventListener("resize", this.updateWidth.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  render() {
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
          <Navbar.Text>
            Nima Eskandary
          </Navbar.Text>
        </Navbar.Header>
        <Navbar.Collapse>
          <div className="pull-right">
            {this.viewLinks(this.props.mobile, this.props.ROUTES)}
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
        </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  viewLinks(mobile, ROUTES) {
    if(mobile || Number(this.state.width) < this.state.colSmMin) {
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
};

export default TopNavbar;
