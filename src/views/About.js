import React, { Component } from 'react';
import Page from '../templates/Page'

class About extends Component {
  render() {
    return (
      <Page route={this.props.componentRouteInfo}>
        <div>
          This is the about page
        </div>
      </Page>
    );
  }
}

export default About;
