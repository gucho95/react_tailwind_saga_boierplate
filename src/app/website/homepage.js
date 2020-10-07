import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import actions from "store/actions";
import selectors from "store/selectors";
import { Loader } from "components";

export default () => {
  // define hooks
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  //define actions
  const find = () => dispatch(actions.users.find());
  const create = (data) => dispatch(actions.users.create(data));
  const remove = (data) => dispatch(actions.users.remove(data));
  const update = (data) => dispatch(actions.users.update(data));
  //define selectors
  const { rows, loaded, failed } = useSelector(selectors.users);

  useEffect(() => {
    find();
  }, [dispatch]);
  return (
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
          {loaded ? (
            rows.map((record) => (
              <tr key={record.id}>
                <td className='border px-4 py-2' children={record.name} />
                <td className='border px-4 py-2' children={record.email} />
                <td className='border px-4 py-2' children={record.gender} />
              </tr>
            ))
          ) : (
            <Loader.Absolute />
          )}
        </tbody>
      </table>
    </div>
  );
};
