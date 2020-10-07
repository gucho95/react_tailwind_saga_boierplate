import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import withLazy from "hocs/withLazy";
import { dashboardPath } from "./root";

const Users = withLazy(import("app/admin/users"));
const Page2 = withLazy(import("app/admin/page_2"));
const Page3 = withLazy(import("app/admin/page_3"));
const Page404 = withLazy(import("components/_404"));

export const adminRoutes = [
  { path: `${dashboardPath}/users`, exact: true, component: Users, isMenuItem: true, t_key: "users" },
  { path: `${dashboardPath}/page_2`, exact: true, component: Page2, isMenuItem: true, t_key: "serials" },
  { path: `${dashboardPath}/page_3`, exact: true, component: Page3, isMenuItem: true, t_key: "contact_us" },
  { path: `#`, exact: true, component: null, isMenuItem: true, t_key: "logout", props: { logout: true } },
  {
    path: `${dashboardPath}/404`,
    exact: true,
    component: Page404,
    props: { admin: true },
  },
];

export default () => (
  <Switch>
    {adminRoutes.map((route) => (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        render={() => <route.component {...route.props} />}
      />
    ))}
    <Redirect to={`${dashboardPath}/users`} />
    <Redirect to={`${dashboardPath}/404`} />
  </Switch>
);
