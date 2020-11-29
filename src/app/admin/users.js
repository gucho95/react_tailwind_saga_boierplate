import React, { useEffect } from "react";
import actions from "store/actions";
import selectors from "store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "components";

export default () => {
  const dispatch = useDispatch();
  const find = () => dispatch(actions.users.find());
  //define selectors
  const { rows, loaded, failed } = useSelector(selectors.users);

  useEffect(() => {
    find();
  }, [dispatch]);

  return (
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
          !failed ?
            rows.map((record) => (
              <tr key={record.id}>
                <td className='border px-4 py-2' children={record.name} />
                <td className='border px-4 py-2' children={record.email} />
                <td className='border px-4 py-2' children={record.gender} />
              </tr>
            )) : 'failed'
        ) : (
            <Loader.Absolute />
          )}
      </tbody>
    </table>
  );
};
