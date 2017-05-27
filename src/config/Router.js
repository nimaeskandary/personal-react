import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'

const ROUTES = [
  {
    path: '/',
    component: Home,
    exact: true,
    title: 'Home',
    icon: 'home'
  },
  {
    path: '/about',
    component: About,
    exact: false,
    title: 'About',
    icon: 'user'
  }
]

function Router(props) {
  return (
    <BrowserRouter>
        <div>
          { // clone the App child but with routes as a prop
            React.Children.map(props.children, (child) =>
              React.cloneElement(child, {ROUTES: ROUTES})
            )
          }
          {
            ROUTES.map((route) => (
               <Route exact={route.exact}
                      path={route.path}
                      component={route.component}
                      key={route.path} />
            ))
          }
        </div>
    </BrowserRouter>
  )
}

export default Router;
