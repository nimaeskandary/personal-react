import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Page extends Component {
  render() {
    return (
      <Col sm={10}>
        <Panel header={
            <h3>
              <FontAwesome name={this.props.route.icon} />
              &emsp;{this.props.route.title}
            </h3>
          }>
          {this.props.children}
        </Panel>
      </Col>
    );
  }
}

export default Page;
