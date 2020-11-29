import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "store/actions";
import selectors from "store/selectors";
import { Loader } from "components";

export default () => {
  // define hooks
  const dispatch = useDispatch();

  //define actions
  const find = () => dispatch(actions.users.find());
  const create = (data) => dispatch(actions.users.create(data));
  const remove = (data) => dispatch(actions.users.remove(data));
  const update = (data) => dispatch(actions.users.update(data));

  //define selectors
  const { rows, loaded } = useSelector(selectors.users);

  useEffect(() => {
    find();
  }, [dispatch]);

  return loaded ? (
    <div className='container'>
      <table className='table-fixed w-full'>
        <thead>
          <tr>
            <th className='w-1/2 px-4 py-2'>Name</th>
            <th className='w-1/4 px-4 py-2'>Email</th>
            <th className='w-1/4 px-4 py-2'>Gender</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((record) => (
            <tr key={record.id}>
              <td className='border px-4 py-2' children={record.name} />
              <td className='border px-4 py-2' children={record.email} />
              <td className='border px-4 py-2' children={record.gender} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
      <Loader.Absolute />
    );
};
