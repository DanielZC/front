import { api } from "../api.config";

export const list = async (id) => {
  api.defaults.headers.common["Authorization"] =
    `Bearer ${localStorage.getItem("token")}`;
  const response = await api
    .get(`habitaciones/list/${id}`)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((error) => {
      return { status: error.response.status, data: error.response.data };
    });

  return response;
};

export const get = async (id) => {
  api.defaults.headers.common["Authorization"] =
    `Bearer ${localStorage.getItem("token")}`;
  const response = await api
    .get(`habitaciones/${id}`)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((error) => {
      return { status: error.response.status, data: error.response.data };
    });

  return response;
};

export const store = async (data) => {
  api.defaults.headers.common["Authorization"] =
    `Bearer ${localStorage.getItem("token")}`;
  const response = await api
    .post("habitaciones/store", data)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((error) => {
      return { status: error.response.status, data: error.response.data };
    });

  return response;
};

export const update = async (data, id) => {
  api.defaults.headers.common["Authorization"] =
    `Bearer ${localStorage.getItem("token")}`;
  const response = await api
    .put(`habitaciones/update/${id}`, data)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((error) => {
      return { status: error.response.status, data: error.response.data };
    });

  return response;
};

export const destroy = async (id) => {
  api.defaults.headers.common["Authorization"] =
    `Bearer ${localStorage.getItem("token")}`;
  const response = await api
    .delete(`habitaciones/delete/${id}`)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((error) => {
      return { status: error.response.status, data: error.response.data };
    });

  return response;
};
