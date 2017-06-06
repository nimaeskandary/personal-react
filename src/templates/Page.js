import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      height: window.innerHeight
    };
  }

  updateHeight() {
    this.setState({height: window.innerHeight});
  }

  componentWillMount() {
    this.updateHeight();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateHeight.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateHeight.bind(this));
  }

  render() {
    return (
      <Col sm={10}>
        <Panel style={{height: this.state.height}} header={
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
