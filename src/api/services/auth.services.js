import { api } from "../api.config";

export const login = async (data) => {
  const response = await api
    .post("auth/login", data)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((error) => {
      return { status: error.response.status, data: error.response.data };
    });

  return response;
};

export const register = async (data) => {
  const response = await api
    .post("auth/register", data)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((error) => {
      return { status: error.response.status, data: error.response.data };
    });

  return response;
};

export const logout = async () => {
  api.defaults.headers.common["Authorization"] =
    `Bearer ${localStorage.getItem("token")}`;
  const response = await api
    .post("auth/logout")
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((error) => {
      return { status: error.response.status, data: error.response.data };
    });

  return response;
};
