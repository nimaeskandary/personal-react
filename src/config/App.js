import React, { Component } from 'react';
import TopNavbar from '../components/TopNavbar'
import Sidebar from '../components/Sidebar'
import { Col } from 'react-bootstrap'

class App extends Component {
  render() {
    let mobile = (/Android|Mobile|mobile|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
    return (
      <div>
        <Col sm={12}>
          <TopNavbar mobile={mobile} ROUTES={this.props.ROUTES} />
        </Col>
        <Col sm={2} className="pull-left">
          <Sidebar ROUTES={this.props.ROUTES} />
        </Col>
      </div>
    );
  }
}

export default App;
