import axios from 'axios';
import { store } from 'store/config';
const { REACT_APP_API_ROOT } = process.env;

export default () => {
  //   const token = getToken();
  //   const lang = getLocalization();
  //   const paths = window.location.pathname.split("/");
  //check where request comes from admin/website, to include token in request header or not
  //   const includeToken = paths[1] === "dashboard";

  const service = axios.create({
    baseURL: REACT_APP_API_ROOT,
    headers: {
      //   Authorization: token && includeToken ? `Bearer ${token}` : null,
      //   lang,
    },
  });
  service.interceptors.response.use(
    (response) => response.data,
    (error) => {
      const response = error.response.data;
      if (response.code === 401) {
        store.dispatch({ type: 'o'.SUCCESS, payload: null });
      }
      return Promise.reject(response);
    }
  );
  return service;
};
