import axios from "axios";


const api = axios.create({
  baseURL: 'http://localhost:5280/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
api.interceptors.response.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api;