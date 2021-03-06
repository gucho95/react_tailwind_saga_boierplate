const key = 'users';

export default (state) => ({
  loaded: state[key].loaded,
  failed: state[key].failed,
  rows: state[key]?.data?.rows,
  count: state[key]?.data?.count,
});
