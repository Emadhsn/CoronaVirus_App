import axios from "axios";

export const axiosService = async ({ url, method, params = {} }) => {
  const config = {
    url,
    method,
  };

  if (method === "POST") {
    config.data = params;
  }


  return await axios({
    ...config,
  });
};

export const tokenSelector = (state) => state.auth?.entities?.data?.accessToken;

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
