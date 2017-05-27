import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import Router from './config/Router'

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);
