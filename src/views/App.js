import React, { Component } from 'react';
import TopNavbar from '../components/TopNavbar'
import Sidebar from '../components/Sidebar'
import { Col } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        <Col sm={12}>
          <TopNavbar />
        </Col>
        <Col sm={3} className="pull-left">
          <Sidebar ROUTES={this.props.ROUTES}/>
        </Col>
      </div>
    );
  }
}

export default App;
