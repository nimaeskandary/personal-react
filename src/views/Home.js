import React, { Component } from 'react';
import Page from '../templates/Page';

class Home extends Component {
  render() {
    return (
      <Page route={this.props.componentRouteInfo}>
        <div>
          <p>
            This web site is built using react and hosted out of the public folder
            of my drexel workspace. The goal of this project is to play around
            with react components, testing frameworks, and add personal pages
            to describe projects I've worked on in the past. The git repo for
            this project is linked in the navbar
          </p>
        </div>
      </Page>
    );
  }
}

export default Home;
