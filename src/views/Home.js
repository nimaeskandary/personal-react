import React, { Component } from 'react';
import Page from '../templates/Page';

class Home extends Component {
  render() {
    return (
      <Page route={this.props.componentRouteInfo}>
        <div>
          This is the home page
        </div>
      </Page>
    );
  }
}

export default Home;
