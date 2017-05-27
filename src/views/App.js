import React, { Component } from 'react';
import Sidebar from '../components/Sidebar.js'
import { Col } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        <Col sm={3} className="pull-left">
          <Sidebar ROUTES={this.props.ROUTES}/>
        </Col>
      </div>
    );
  }
}

export default App;
