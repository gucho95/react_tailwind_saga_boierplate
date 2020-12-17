import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import withLazy from 'hocs/withLazy';

// import website views
const About = withLazy(import('app/website/about'));
const Staff = withLazy(import('app/website/staff'));
const Homepage = withLazy(import('app/website/homepage'));
const Login = withLazy(import('app/dashboard/login'));
const Page404 = withLazy(import('components/_404'));

// declare routes
export const websiteRoutes = [
  { path: '/', exact: true, component: Homepage, isMenuItem: true, t_key: 'homepage' },
  { path: '/about', exact: false, component: About, isMenuItem: true, t_key: 'about_us' },
  { path: '/staff', exact: false, component: Staff, isMenuItem: true, t_key: 'our_staff' },
  { path: '/login', exact: true, component: Login, isMenuItem: true, t_key: 'login' },
  { path: '/404', exact: true, component: Page404 },
];

// draw routes
export default () => (
  <Switch>
    {websiteRoutes.map((route) => (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        render={() => <route.component />}
      />
    ))}
    <Redirect to='/404' />
  </Switch>
);
