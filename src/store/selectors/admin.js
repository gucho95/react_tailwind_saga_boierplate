const key = 'dashboard';

export default (state) => ({
  loaded: state[key].loaded,
  failed: state[key].failed,
  data: state[key].data,
});
