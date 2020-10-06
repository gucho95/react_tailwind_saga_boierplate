import React from "react";
import AdminRouter from "routers/admin";
import { isAuth } from "utils/authWrapper";
import { withRouter } from "react-router-dom";
import actions from "store/actions";
import { useDispatch } from "react-redux";
import { Sidebar } from "components";

const Dashboard = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.admin.logout());

  return (
    <div className='flex items-start'>
      <Sidebar onLogout={logout} />
      <div className='mx-4 p-1 mt-6 w-full max-w-full '>
        <AdminRouter />
      </div>
    </div>
  );
};

export default withRouter(isAuth(Dashboard));
