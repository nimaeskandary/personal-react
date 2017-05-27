import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'

const Routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About,
    exact: false
  }
]

const Router = () => (
  <BrowserRouter>
      <div>
        {
          Routes.map((route) => (
             <Route exact={route.exact}
                    path={route.path}
                    component={route.component}
                    key={route.path} />
          ))
        }
      </div>
  </BrowserRouter>
)

export default Router;
