import React, { useEffect } from "react";
import actions from "store/actions";
import selectors from "store/selectors";
import { useDispatch, useSelector } from "react-redux";
import WebsiteRouter from "routers/website";
import { Navbar } from "components";

export default () => {
  // define hooks
  const dispatch = useDispatch();
  //define actions
  const find = () => dispatch(actions.users.find());
  const create = (data) => dispatch(actions.users.create(data));
  const remove = (data) => dispatch(actions.users.remove(data));
  const update = (data) => dispatch(actions.users.update(data));
  //define selectors
  const { data, loaded, failed } = useSelector(selectors.users);
  useEffect(() => {
    find();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <WebsiteRouter />
    </div>
  );
};
