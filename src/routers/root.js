import React from "react";
import { Switch, Route } from "react-router-dom";
import withLazy from "hocs/withLazy";

const Website = withLazy(import("app/website"));
const AdminDashboard = withLazy(import("app/admin"));

export const baseUrl = "/admin/dashboard";

// declare root routes
export const RootRoutes = [
  {
    id: 1,
    path: baseUrl,
    exact: false,
    t_key: "dashboard",
    component: AdminDashboard,
  },
  {
    id: 2,
    path: `/`,
    exact: false,
    t_key: "main",
    component: Website,
  },
];

export default () => (
  <Switch>
    {RootRoutes.map((route) => (
      <Route key={route.path} exact={route.exact} path={route.path} render={() => <route.component />} />
    ))}
  </Switch>
);
